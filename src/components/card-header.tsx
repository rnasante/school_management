import { Ellipsis } from "lucide-react";
import React from "react";

const CardHeader = ({ label }: CardHeaderProps) => {
  return (
    <div className="flex justify-between mb-2">
      <h3 className="text-[22px] font-semibold">{label}</h3>
    </div>
  );
};

export default CardHeader;
