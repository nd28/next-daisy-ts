import { useState, useEffect } from "react";
import Alert from "./Alert";
const Notifications: React.FC<{ bellIconClickedRef?: any }> = ({
  bellIconClickedRef,
}) => {
  const [show, setShow] = useState(bellIconClickedRef);
  useEffect(() => {
    // it will automatically open the Notifications when the bell icon is clicked and you change the view
    setShow(bellIconClickedRef);
  }, [bellIconClickedRef]);
  return (
    <>
      {show && (
        <>
          <Alert
            title="New message!"
            description="You have 1 unread message"
            variant="info"
            // fill
          >
            <button className="btn btn-sm">See</button>
          </Alert>
          <Alert
            title="we use cookies for no reason."
            variant="info"
            // fill
          >
            <button className="btn btn-sm btn-ghost">Deny</button>
            <button className="btn btn-sm btn-primary">Accept</button>
          </Alert>
        </>
      )}
      <button
        className="btn btn-sm btn-square"
        onClick={() =>
          setShow((current) => {
            return !current;
          })
        }
      >
        N
      </button>
    </>
  );
};
export default Notifications;
