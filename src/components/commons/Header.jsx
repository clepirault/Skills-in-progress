import Navigation from "./Navigation";
import './Header.css';
import { useContext } from "react";
import { StatusContext } from "../context/StatusContext";

function Header() {
  const { status } = useContext(StatusContext);
  return (
    <div className="header">
      <span className="status">Status {status ? "inline 🟢" : "offline 🔴"}</span>
      <Navigation />
    </div>
  );
}

export default Header;
