"use client";

import Link from "next/link";

import PageContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import GenderChart from "@/components/admin-panel/charts/gender-chart";
import { Card, CardContent } from "@/components/ui/card";
import { AdminSummaries } from "@/constants/AdminDashboard";
import DashboardSummary from "@/components/admin-panel/cards/dashboard-summary";
import EarningsAndFeesChart from "@/components/admin-panel/charts/earnings-and-fees-chart";
import ExpensesBarChart from "@/components/admin-panel/charts/expenses-bar-chart";
import CardHeader from "@/components/card-header";

export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PageContent>
        <div className="grid gap-2 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {AdminSummaries.map((summary, index) => (
            <DashboardSummary
              key={index}
              icon={summary.icon}
              title={summary.title}
              apiEndpoint={summary.apiEndpoint}

            />
          ))}
        </div>
        <div className="mt-8 grid gap-2 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="lg:col-span-2 h-[300px] md:h-[500px] p-8 pb-16 bg-straw-50 dark:bg-straw-900">
            <CardHeader label="Earnings" />
            <EarningsAndFeesChart />
          </Card>
          <Card className="lg:col-span-1 h-[300px] md:h-[500px] p-8 pb-16 bg-straw-50 dark:bg-straw-900">
            <CardHeader label="Expenses" />
            <ExpensesBarChart />
          </Card>
          <Card className="lg:col-span-1 h-[300px] md:h-[500px] p-8 pb-16 bg-straw-50 dark:bg-straw-900">
            <CardHeader label="Gender" />
            <GenderChart />
          </Card>
        </div>
        <div className="mt-8 grid gap-2 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="w-full bg-straw-50 dark:bg-straw-900 p-8 rounded-md">
            <CardHeader label="Event Calender" />
            <div className=" flex justify-center items-center">
              {/* <DatePicker /> */}
            </div>
          </Card>
          <Card className="w-full h-[500px] bg-straw-50 dark:bg-straw-900 p-8 rounded-md">
            <CardHeader label="Website Traffic" />
          </Card>
          <Card className="w-full h-[500px] bg-straw-50 dark:bg-straw-900 p-8 rounded-md">
            <CardHeader label="Notice Board" />
          </Card>
        </div>
      </PageContent>
    </ContentLayout>
  );
}
