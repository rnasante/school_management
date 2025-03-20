import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export default function PageContent({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Card className="rounded-lg border-none mt-6 h-[95%] overflow-scroll overflow-x-hidden">
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  );
}
