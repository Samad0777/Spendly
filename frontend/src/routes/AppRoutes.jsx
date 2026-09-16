import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../components/layouts/MainLayout";
import ProtectedRoute from "../Guards/ProtectedRoute";
import PageNotFound from "../pages/PageNotFound";
import DashboardSkeleton from "../components/Ui/skeletons/DashboardSkeleton";
import TransactionsListSkeleton from "../components/Ui/skeletons/TransactionsListSkeleton";
import AnalyticsSkeleton from "../components/Ui/skeletons/AnalyticsSkeleton";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Transactions = lazy(() => import("../pages/Transactions"));
const Analytics = lazy(() => import("../pages/Analytics"));
const Settings = lazy(() => import("../pages/Settings"));

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/dashboard" replace /> },
  { path: "*", element: <PageNotFound /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<DashboardSkeleton />}>
              <Dashboard />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/transactions",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<TransactionsListSkeleton />}>
              <Transactions />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/analytics",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<AnalyticsSkeleton />}>
              <Analytics />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <ProtectedRoute>
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center bg-background">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                    <p className="text-text-secondary">
                      Fetching details...
                    </p>
                  </div>
                </div>
              }
            >
              <Settings />
            </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
