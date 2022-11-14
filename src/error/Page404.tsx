import { memo, FC } from "react";

export const Page404: FC = memo(() => {
  console.log("404");
  return <p>404 Not Found</p>;
});
