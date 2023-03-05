import { useState } from "react";
import Alert from "../components/Alert";
import Icon from "../components/Icon";

const classNames = {
  upvote: new Set(["btn", "btn-outline", "btn-success", "btn-sm"]),
  downvote: new Set(["btn", "btn-outline", "btn-error", "btn-sm"]),
  alert: new Set(["w-fit", "px-3"]),
};

globalThis["myclassnames"] = classNames;

const ThoughtOfTheMoment: React.FC<{ title: string; message: string }> = ({
  title,
  message,
}) => {
  const [thoughtOfTheMomentUp, setThoughtOfTheMomentUp] = useState(0);
  const [thoughtOfTheMomentDown, setThoughtOfTheMomentDown] = useState(0);
  const topAlert: JSX.Element = (
    <Alert
      variant="success"
      title={title}
      description={message}
      //   fill
      divProps={{ className: Array.from(classNames.alert).join(" ") }}
    >
      <div className="btn-group">
        {/* tooltip with upvote button */}
        <button
          className={Array.from(classNames.upvote).join(" ")}
          onClick={() => {
            setThoughtOfTheMomentUp((c) => c + 1);
            setThoughtOfTheMomentDown(0);
            classNames.downvote.add("btn-disabled");
          }}
          onKeyUp={({ key }) =>
            key.toLowerCase() === "r"
              ? setThoughtOfTheMomentUp((c) => {
                  if (c === 1 && classNames.downvote.has("btn-disabled")) {
                    const confirmed = confirm("enable upvote");
                    if (confirmed) {
                      classNames.downvote.delete("btn-disabled");
                      return 0;
                    }
                  }
                  return 1;
                })
              : null
          }
        >
          {thoughtOfTheMomentUp}
          <Icon
            id="downarrow"
            svgProps={{ className: "rotate-180 fill-none" }}
            simplePath
          />
        </button>
        {/* tooltip with downvote button */}
        <button
          className={Array.from(classNames.downvote).join(" ")}
          onClick={() => {
            setThoughtOfTheMomentDown((c) => c + 1);
            setThoughtOfTheMomentUp(0);
            classNames.upvote.add("btn-disabled");
          }}
          onKeyUp={({ key }) =>
            key.toLowerCase() === "r"
              ? setThoughtOfTheMomentDown((c) => {
                  if (c === 1 && classNames.upvote.has("btn-disabled")) {
                    const confirmed = confirm("enable upvote");
                    if (confirmed) {
                      classNames.upvote.delete("btn-disabled");
                      return 0;
                    }
                  }
                  return 1;
                })
              : null
          }
        >
          {thoughtOfTheMomentDown}
          <Icon
            id="downarrow"
            svgProps={{ className: "fill-none" }}
            simplePath
          />
        </button>
      </div>
      <div
        className="tooltip tooltip-bottom tooltip-info text-sm lg:left-2 lg:top-6 text-slate-500"
        data-tip="press r to reset (twice!)"
      >
        <Icon id="info" />
      </div>
    </Alert>
  );
  return topAlert;
};
export default ThoughtOfTheMoment;
