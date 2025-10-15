import { Calendar, Clock, Filter, Plus, Search, Edit, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const timeEntries = [
  {
    id: 1,
    date: "2025-10-14",
    project: "Marina Restoration",
    client: "Harbour Master Ltd",
    task: "Hull cleaning",
    hours: 4.5,
    rate: 85,
    status: "approved",
    notes: "Completed bottom hull maintenance",
  },
  {
    id: 2,
    date: "2025-10-14",
    project: "Yacht Detailing",
    client: "Ocean Elite",
    task: "Exterior polish",
    hours: 3.0,
    rate: 85,
    status: "pending",
    notes: "Applied marine wax coating",
  },
  {
    id: 3,
    date: "2025-10-13",
    project: "Fleet Maintenance",
    client: "Coastal Services",
    task: "Engine inspection",
    hours: 6.0,
    rate: 95,
    status: "approved",
    notes: "Routine engine service and oil change",
  },
  {
    id: 4,
    date: "2025-10-13",
    project: "Marina Restoration",
    client: "Harbour Master Ltd",
    task: "Deck refinishing",
    hours: 5.5,
    rate: 85,
    status: "approved",
    notes: "Sanded and sealed teak deck",
  },
  {
    id: 5,
    date: "2025-10-12",
    project: "Yacht Detailing",
    client: "Ocean Elite",
    task: "Interior cleaning",
    hours: 2.5,
    rate: 75,
    status: "submitted",
    notes: "Deep clean of cabin and galley",
  },
];

const Timesheet = () => {
  const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);
  const totalAmount = timeEntries.reduce((sum, entry) => sum + entry.hours * entry.rate, 0);
  const weekEntries = timeEntries; // In real app, filter by date

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-ocean bg-clip-text text-transparent">
            Timesheet
          </h1>
          <p className="text-muted-foreground mt-1">Track and manage your work hours</p>
        </div>
        <Button className="gap-2 hover-glow shadow-md">
          <Plus className="h-4 w-4" />
          Log Time
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Total Hours This Week", value: totalHours.toString(), icon: Clock, variant: "default" as const },
          { title: "Amount This Week", value: `$${totalAmount.toLocaleString()}`, icon: DollarSign, variant: "success" as const },
          { title: "Entries This Week", value: weekEntries.length.toString(), icon: Calendar, variant: "default" as const },
        ].map((stat, index) => (
          <div key={stat.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* Time Entries */}
      <Card className="shadow-lg border-border/60 hover-lift">
        <CardHeader className="bg-gradient-subtle">
          <CardTitle>Time Entries</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-3">
            {timeEntries.map((entry, index) => (
              <div 
                key={entry.id} 
                className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0 group hover:bg-muted/30 -mx-4 px-4 py-3 rounded-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-medium group-hover:text-primary transition-colors">{entry.project}</p>
                      <StatusBadge status="active" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{entry.task}</p>
                    <p className="text-xs text-muted-foreground mt-1">{entry.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 ml-4">
                  <div className="text-right">
                    <p className="font-semibold">{entry.hours}h</p>
                    <p className="text-xs text-muted-foreground">${entry.rate}/hr</p>
                  </div>
                  <div className="text-right min-w-[80px]">
                    <p className="font-semibold text-status-success text-lg">${(entry.hours * entry.rate).toFixed(0)}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="hover-glow shrink-0">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Timesheet;
