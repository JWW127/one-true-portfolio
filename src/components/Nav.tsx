import { Stars } from "./Stars";
type NavProps = {
  children: React.ReactNode;
};
const Nav = ({ children }: NavProps) => {
    return <nav><Stars />{children}</nav>;
};

export default Nav;
