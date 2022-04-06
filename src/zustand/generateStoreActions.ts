import { CounterStore } from '../domain/counterStore';
import { CounterStoreState } from './initialStoreState';
import { getCounter, updateCounter } from '../api/counterAPIService';
import { Counter } from '../domain/counterEntity';
import { setFunction } from './counterStore';

type CounterStoreActions = Pick<
  CounterStore,
  'loadInitialCounter' | 'setCounter' | 'updateCounter'
>;

// const generateStoreActions = (set: Function) => ({
//   //? Here we have a function taking care of *both* loading and setting loading state.
//   //? Should we decouple that to have a setLoading and consume it outside?
//   loadInitialCounter: async () => {
//     set((state: CounterStoreState) => ({ ...state, isLoading: true }));
//     const counter = getCounter();
//     set((state: CounterStoreState) => ({ ...state, counter, isLoading: false }));
//   },
//   setCounter: (counter: Counter) =>
//     set((state: CounterStoreState) => ({ ...state, counter })),
//   updateCounter: () => {},
// });

const generateStoreActions = (set: setFunction) => ({
  setLoadingCounter: (loadingState: boolean) =>
    set(state => ({ ...state, isLoading: loadingState })),
  setUpdatingCounter: (updatingState: boolean) =>
    set(state => ({ ...state, isUpdating: updatingState })),
  setCounter: (counter: Counter) => set(state => ({ ...state, counter })),
});

export { generateStoreActions };
