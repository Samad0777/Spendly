import React, { useEffect, useState } from "react";
import Card from "../components/Ui/Card";
import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import useTransactions from "../hook/useTransactions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ErrorState from "../components/Ui/ErrorState";

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

  if(dashboardError){
    return(
      <ErrorState
      message={dashboardError}
      onRetry={fetchSummary}
      />
    )
  }

  if (dashboardLoading) {
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
    );
  }

  return (
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
  );
};

export default Dashboard;
