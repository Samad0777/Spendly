import { useEffect, useState } from "react";
import Card from "../components/Ui/Card";
import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import useTransactions from "../hook/useTransactions";
import "react-loading-skeleton/dist/skeleton.css";
import ErrorState from "../components/Ui/ErrorState";
import DashboardSkeleton from "../components/Ui/skeletons/DashboardSkeleton";

const Dashboard = () => {
  const { dashboardSummary, dashboardSummaryHandler, dashboardLoading } =
    useTransactions();
  const [dashboardError, setdashboardError] = useState(null);

  const fetchSummary = async () => {
    try {
      await dashboardSummaryHandler();
      setdashboardError(null);
    } catch (err) {
      let message = "something went wrong. please try again.";
      message = err.response?.data?.message || message;
      setdashboardError(message);
    }
  };
  useEffect(() => {
    fetchSummary();
  }, []);

  const netBalance = dashboardSummary.balance ?? 0;
  const totalIncome = dashboardSummary.totalIncome ?? 0;
  const totalExpense = dashboardSummary.totalExpense ?? 0;

  return (
    <>
      {dashboardLoading ? (
        <DashboardSkeleton/>
      ) : dashboardError ? (
        <ErrorState message={dashboardError} onRetry={fetchSummary} />
      ) : (
        <main className="p-4 bg-background h-full">
          <div className="grid gap-4 md:grid-cols-2">
            <Card
              title="Net Balance"
              amount={netBalance}
              icon={Wallet}
              iconColor={"text-text-first"}
              iconBg={"bg-bg-first"}
            />
            <Card
              title="Total Income"
              amount={totalIncome}
              icon={TrendingUp}
              iconColor={"text-text-second"}
              iconBg={"bg-bg-second"}
            />
            <Card
              title="Total Expenses"
              amount={totalExpense}
              icon={TrendingDown}
              iconColor={"text-text-third"}
              iconBg={"bg-bg-third"}
            />
          </div>
        </main>
      )}
    </>
  );
};

export default Dashboard;
