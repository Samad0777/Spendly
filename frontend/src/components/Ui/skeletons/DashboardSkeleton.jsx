import Skeleton from "react-loading-skeleton";
import useTheme from "../../../hook/useTheme";

const DashboardSkeleton = () => {
  const { isDark } = useTheme();
  return (
    <main className={`${isDark ? "dark mt-4 grid gap-4 md:grid-cols-2 p-4" : "mt-4 grid gap-4 md:grid-cols-2 p-4"}`}>
      <div className="flex flex-col gap-4 bg-surface shadow-2xl p-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <Skeleton width={150} />
          <Skeleton height={40} width={40} borderRadius={12} />
        </div>
        <Skeleton width={170} />
      </div>

      <div className="flex flex-col gap-4 bg-surface shadow-2xl p-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <Skeleton width={150} />
          <Skeleton height={40} width={40} borderRadius={12} />
        </div>
        <Skeleton width={170} />
      </div>

      <div className="flex flex-col gap-4 bg-surface shadow-2xl p-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <Skeleton width={150} />
          <Skeleton height={40} width={40} borderRadius={12} />
        </div>
        <Skeleton width={170} />
      </div>
    </main>
  );
};

export default DashboardSkeleton;
