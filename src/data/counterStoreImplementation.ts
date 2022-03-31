import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Counter } from '../domain/counterEntity';
import { CounterStore } from '../domain/counterStore';
import {
  getCounterAction,
  setCounterAction,
  updateCounterAction,
} from './counterActions';
import type { CounterStoreState } from './counterReducer';

const counterSelector = (state: CounterStoreState) => state;

const useCounterStoreImplementation = (): CounterStore => {
  const { counter, isLoading, isUpdating } = useSelector(counterSelector);
  const dispatch = useDispatch();

  const setCounter = React.useCallback(
    (counter: Counter) => setCounterAction(counter)(dispatch),
    [dispatch]
  );

  const loadInitialCounter = React.useCallback(
    () => getCounterAction()(dispatch),
    [dispatch]
  );

  const updateCounter = React.useCallback(
    (counter: Counter) => updateCounterAction(counter)(dispatch),
    [dispatch]
  );

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
