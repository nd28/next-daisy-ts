import Icon from "./Icon";
type VariantTypes = "info" | "success" | "warning" | "error";
const Alert: React.FC<{
  variant?: VariantTypes;
  fill?: boolean;
  children?: React.ReactNode;
  title?: string;
  description?: string;
}> = ({ variant, children, title, description, fill = false }) => {
  return (
    <div
      className={`alert${variant && fill ? " alert-" + variant : ""} shadow-lg`}
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
  );
};
export default Alert;
