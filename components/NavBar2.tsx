import Links from "./Links";
import Icon from "./Icon";

const Navbar2: React.FC = () => {
  return (
    <div className="absolute top-0 w-full py-2 px-3">
      <div className="navbar bg-base-300 rounded-box">
        <button className="btn btn-square btn-ghost">
          <Icon id="hamburger" />
        </button>
        <div className="flex-1 px-2 lg:flex-none">
          <a className="text-lg font-bold">daisyUI</a>
        </div>
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch gap-1">
            <Links variant="ghost" />
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
              <Icon id="threedots" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar2;
