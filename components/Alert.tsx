import Icon from "./Icon";
type VariantTypes = "info" | "success" | "warning" | "error";
const getVariantClassName = (variant: VariantTypes) => `alert-${variant}`;
// const classNames = { alert: new Set(["alert", "shodow-md", "w-fit"]) };
const Alert: React.FC<{
  variant?: VariantTypes;
  fill?: boolean;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  divProps?: any;
}> = ({
  variant,
  children,
  title,
  description,
  fill = false,
  divProps = {},
}) => {
  return (
    <div {...divProps}>
      <div
        // className={Array.from(classNames.alert).join(" ")}
        className={`alert ${
          fill ? getVariantClassName(variant ?? "info") : ""
        } shadow-md`}
      >
        <div>
          {/* id is IconTypes and variant is VariantTypes but all the VariantTypes are included in IconTypes */}
          <Icon id={variant} />
          {(title || description) && (
            <div>
              <h3 className="font-bold">{title}</h3>
              <div className="text-xs">{description}</div>
            </div>
          )}
        </div>
        <div className="flex-none">{children}</div>
      </div>
    </div>
  );
};
export default Alert;
