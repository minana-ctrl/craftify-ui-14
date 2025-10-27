import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText,
  TrendingUp,
  Users,
  Package,
  Download,
  Calendar,
  BarChart3,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const reportTypes = [
  {
    id: 1,
    name: "Project Margin Analysis",
    description: "Detailed profit margins across all projects with cost breakdown",
    icon: TrendingUp,
    lastGenerated: "Oct 10, 2025",
    frequency: "Weekly",
  },
  {
    id: 2,
    name: "Team Productivity Report",
    description: "Hours logged by person, efficiency metrics, and performance indicators",
    icon: Users,
    lastGenerated: "Oct 12, 2025",
    frequency: "Daily",
  },
  {
    id: 3,
    name: "Materials Usage & Costs",
    description: "Material consumption, cost trends, and inventory tracking",
    icon: Package,
    lastGenerated: "Oct 8, 2025",
    frequency: "Monthly",
  },
  {
    id: 4,
    name: "Revenue & Cash Flow",
    description: "Income analysis, payment status, and financial projections",
    icon: BarChart3,
    lastGenerated: "Oct 5, 2025",
    frequency: "Monthly",
  },
];

const recentReports = [
  {
    id: 1,
    name: "Weekly Project Margins - Oct 7-13",
    type: "Project Margin Analysis",
    generatedDate: "Oct 13, 2025",
    size: "2.4 MB",
    format: "PDF",
  },
  {
    id: 2,
    name: "Team Performance - October 2025",
    type: "Team Productivity Report",
    generatedDate: "Oct 12, 2025",
    size: "1.8 MB",
    format: "PDF",
  },
  {
    id: 3,
    name: "Materials Cost Analysis Q3 2025",
    type: "Materials Usage & Costs",
    generatedDate: "Oct 8, 2025",
    size: "3.1 MB",
    format: "Excel",
  },
];

export default function Reports() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate insights and track business performance</p>
        </div>
      </div>

      {/* Report Types Grid */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Available Reports</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {reportTypes.map((report) => {
            const Icon = report.icon;
            return (
              <Card
                key={report.id}
                className="group cursor-pointer hover-lift hover-glow transition-all animate-slide-up"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {report.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {report.description}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>Last: {report.lastGenerated}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {report.frequency}
                        </Badge>
                      </div>
                      <Button className="mt-3 bg-primary hover:bg-primary-light w-full sm:w-auto" onClick={() => toast({ title: "📊 Generating", description: report.name })}>
                        Generate Report
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Reports */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
        <Card className="shadow-md">
          <CardContent className="p-0">
            <div className="divide-y">
              {recentReports.map((report) => (
                <div
                  key={report.id}
                  className="p-6 hover:bg-muted/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{report.name}</h4>
                        <p className="text-sm text-muted-foreground">{report.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right text-sm">
                        <p className="text-muted-foreground">{report.generatedDate}</p>
                        <p className="text-muted-foreground">
                          {report.size} · {report.format}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Statistics</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Revenue (YTD)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">€487,320</p>
              <p className="text-xs text-status-success mt-1">+18.2% vs last year</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Avg. Project Margin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">23.4%</p>
              <p className="text-xs text-status-success mt-1">+2.1% this month</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Team Hours (This Month)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1,247h</p>
              <p className="text-xs text-muted-foreground mt-1">Across 8 projects</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Materials Spent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">€34,580</p>
              <p className="text-xs text-status-warning mt-1">12% of revenue</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
