import React, { Suspense } from "react";

import SuspenseSkeleton from "../Loader/Skeleton";


interface IRouteSuspenseProps {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function RouteSuspense({ children }: IRouteSuspenseProps) {
  return <Suspense fallback={<SuspenseSkeleton />}>{children}</Suspense>;
}

export default RouteSuspense;