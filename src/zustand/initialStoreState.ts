import type { CounterStore } from '../domain/counterStore';

type CounterStoreState = Pick<CounterStore, 'counter' | 'isLoading' | 'isUpdating'>;

const initialState: CounterStoreState = {
  counter: undefined,
  isLoading: false,
  isUpdating: false,
};

export type { CounterStoreState };
export { initialState };
