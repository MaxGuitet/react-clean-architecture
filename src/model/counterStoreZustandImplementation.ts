import { useCallback } from 'react';
import { Counter } from '../domain/counterEntity';
import { CounterStore } from '../domain/counterStore';
import { useCounterStore } from '../zustand/counterStore';
import {
  getCounter,
  updateCounter as updateCounterService,
} from '../api/counterAPIService';

const useCounterStoreImplementation = (): CounterStore => {
  const {
    counter,
    isLoading,
    isUpdating,
    setCounter: setCounterAction,
    setUpdatingCounter,
    setLoadingCounter,
  } = useCounterStore();

  const setCounter = useCallback((counter: Counter) => {
    setCounterAction(counter);
  }, []);

  const loadInitialCounter = useCallback(async () => {
    setLoadingCounter(true);

    const counter = await getCounter();
    setCounterAction(counter)

    setLoadingCounter(false);

    return counter;
  }, []);

  const updateCounter = useCallback(async (counter: Counter) => {
    setUpdatingCounter(true);

    const newCounter = await updateCounterService(counter);

    setUpdatingCounter(false);

    return newCounter;
  }, []);

  return {
    counter,
    isLoading,
    isUpdating,
    setCounter,
    loadInitialCounter,
    updateCounter,
  };
};

export { useCounterStoreImplementation };
