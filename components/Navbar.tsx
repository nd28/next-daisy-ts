import Links from "./Links";
import Icon from "./Icon";

const Navbar: React.FC<{ bellIconClickedRef?: any }> = ({
  bellIconClickedRef,
}) => {
  return (
    <div className="absolute top-0 w-full py-2 px-3">
      <div className="navbar bg-base-300 rounded-box">
        <div className="navbar-start">
          <Links variant="ghost" direction="start" />
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-end">
          <div className="flex items-stretch gap-1">
            {/* <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn rounded-btn">
              Dropdown
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
            </div> */}
            <button className="btn btn-square btn-ghost">
              <Icon id="find" />
            </button>
            <button
              className="btn btn-square btn-ghost"
              onClick={() => {
                if (bellIconClickedRef.current) {
                  bellIconClickedRef.current = false;
                } else {
                  bellIconClickedRef.current = true;
                }
                // alert(bellIconClickedRef.current);
              }}
            >
              <Icon id="bell" />
            </button>
            {/* <button className=""> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
