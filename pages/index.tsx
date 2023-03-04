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
          className="blur-sm"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Home Page</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          deleniti labore enim exercitationem illum temporibus, porro tempore
          qui voluptates id, ipsa neque animi suscipit commodi iste quisquam
          nesciunt expedita magni?
        </p>
        <div className="card-actions justify-end">
          <Link href="/about" className="btn btn-primary">
            About us
          </Link>
        </div>
      </div>
    </div>
  );
};
export default IndexPage;
