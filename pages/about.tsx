import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          className="blur-sm"
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">About Page </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nobis
          recusandae maiores sed porro officiis molestiae ducimus hic,
          aspernatur aliquam mollitia laboriosam illo ab officia obcaecati,
          repellat cupiditate corporis dignissimos!
        </p>
        <div className="card-actions justify-end">
          <Link href="/" className="btn btn-secondary">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
