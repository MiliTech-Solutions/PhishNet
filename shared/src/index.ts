// Shared library entrypoint (structure only)
// Lightweight sample utility to enable initial CI test & coverage success.

/** Sum two numbers (demo utility). */
export function sum(a: number, b: number): number {
	return a + b;
}

/** Simple constant used by tests to ensure module execution. */
export const SHARED_VERSION = '0.0.0-dev';

// Future: export types/utilities as they are implemented.