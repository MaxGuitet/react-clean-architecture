import { decrement } from "../domain/counterEntityRules";
import { updateCounterUseCase } from "./updateCounter";
import type { UpdateCounterStore } from "./updateCounter";

const decrementCounterUseCase = (store: UpdateCounterStore) => {
  return updateCounterUseCase(store, decrement);
};

export { decrementCounterUseCase };
