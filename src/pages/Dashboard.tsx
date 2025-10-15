import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { 
  TrendingUp, 
  Clock, 
  AlertTriangle, 
  CheckCircle,
  FileText,
  DollarSign,
  Wrench,
  Camera,
  CalendarClock,
  Plus
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const stats = [
    { icon: Wrench, title: "Active Projects", value: "8", trend: { value: "+2 this week", positive: true } },
    { icon: Clock, title: "Hours This Week", value: "42.5", trend: { value: "12.5 pending", positive: false } },
    { icon: DollarSign, title: "Quotes Pending", value: "5", trend: { value: "$67.3K total", positive: true }, variant: "warning" as const },
    { icon: CheckCircle, title: "Completed This Month", value: "12", trend: { value: "+3 from last", positive: true }, variant: "success" as const },
  ];

  const urgentTasks = [
    { id: 1, project: "Marina Bay Resort - Hull Repair", task: "Submit timesheet", type: "timesheet", dueIn: "Today" },
    { id: 2, project: "Ocean Star Yacht", task: "Quote approval needed", type: "quote", dueIn: "2 hours" },
    { id: 3, project: "Blue Wave Marina", task: "Upload progress photos", type: "photos", dueIn: "Tomorrow" },
    { id: 4, project: "Coastal Express", task: "Material low stock alert", type: "materials", dueIn: "3 days" },
  ];

  const recentProjects = [
    { id: 1, name: "Marina Bay Resort", client: "Resort Management", status: "in-progress", hours: "24.5", lastUpdate: "2 hours ago" },
    { id: 2, name: "Ocean Star Yacht", client: "Private Owner", status: "pending", hours: "8.0", lastUpdate: "5 hours ago" },
    { id: 3, name: "Blue Wave Marina", client: "Marina Services", status: "on-track", hours: "16.5", lastUpdate: "1 day ago" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-ocean bg-clip-text text-transparent">
            Welcome back, Duncan!
          </h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your boat care business today</p>
        </div>
        <Button className="gap-2 hover-glow shadow-md" size="lg">
          <Plus className="h-5 w-5" />
          Quick Start Project
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Urgent Tasks - 2/3 width */}
        <Card className="lg:col-span-2 shadow-lg border-border/60 hover-lift">
          <CardHeader className="bg-gradient-subtle">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-status-warning" />
                Urgent Tasks
              </CardTitle>
              <Badge variant="destructive">{urgentTasks.length}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 pt-6">
            {urgentTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 hover:border-primary/30 transition-all group">
                <div className="space-y-1 flex-1 min-w-0">
                  <p className="font-medium group-hover:text-primary transition-colors">{task.task}</p>
                  <p className="text-sm text-muted-foreground truncate">{task.project}</p>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <Badge variant={task.dueIn.includes("Today") || task.dueIn.includes("hours") ? "destructive" : "secondary"}>
                    {task.dueIn}
                  </Badge>
                  {task.type === "timesheet" && <CalendarClock className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />}
                  {task.type === "quote" && <FileText className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />}
                  {task.type === "photos" && <Camera className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />}
                  {task.type === "materials" && <Wrench className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />}
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full hover-lift">View All Tasks</Button>
          </CardContent>
        </Card>

        {/* Quick Actions - 1/3 width */}
        <Card className="shadow-lg border-border/60">
          <CardHeader className="bg-gradient-subtle">
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-6">
            {[
              { icon: CalendarClock, label: "Log Hours", color: "text-primary" },
              { icon: FileText, label: "Create Quote", color: "text-accent" },
              { icon: Camera, label: "Upload Photos", color: "text-status-info" },
              { icon: Wrench, label: "Update Materials", color: "text-status-warning" },
            ].map((action) => (
              <Button 
                key={action.label}
                variant="outline" 
                className="w-full justify-start gap-2 hover-lift group"
              >
                <action.icon className={`h-4 w-4 ${action.color} group-hover:scale-110 transition-transform`} />
                <span>{action.label}</span>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects */}
      <Card className="shadow-lg border-border/60 hover-lift">
        <CardHeader className="bg-gradient-subtle">
          <div className="flex items-center justify-between">
            <CardTitle>Recent Projects</CardTitle>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-3">
            {recentProjects.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 hover:border-primary/30 transition-all cursor-pointer group">
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{project.name}</h3>
                    <StatusBadge status={project.status as any} />
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{project.client}</p>
                </div>
                <div className="text-right space-y-1 ml-4">
                  <p className="text-sm font-medium flex items-center gap-1 whitespace-nowrap">
                    <Clock className="h-3 w-3 group-hover:text-primary transition-colors" />
                    {project.hours}h logged
                  </p>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">{project.lastUpdate}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
