import type { Counter } from './counterEntity';

// interface CounterStore {
//     // State
//     counter: Counter | undefined;
//     isLoading: boolean;
//     isUpdating: boolean;

//     // Actions
//     loadInitialCounter(): Promise<Counter>;
//     setCounter(counter: Counter): void;
//     updateCounter(counter: Counter): Promise<Counter | undefined>;
// }

// export type { CounterStore };


// Could we do this instead ?

interface CounterStoreState {
  counter: Counter | undefined;
  isLoading: boolean;
  isUpdating: boolean;
}

interface CounterStoreActions {
  loadInitialCounter(): Promise<Counter>;
  setCounter(counter: Counter): void;
  updateCounter(counter: Counter): Promise<Counter | undefined>;
}

interface CounterStore extends CounterStoreState, CounterStoreActions {}

export type { CounterStore, CounterStoreState, CounterStoreActions };
