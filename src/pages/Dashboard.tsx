import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FolderKanban, 
  FileText, 
  Clock, 
  AlertTriangle,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const recentActivity = [
  { id: 1, action: "Quote submitted", project: "Yacht Serenity", time: "2 hours ago", status: "pending" as const },
  { id: 2, action: "Project completed", project: "Blue Horizon", time: "5 hours ago", status: "completed" as const },
  { id: 3, action: "Timesheet flagged", project: "Marina Belle", time: "1 day ago", status: "flagged" as const },
  { id: 4, action: "Quote approved", project: "Sea Breeze", time: "2 days ago", status: "approved" as const },
];

const alerts = [
  { id: 1, severity: "error" as const, message: "Project Serenity over budget (+12%)", link: "/projects/1" },
  { id: 2, severity: "warning" as const, message: "Quote for Blue Horizon not responded (5 days)", link: "/quotes/2" },
  { id: 3, severity: "info" as const, message: "3 timesheets need approval", link: "/team" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Duncan. Here's your business overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Projects"
          value="8"
          icon={FolderKanban}
          trend={{ value: "+2 this week", positive: true }}
        />
        <StatCard
          title="Pending Quotes"
          value="3"
          icon={FileText}
          variant="warning"
        />
        <StatCard
          title="Hours This Week"
          value="247h"
          icon={Clock}
          trend={{ value: "+12%", positive: true }}
          variant="success"
        />
        <StatCard
          title="Overdue Timesheets"
          value="2"
          icon={AlertTriangle}
          variant="error"
        />
      </div>

      {/* Alerts Section */}
      {alerts.length > 0 && (
        <Card className="border-orange-200 bg-orange-50/50 dark:border-orange-900 dark:bg-orange-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Alerts & Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-center justify-between rounded-lg border bg-card p-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      alert.severity === "error"
                        ? "bg-status-error"
                        : alert.severity === "warning"
                        ? "bg-status-warning"
                        : "bg-status-info"
                    }`}
                  />
                  <p className="text-sm font-medium">{alert.message}</p>
                </div>
                <Button variant="ghost" size="sm">
                  View
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.project}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                    <StatusBadge status={activity.status} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-primary hover:bg-primary-light" size="lg">
              <FileText className="mr-2 h-4 w-4" />
              Create New Quote
            </Button>
            <Button variant="outline" className="w-full justify-start" size="lg">
              <FolderKanban className="mr-2 h-4 w-4" />
              View All Projects
            </Button>
            <Button variant="outline" className="w-full justify-start" size="lg">
              <Clock className="mr-2 h-4 w-4" />
              Review Timesheets
            </Button>
            <Button variant="outline" className="w-full justify-start" size="lg">
              <TrendingUp className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart Placeholder */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Revenue This Month</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-[300px] items-center justify-center rounded-lg border-2 border-dashed bg-muted/30">
            <div className="text-center">
              <TrendingUp className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">Chart visualization coming soon</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
