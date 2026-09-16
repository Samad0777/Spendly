import Skeleton from "react-loading-skeleton";

const DashboardSkeleton = () => {
  return (
    <main className="mt-4 grid gap-4 md:grid-cols-2">
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
  )
}

export default DashboardSkeleton