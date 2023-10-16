import { useState, useMemo, useCallback } from 'react';

export function Test1() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  // const factorialResult = calculateFactorial(number);
  const factorialResult = useMemo(() => calculateFactorial(number), [number]);
  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial of the following Number
      <input type="number" value={number} onChange={onChange} />
      <br />
      is {factorialResult}
      <br />
      <button onClick={onClick}>Increment</button> <span>{inc}</span>
    </div>
  );
}

function calculateFactorial(number) {
  console.log('calculateFactorial called!');
  return number <= 0 ? 1 : number * calculateFactorial(number - 1);
}
