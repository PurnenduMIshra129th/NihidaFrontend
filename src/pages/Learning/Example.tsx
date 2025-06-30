import React, { useCallback, useEffect, useMemo, useState } from "react";

// eslint-disable-next-line @typescript-eslint/naming-convention
export function Parent() {
  const [count, setCount] = useState(0);
  console.log("Parent re-rendered outside!");
  
  const handleClick = useCallback(() => {
    console.log("Clicked!", count);
  },[]);

  useEffect(() => {
    console.log("Parent re-rendered!");
    
    const timer = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return <Child onClick={handleClick} count={count}/>;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Child = React.memo(({ onClick,count }: { onClick: () => void , count: number}) => {
  console.log("Child re-rendered!");
  return <>
  <button className="pt-[8rem]" onClick={onClick}>Click me</button>;
  <div>Count: {count}</div>
  </>
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