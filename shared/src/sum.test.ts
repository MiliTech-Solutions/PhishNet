import { describe, it, expect } from 'vitest';
import { sum, SHARED_VERSION } from './index';

describe('sum utility', () => {
  it('adds positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
  it('adds negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });
});

describe('shared version constant', () => {
  it('exposes a dev version string', () => {
    expect(SHARED_VERSION).toMatch(/dev/);
  });
});
