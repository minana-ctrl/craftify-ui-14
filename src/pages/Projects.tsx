import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/StatusBadge";
import { 
  Search, 
  Filter, 
  Plus, 
  MapPin, 
  DollarSign, 
  Clock,
  Camera,
  FileText,
  CalendarClock,
  Wrench,
  User
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    { 
      id: 1, 
      name: "Marina Bay Resort - Annual Maintenance", 
      client: "Resort Management Corp",
      status: "in-progress", 
      location: "Port Mallorca", 
      budget: "$15,420",
      hoursLogged: "24.5",
      hoursEstimated: "40",
      startDate: "Mar 1, 2024",
      progress: 61,
      photos: 12,
      lastTimesheet: "2 hours ago",
      assignee: "DS"
    },
    { 
      id: 2, 
      name: "Ocean Star Yacht - Hull Repair", 
      client: "Private Owner",
      status: "pending", 
      location: "Palma de Mallorca", 
      budget: "$8,750",
      hoursLogged: "8.0",
      hoursEstimated: "20",
      startDate: "Mar 5, 2024",
      progress: 40,
      photos: 5,
      lastTimesheet: "Yesterday",
      assignee: "DS"
    },
    { 
      id: 3, 
      name: "Blue Wave Marina - Engine Overhaul", 
      client: "Marina Services Ltd",
      status: "on-track", 
      location: "Alcudia Marina", 
      budget: "$22,300",
      hoursLogged: "16.5",
      hoursEstimated: "35",
      startDate: "Mar 3, 2024",
      progress: 47,
      photos: 8,
      lastTimesheet: "5 hours ago",
      assignee: "DS"
    },
    { 
      id: 4, 
      name: "Sunset Cruiser - Interior Refurbishment", 
      client: "Yacht Charter Co",
      status: "at-risk", 
      location: "Soller Port", 
      budget: "$12,890",
      hoursLogged: "28.0",
      hoursEstimated: "30",
      startDate: "Feb 28, 2024",
      progress: 93,
      photos: 15,
      lastTimesheet: "3 days ago",
      assignee: "DS"
    },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground">Manage boat maintenance and repair projects</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects, clients, or locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <StatusBadge status={project.status as any} />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {project.client}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {project.location}
                      </span>
                      <span>Started {project.startDate}</span>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-2xl font-bold text-primary">{project.budget}</p>
                    <p className="text-sm text-muted-foreground">Total Budget</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Project Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-4 pt-2 border-t border-border">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Hours Logged
                    </p>
                    <p className="font-semibold">{project.hoursLogged} / {project.hoursEstimated}h</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Camera className="h-3 w-3" />
                      Photos
                    </p>
                    <p className="font-semibold">{project.photos} uploaded</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <CalendarClock className="h-3 w-3" />
                      Last Timesheet
                    </p>
                    <p className="font-semibold">{project.lastTimesheet}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Assigned To</p>
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">{project.assignee}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <CalendarClock className="h-3 w-3" />
                    Log Hours
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Camera className="h-3 w-3" />
                    Add Photos
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Wrench className="h-3 w-3" />
                    Materials
                  </Button>
                  <Button size="sm" className="gap-2 ml-auto">
                    <FileText className="h-3 w-3" />
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
