import { compare, CompareOperator } from 'compare-versions';
import { versionMap } from './version-map';

export interface MatchOptions {
  includes?: boolean[];
  excludes?: boolean[];
}

export function now() {
  if (typeof performance !== 'undefined') {
    return performance.now();
  } else {
    return Date.now();
  }
}

export function match(options: MatchOptions = {}): boolean {
  const { includes = [], excludes = [] } = options;

  let included = false;
  let excluded = false;

  for (const item of includes) {
    if (item === true) {
      included = true;
      break;
    }
  }

  for (const item of excludes) {
    if (item === true) {
      excluded = true;
      break;
    }
  }

  return included && !excluded;
}

export function specificVersionMatch(
  specific: string,
  version: string,
  operator: CompareOperator
): boolean {
  const specificVersion = versionMap[specific];

  if (specificVersion === undefined) {
    return false;
  }

  return compare(specificVersion, version, operator);
}

declare const global: any;

export function getGlobalThis(this: any): typeof globalThis {
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }

  return this;
}

