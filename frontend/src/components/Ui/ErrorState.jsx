import {RefreshCw } from "lucide-react";

const ErrorState = ({message,onRetry}) => {
  return (
    <>
    <div className="flex flex-col h-58 items-center justify-center gap-4">
      <p className="text-danger text-2xl text-center">{message}</p>
      <button
        onClick={onRetry}
        className="flex items-center gap-2 bg-primary hover:bg-primary-hover active:scale-95 text-white rounded-md px-4 py-2 cursor-pointer transition-all duration-200"
        >
        <RefreshCw size={15} />
        Try again
      </button>
    </div>
 </>
  );
};

export default ErrorState;
