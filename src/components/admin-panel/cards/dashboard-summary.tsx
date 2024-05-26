import { Card } from "@/components/ui/card";
import React from "react";

const DashboardSummary: React.FC<DashboardSummaryProps> = ({
  icon: Icon,
  title,
  count
}) => {
  return (
    <Card className="mt-4 w-full py-[20px] px-[28px] flex justify-between items-center bg-straw-50 dark:bg-straw-900 border-none shadow-md">
      <div className={`rounded-full p-[15px] bg-straw-400`}>
        <Icon size="34px" className="text-straw-100" />
      </div>
      <div className="text-right space-y-2">
        <p className="text-comet-900 text-sm text-[16px]">{title}</p>
        <p className="text-[20px] font-semibold">{count}</p>
      </div>
    </Card>
  );
};

export default DashboardSummary;
