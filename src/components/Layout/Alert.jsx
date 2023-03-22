import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div>
        <div className="flex items-start mb-4 space-x-2">
          {alert.type === "error" && (
            <svg
              className="w-6 h-6 flex-none mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                d="M8 8l8 8M16 8l-8 8"
                strokeWidth="2"
                stroke="#B91C1C"
              ></path>
            </svg>
          )}
          <p className="flex-1 text-base font-semibold leading-7 text-teal-200">
            <strong>{alert.msg}</strong>
          </p>
        </div>
      </div>
    )
  );
}

export default Alert;
