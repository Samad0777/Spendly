import {RefreshCw } from "lucide-react";
import Button from "./Button";

const ErrorState = ({message,onRetry}) => {
  return (
    <>
    <div className="flex flex-col h-58 items-center justify-center gap-4">
      <p className="text-danger text-2xl text-center">{message}</p>
      <Button
        onClick={onRetry}
        className="flex items-center gap-2"
        >
        <RefreshCw size={15} />
        Try again
      </Button>
    </div>
 </>
  );
};

export default ErrorState;
