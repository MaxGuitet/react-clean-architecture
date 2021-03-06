import type { Counter } from '../domain/counterEntity';
import { create } from '../domain/counterEntityRules';

const STORAGE_KEY = 'counter';

function getCounter(): Promise<Counter> {
  return Promise.resolve(localStorage.getItem(STORAGE_KEY)).then(
    (defaultValue: string | null) => create(parseInt(defaultValue || '0', 10))
  );
}

function updateCounter(counter: Counter): Promise<Counter> {
  return new Promise<void>(res =>
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, `${counter.value}`);
      res();
    }, 1000)
  ).then(() => create(counter.value));
}

export { getCounter, updateCounter };
