import { Calendar, Clock, Filter, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Timesheet</h1>
            <p className="text-muted-foreground">Track and manage your work hours</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Log Time
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Hours (This Week)</CardDescription>
              <CardTitle className="text-3xl">{totalHours.toFixed(1)}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Amount</CardDescription>
              <CardTitle className="text-3xl">${totalAmount.toLocaleString()}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Entries</CardDescription>
              <CardTitle className="text-3xl">{timeEntries.length}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <CardTitle>Time Entries</CardTitle>
              <div className="flex flex-wrap gap-2">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search entries..." className="pl-9" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="submitted">Submitted</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {timeEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="flex flex-col gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-accent/50 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{entry.date}</span>
                      <Badge
                        variant={
                          entry.status === "approved"
                            ? "default"
                            : entry.status === "pending"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {entry.status}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{entry.project}</h3>
                      <p className="text-sm text-muted-foreground">{entry.client}</p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="text-muted-foreground">Task:</span>
                        <span className="font-medium">{entry.task}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="font-medium">{entry.hours}h</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-muted-foreground">Rate:</span>
                        <span className="font-medium">${entry.rate}/hr</span>
                      </div>
                    </div>
                    {entry.notes && (
                      <p className="text-sm text-muted-foreground">{entry.notes}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 md:flex-col md:items-end">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">
                        ${(entry.hours * entry.rate).toFixed(2)}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Timesheet;
