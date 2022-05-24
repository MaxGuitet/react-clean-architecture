import React from 'react';
import type { CounterStore } from '../domain/counterStore';
import { decrementCounterUseCase } from '../use-cases/decrementCounter';
import { incrementCounterUseCase } from '../use-cases/incrementCounter';
import { initCounterUseCase } from '../use-cases/initCounter';

// Make independant from React?

const useCounterViewModel = (store: CounterStore) => {
  const initCounter = React.useCallback(() => {
    initCounterUseCase({
      loadInitialCounter: store.loadInitialCounter,
    });
  }, [store.loadInitialCounter]);

  const incrementCounter = React.useCallback(() => {
    incrementCounterUseCase({
      counter: store.counter,
      updateCounter: store.updateCounter,
      setCounter: store.setCounter,
    });
  }, [store.counter, store.updateCounter, store.setCounter]);

  const decrementCounter = React.useCallback(() => {
    decrementCounterUseCase({
      counter: store.counter,
      updateCounter: store.updateCounter,
      setCounter: store.setCounter,
    });
  }, [store.counter, store.updateCounter, store.setCounter]);

  return {
    count: store.counter?.value,
    shouldShowSpinner: typeof store.counter === 'undefined' || store.isLoading,
    shouldDisableButton: store.counter?.value === 0,
    isUpdating: store.isUpdating,
    initCounter,
    incrementCounter,
    decrementCounter,
  };
};

export { useCounterViewModel };
