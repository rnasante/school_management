import { Card } from "@/components/ui/card";
// import { Icon } from "next/dist/lib/metadata/types/metadata-types";
// import { IconType } from "react-icons";
import React, {useState, useEffect} from "react";


const DashboardSummary: React.FC<DashboardSummaryProps> = ({
  icon: Icon,
  title,
  apiEndpoint
}) => {
  const [count, setCount] = useState(0); // Holds the count fetched from the API

  useEffect(() => {
    // Fetch data whenever apiEndpoint changes
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setCount(data.count);  // Assume the API returns an object with a count property
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [apiEndpoint]);

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
