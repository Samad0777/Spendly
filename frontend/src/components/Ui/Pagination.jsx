import useTheme from "../../hook/useTheme";
import Button from "./Button";
const Pagination = ({
  currentPage,
  totalPages,
  handlePrevious,
  handleNext,
  loading,
}) => {
  const { isDark } = useTheme();
  return (
    <div className="flex items-center justify-center gap-2 bg-surface p-4 rounded-lg">
      <Button
        disabled={currentPage === 1 || loading}
        onClick={handlePrevious}
        variant="normal"
        className={`${isDark ? "dark text-white px-3 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" :  "px-3 py-2 rounded-md bg-background disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"}`}
      >
        Previous
      </Button>

      <p className="bg-primary px-2 py-1 rounded-md text-white">
        {currentPage}
      </p>
      <p>/</p>
      <p className={`${isDark ? "bg-gray-700 px-2 py-1 rounded-md" : "bg-white px-2 py-1 rounded-md"}`}>{totalPages}</p>

      <Button
        disabled={currentPage === totalPages || totalPages === 0 || loading}
        onClick={handleNext}
        variant="normal"
        className={`${isDark ? "dark text-white px-3 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" :  "px-3 py-2 rounded-md bg-background disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"}`}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
