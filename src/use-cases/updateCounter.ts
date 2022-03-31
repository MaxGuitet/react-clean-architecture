import type { Counter } from "../domain/counterEntity";
import type { CounterStore } from "../domain/counterStore";

const debounce =
  (fn: Function, timeout: number) =>
  (...args: any[]) =>
    setTimeout(fn.bind(null, ...args), timeout);

type UpdateCounterStore = Pick<
  CounterStore,
  "counter" | "updateCounter" | "setCounter"
>;

const debouncedTask = debounce(
  (task: Function) => Promise.resolve(task()),
  500
);

const updateCounterUseCase = (
  store: UpdateCounterStore,
  updateBy: (counter: Counter) => Counter
) => {
  const updatedCounter = store.counter
    ? updateBy(store.counter)
    : store.counter;

  if (updatedCounter) {
    store.setCounter(updatedCounter);

    return debouncedTask(() => store.updateCounter(updatedCounter));
  }
};

export { updateCounterUseCase };
export type { UpdateCounterStore };
