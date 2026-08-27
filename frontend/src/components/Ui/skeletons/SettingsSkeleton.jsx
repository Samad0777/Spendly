import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SettingsSkeleton = () => {
  return (
    <>
     <main className="p-4 bg-background min-h-screen">
      {/* Subtitle */}
      <Skeleton width={260} height={20} />

      {/* Main card */}
      <div className="bg-surface rounded-2xl shadow-xl mt-8 mb-10 px-5 py-10">

        {/* Account */}
        <div className="flex flex-col gap-4">
          <Skeleton width={100} height={25} />

          <div className="py-5 space-y-5 border-t border-text-secondary mt-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <Skeleton width={90} height={20} />
              <Skeleton width={150} height={20} />
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <Skeleton width={60} height={20} />
              <Skeleton width={190} height={20} />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div>
          <Skeleton width={120} height={25} />

          <div className="py-5 space-y-5 border-t border-text-secondary">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <Skeleton width={75} height={20} />
              <Skeleton width={80} height={20} />
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <Skeleton width={60} height={20} />
              <Skeleton width={80} height={20} />
            </div>
          </div>
        </div>

        {/* Session */}
        <div className=" py-4">
          <Skeleton width={80} height={25} />

          <div className="py-5 space-y-5 border-t border-text-secondary">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <Skeleton width={180} height={20} />
              <Skeleton width={70} height={40} borderRadius={6} />
            </div>
          </div>
        </div>

      </div>
    </main>
    </>
  )
}

export default SettingsSkeleton