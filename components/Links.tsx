import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "./Icon";
type VariantsType = "ghost" | "disabled";
import initValue from "../config/links"

const Links: React.FC<{
  variant?: VariantsType;
  direction?: "start" | "end";
}> = ({ variant }) => {
  const [currentHref, setCurrentHref] = useState("");
  useEffect(() => {
    // alert(window.location.pathname);
    setCurrentHref((c) => {
      if (window.location.pathname && window.location.pathname !== c) {
        return window.location.pathname;
      }
      return c;
    });
  });
  return (
    <div
      className={`dropdown ${
        variant === "disabled" ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <label tabIndex={0} className={`btn${variant ? " btn-" + variant : ""}`}>
        <Icon id="hamburger2" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu menu-compact mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52"
      >
        <li className="menu-title" tabIndex={0}>
          <span>Click to change the view!!</span>
          <ul className="rounded-box bg-base-100 p-2">
            <li>
              <span>Level 2</span>
              <ul>
                <li>
                  <span>Level 3</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        {initValue.map((link) => (
          <li key={link.title} className="hover-bordered">
            <Link
              href={link.href}
              className={link.href === currentHref ? "active" : ""}
              onClickCapture={() => setCurrentHref(link.href)}
            >
              <Icon id={link.iconId} /> {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Links;
