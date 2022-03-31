import { updateCounterUseCase } from "./updateCounter";
import type { UpdateCounterStore } from "./updateCounter";
import { increment } from "../domain/counterModel";

const incrementCounterUseCase = (store: UpdateCounterStore) => {
  return updateCounterUseCase(store, increment);
};

export { incrementCounterUseCase };
