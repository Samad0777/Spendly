import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl md:text-9xl font-black text-primary/20">
          404
        </p>

        <div className="-mt-8 md:-mt-10">
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary">
            Page Not Found
          </h1>

          <p className="mt-3 text-text-secondary max-w-md mx-auto">
            Looks like this page went off the budget.
            Let's get you back on track.
          </p>

          <Link
            to="/dashboard"
            className="inline-block mt-6 bg-primary hover:bg-primary-hover
                       text-white rounded-md px-5 py-2.5
                       transition-all duration-200 active:scale-95"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;