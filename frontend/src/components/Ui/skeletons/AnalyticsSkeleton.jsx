import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AnalyticsSkeleton = () => {
  return (
    <main className="m-2 flex flex-col gap-5 p-4">
      <div>
        <Skeleton width={200} />
      </div>

      {/* cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="flex flex-col gap-4 bg-surface shadow-2xl p-4 rounded-2xl mt-1 mb-1">
          <div>
            <Skeleton width={150} />
          </div>
          <Skeleton width={170} />
        </div>

        <div className="flex flex-col gap-4 bg-surface shadow-2xl p-4 rounded-2xl mt-1 mb-1">
          <div>
            <Skeleton width={150} />
          </div>
          <Skeleton width={170} />
        </div>

        <div className="flex flex-col gap-4 bg-surface shadow-2xl p-4 rounded-2xl mt-1 mb-1">
          <div>
            <Skeleton width={150} />
          </div>
          <Skeleton width={170} />
        </div>

        <div className="flex flex-col gap-4 bg-surface shadow-2xl p-4 rounded-2xl mt-1 mb-1">
          <div>
            <Skeleton width={150} />
          </div>
          <Skeleton width={170} />
        </div>
      </div>
      {/* cards  */}

      {/* charts  */}

      {/* bar chart  */}
      <div className="rounded-2xl bg-surface p-5 shadow-2xl">
        {/* Chart title */}
        <Skeleton width={180} height={25} />

        {/* Chart area */}
        <div className="mt-2">
          <Skeleton className="flex-1" height={300} />
        </div>

        {/* Legend */}
        <div className="mt-6 flex justify-center gap-8">
          <Skeleton width={90} height={20} />
          <Skeleton width={90} height={20} />
        </div>
      </div>
      {/* bar chart  */}

      {/* line chart  */}
      <div className="rounded-2xl bg-surface p-5 shadow-2xl">
        {/* Chart title */}
        <Skeleton width={180} height={25} />

        {/* Chart area */}
        <div className="mt-2">
          <Skeleton className="flex-1" height={300} />
        </div>
      </div>
      {/* line chart  */}

      {/* Doughnut chart  */}

      <div className="rounded-2xl bg-surface p-5 shadow-2xl">
        {/* Chart title */}
        <Skeleton width={180} height={25} />

        {/* Chart area */}
        <div className="flex w-full gap-6 items-center">
          <div className="flex-1">
          <Skeleton height={300} />
          </div>
          <div className="flex w-60 flex-col gap-4">
            <Skeleton height={30} />
            <Skeleton height={30} />
            <Skeleton height={30} />
          </div>
        </div>
      </div>

      {/* Doughnut chart  */}

      {/* charts  */}
    </main>
  );
};

export default AnalyticsSkeleton;
