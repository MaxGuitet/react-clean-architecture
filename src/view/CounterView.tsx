import type { FC } from 'react';
import React from 'react';
import { useCounterViewModel } from '../controller/counterViewModel';
import { useCounterStoreImplementation } from '../zustand/counterStoreImplementation';

const Button: FC<any> = ({ children, ...props }) => (
  <button
    type="button"
    role="button"
    style={{
      color: 'white',
      border: '1px solid grey',
      background: 'transparent',
      borderRadius: 2,
      padding: '4px 8px',
    }}
    {...props}
  >
    {children}
  </button>
);

const Spinner = ({ tip }: { tip?: string }) => <>{tip}...</>;

const Count: FC = ({ children }) => <h3>{children}</h3>;

const CounterView = () => {
  const store = useCounterStoreImplementation();
  const {
    count,
    shouldDisableButton,
    shouldShowSpinner,
    initCounter,
    incrementCounter,
    isUpdating,
    decrementCounter,
  } = useCounterViewModel(store);

  React.useEffect(() => {
    initCounter();
  }, [initCounter]);

  return shouldShowSpinner ? (
    <Spinner />
  ) : (
    <>
      <div
        style={{
          display: 'flex',
          gap: 40,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button disabled={shouldDisableButton} onClick={decrementCounter}>
          dec
        </Button>
        <Count>{count}</Count>
        <Button onClick={incrementCounter}>inc</Button>
      </div>
      {isUpdating && <Spinner tip="Syncing" />}
    </>
  );
};

export default CounterView;
