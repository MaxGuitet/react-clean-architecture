import type { Counter } from '../domain/counterEntity';
import * as actionTypes from './counterActionTypes';
import type { Dispatch } from 'redux';
import { getCounter, updateCounter } from '../api/counterAPIService';

const setCounterAction = (counter: Counter) => (dispatch: Dispatch) =>
  dispatch({ type: actionTypes.SET_COUNTER, counter });

const getCounterAction = () => (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.GET_COUNTER });

  return getCounter().then((counter) => {
    dispatch({ type: actionTypes.GET_COUNTER_SUCCESS, counter });

    return counter;
  });
};

const updateCounterAction = (counter: Counter) => (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.UPDATE_COUNTER });

  return updateCounter(counter).then((counter) => {
    dispatch({ type: actionTypes.UPDATE_COUNTER_SUCCESS });

    return counter;
  });
};

export { setCounterAction, getCounterAction, updateCounterAction };
