import { getIconD, IconTypes } from "../utils/getIcon";

const Icon: React.FC<{
  id: IconTypes;
  svgProps?: any;
  simplePath?: boolean;
}> = ({ id, svgProps = {}, simplePath = false }) => {
  return (
    <svg
      {...svgProps}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={`stroke-current flex-shrink-0 w-6 h-6 ${
        svgProps?.className ?? ""
      }`}
    >
      {simplePath ? (
        <path d={getIconD(id)} />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={getIconD(id)}
        />
      )}
    </svg>
  );
};
export default Icon;
