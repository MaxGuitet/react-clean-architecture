import type { FC } from 'react';
import React from 'react';
import { useCounterViewModel } from '../controller/counterViewModel';
import { useCounterStoreImplementation } from '../data/counterStoreImplementation';

const Button: FC<any> = ({ children, ...props }) => (
  <button
    type="button"
    style={{
      border: '1px solid grey',
      background: 'transparent',
      borderRadius: 2,
    }}
    {...props}
  >
    {children}
  </button>
);

const Spinner = () => <>...</>;

const Count: FC = ({ children }) => <h3>{children}</h3>;

const CounterView = () => {
  const store = useCounterStoreImplementation();
  const {
    count,
    shouldDisableButton,
    shouldShowSpinner,
    getCounter,
    incrementCounter,
    decrementCounter,
  } = useCounterViewModel(store);

  React.useEffect(() => {
    getCounter();
  }, [getCounter]);

  return (
    <div>
      {shouldShowSpinner ? (
        <Spinner />
      ) : (
        <>
          <Button disabled={shouldDisableButton} onClick={decrementCounter}>
            dec
          </Button>
          <Count>{count}</Count>
          <Button onClick={incrementCounter}>inc</Button>
        </>
      )}
    </div>
  );
};

export default CounterView;
