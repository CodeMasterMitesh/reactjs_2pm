import { useMemo, useState } from "react";

const runHeavyCalculation = () => {
  let i = 0;
  while (i <= 200000000) i++;
  return i;
};

const HeavyCalculationWithMemo = () => {
  const startedAt = performance.now();
  const result = useMemo(() => {
    const value = runHeavyCalculation();
    return value;
  }, []);
  const renderTime = (performance.now() - startedAt).toFixed(2);

  return (
    <div>
      <h3>With useMemo</h3>
      <p>Result: {result}</p>
      <p>Render time: {renderTime} ms</p>
    </div>
  );
};

const HeavyCalculationWithoutMemo = () => {
  const startedAt = performance.now();
  const result = runHeavyCalculation();
  const renderTime = (performance.now() - startedAt).toFixed(2);

  return (
    <div>
      <h3>Without useMemo</h3>
      <p>Result: {result}</p>
      <p>Render time: {renderTime} ms</p>
    </div>
  );
};

export const UseMemoHooks = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <div>
        <h2>useMemo Comparison</h2>
        <HeavyCalculationWithMemo />
        <HeavyCalculationWithoutMemo />
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
};
