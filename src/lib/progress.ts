// Client-side course progress: which days a visitor has marked done, and the
// streak/resume-day derived from that. Stored in localStorage only (there are
// no accounts) — same pattern already used for the dark-mode toggle. Every
// function is safe to call during SSR/build (falls back to empty state) and
// guards every localStorage call, since some browsers throw in private mode.

const STORAGE_KEY = 'aifluency.progress.v1';

export interface ProgressState {
  /** Day numbers the visitor has marked done, ascending. */
  done: number[];
  /** day -> YYYY-MM-DD the day was (most recently) marked done, for streaks. */
  completedAt: Record<number, string>;
}

function emptyState(): ProgressState {
  return { done: [], completedAt: {} };
}

function todayKey(d: Date = new Date()): string {
  return d.toISOString().slice(0, 10);
}

export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.done)) return emptyState();
    return {
      done: parsed.done.filter((n: unknown) => typeof n === 'number'),
      completedAt: parsed.completedAt && typeof parsed.completedAt === 'object' ? parsed.completedAt : {},
    };
  } catch {
    return emptyState();
  }
}

function saveProgress(state: ProgressState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore (private browsing / storage disabled)
  }
}

export function isDayDone(day: number): boolean {
  return loadProgress().done.includes(day);
}

/** Mark a day done (or not). Returns the resulting state. */
export function setDayDone(day: number, done: boolean): ProgressState {
  const state = loadProgress();
  const set = new Set(state.done);
  if (done) {
    set.add(day);
    state.completedAt[day] = todayKey();
  } else {
    set.delete(day);
    delete state.completedAt[day];
  }
  state.done = [...set].sort((a, b) => a - b);
  saveProgress(state);
  return state;
}

/** First not-yet-done day, 1..totalDays. Falls back to totalDays once everything's done. */
export function nextDay(totalDays: number): number {
  const done = new Set(loadProgress().done);
  for (let d = 1; d <= totalDays; d++) {
    if (!done.has(d)) return d;
  }
  return totalDays;
}

/**
 * Consecutive calendar days (ending today or yesterday, so the streak
 * doesn't reset to zero the moment midnight passes before today's session)
 * on which at least one day was marked done.
 */
export function currentStreak(): number {
  const { completedAt } = loadProgress();
  const dates = new Set(Object.values(completedAt));
  if (dates.size === 0) return 0;

  const cursor = new Date();
  if (!dates.has(todayKey(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
  }

  let streak = 0;
  while (dates.has(todayKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}
