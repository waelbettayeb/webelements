export * from "alien-signals";
import { isSignal, isComputed } from "alien-signals";

export function isReactiveValue<T>(value: (() => T) | T): value is () => T {
  return isSignal(value as () => T) || isComputed(value as () => T);
}
