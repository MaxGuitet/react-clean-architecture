import type { CounterStore } from '../domain/counterStore';

type GetCounterStore = Pick<CounterStore, "loadInitialCounter">;

const initCounterUseCase = (store: GetCounterStore): void => {
    store.loadInitialCounter();
};

export { initCounterUseCase };
