/** Tiny scroll-timeline helpers. Pure functions, no dependencies. */

export const clamp01 = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);

/** Progress of p through the window [a, b], clamped to 0..1. */
export const seg = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));

/** Smoothstep easing. */
export const ease = (t: number) => t * t * (3 - 2 * t);

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Round to 3 decimals so style strings stay short and stable. */
export const r3 = (n: number) => Math.round(n * 1000) / 1000;
