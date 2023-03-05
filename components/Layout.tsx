import { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Toast from "./Toast";
import Notifications from "./Notifications";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const bellIconClickedRef = useRef(false);
  // const isBellClicked = () => bellIconClickedRef.current;
  // useEffect(() => {
  //   alert("changed");
  // }, [bellIconClickedRef.current]);
  return (
    <div className="artboard grid place-items-center min-h-screen">
      <Navbar bellIconClickedRef={bellIconClickedRef} />
      <main className="mt-20 mx-4 lg:mx-auto">{children}</main>
      <Toast>
        <Notifications bellIconClickedRef={bellIconClickedRef.current} />
      </Toast>
    </div>
  );
};
export default Layout;
