import create from 'zustand';
import { generateStoreActions } from './generateStoreActions';
import { CounterStoreState, initialState } from './initialStoreState';

type setCallback = (state: CounterStoreState) => CounterStoreState;
type setFunction = (cb: setCallback) => void;

const useCounterStore = create((set: setFunction) => ({
  ...initialState,
  ...generateStoreActions(set),
}));

export type { setFunction };

export { useCounterStore };
