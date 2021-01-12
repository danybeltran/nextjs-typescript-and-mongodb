import { FC } from "react";

const Header: FC = ({ children }) => {
  return <div className="font-semibold text-4xl py-4">{children}</div>;
};
export default Header;
