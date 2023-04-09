import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <div className="card bg-base-100 shadow-xl grid lg:grid-cols-2 gap-4">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_io7rOlljz4?controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="m-2 border-solid hover:border-dotted rounded-2xl"
      ></iframe>
      <article className="m-2">
        <h2 className="text-2xl font-bold tracking-tight">
          Healthy Relationships
        </h2>
        <p></p>
      </article>
    </div>
  );
};
export default IndexPage;
