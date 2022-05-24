import { updateCounterUseCase } from "./updateCounter";
import type { UpdateCounterStore } from "./updateCounter";
import { increment } from "../domain/counterEntityRules";

const incrementCounterUseCase = (store: UpdateCounterStore) => {
  return updateCounterUseCase(store, increment);
};

export { incrementCounterUseCase };
