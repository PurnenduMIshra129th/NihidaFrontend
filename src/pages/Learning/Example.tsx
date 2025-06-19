import React, { useEffect, useMemo, useState } from "react";

// eslint-disable-next-line @typescript-eslint/naming-convention
export function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked!", count);
  };

  useEffect(() => {
    const timer = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return <Child onClick={handleClick} />;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child re-rendered!");
  return <button className="pt-[5rem]" onClick={onClick}>Click me</button>;
});

const fibonacci = (n: number) : number => {
console.log('fucked up fibonacci is trying to run');
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function FuckedUpFibonacci() {
  const [num, setNum] = useState(3);

  const result = useMemo(() => fibonacci(num), [num]);

  return (
    <div className="pt-[5rem]">
      <p>Fibonacci of {num} is {result}</p>
      <button onClick={() => setNum(num + 1)}>Next</button>
    </div>
  );
}