import React from "react";
import type { CounterStore } from "../domain/counterStore";
import { decrementCounterUseCase } from "../use-cases/decrementCounter";
import { getCounterUseCase } from "../use-cases/getCounter";
import { incrementCounterUseCase } from "../use-cases/incrementCounter";

const useCounterViewModel = (store: CounterStore) => {
  const getCounter = React.useCallback(() => {
    getCounterUseCase({
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
    shouldShowSpinner: typeof store.counter === "undefined" || store.isLoading,
    shouldDisableButton: store.counter?.value === 0,
    getCounter,
    incrementCounter,
    decrementCounter,
  };
};

export { useCounterViewModel };
