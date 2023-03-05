import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsNew from "../components/WhatsNew";

const IndexPage: NextPage = () => {
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <Image
          fill={true}
          priority
          src="/art.jpg"
          alt="art"
          className="blur-sm"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl my-2 inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-slate-200">
          Welcome
        </h2>
        <p>
          Here, you will be finding new things as I learn more. Most recent
          UPDATE is right below
        </p>

        <div className="card-actions justify-center mt-4">
          <WhatsNew />
          {/* <Link href="/about" className="btn btn-primary">
            About us
          </Link> */}
        </div>
      </div>
    </div>
  );
};
export default IndexPage;
