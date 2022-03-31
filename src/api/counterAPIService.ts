import type { Counter } from '../domain/counterEntity';
import { create } from '../domain/counterModel';

const STORAGE_KEY = 'counter';

function getCounter(): Promise<Counter> {
  return Promise.resolve(localStorage.getItem(STORAGE_KEY)).then(
    (defaultValue: string | null) => create(parseInt(defaultValue || '0', 10))
  );
}

function updateCounter(counter: Counter): Promise<Counter> {
  return Promise.resolve(
    localStorage.setItem(STORAGE_KEY, `${counter.value}`)
  ).then(() => create(counter.value));
}

export { getCounter, updateCounter };
