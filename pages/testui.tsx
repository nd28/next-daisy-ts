import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const IndexPage: NextPage = () => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl image-full">
      <figure>
        <Image
          fill={true}
          priority
          src="/art.jpg"
          alt="art"
          className="blur-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Home Page</h2>A normal text and a helper
        dropdown
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-circle btn-ghost btn-xs text-info"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </label>
          <div
            tabIndex={0}
            className="card compact dropdown-content shadow bg-base-100 rounded-box w-64"
          >
            <div className="card-body">
              <h2 className="card-title">You needed more info?</h2>
              <p>Here is a description!</p>
            </div>
          </div>
        </div>
        <p></p>
        <div className="card-actions justify-end">
          <Link href="/testui" className="btn btn-outline">
            Do Nothing
          </Link>
        </div>
      </div>
    </div>
  );
};
export default IndexPage;
