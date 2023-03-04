const Toast: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className="toast toast-end items-end">{children}</div>;
};
export default Toast;
