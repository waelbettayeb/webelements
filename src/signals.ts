export * from "alien-signals";
import { isSignal, isComputed, signal } from "alien-signals";
import type { ValueOrReactive } from "./core";

export function isReactive<T>(value: ValueOrReactive<T>): value is () => T {
  return isSignal(value as () => T) || isComputed(value as () => T);
}

export type Signal<T> = ReturnType<typeof signal<T>>;
