import Link from "next/link";

const WhatsNew: React.FC<{ open?: boolean }> = ({ open = false }) => {
  // Card
  const whatsNewCard = (
    <div className="card bg-primary lg:w-fit text-primary-content">
      <div className="card-body">
        <h2 className="card-title">What's New!!</h2>
        <p>
          I have recently created this page called{" "}
          <Link href="/planMyWeekend" className="btn-link text-slate-300">
            Plan My Weekend
          </Link>
        </p>

        <p>A page to see plans for the upcoming weekend</p>

        <div className="card-actions justify-center lg:justify-end mt-4">
          <Link className="btn btn-success" href="/planMyWeekend">
            Check Now 😇
          </Link>
        </div>
      </div>
    </div>
  );
  return <div>{whatsNewCard}</div>;
};
export default WhatsNew;
