import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/StatusBadge";
import { cn } from "@/lib/utils";
import { 
  Search, 
  Filter, 
  Plus, 
  MapPin, 
  DollarSign, 
  Clock,
  Camera,
  FileText,
  Eye,
  Package,
  User,
  Calendar
} from "lucide-react";
import { toast } from "sonner";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

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
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-ocean bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-muted-foreground mt-1">Manage boat maintenance and repair projects</p>
        </div>
        <Button className="gap-2 hover-glow shadow-md" onClick={() => toast.success("New project form opening...")}>
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
            className="pl-10 bg-card shadow-sm"
          />
        </div>
        <Button 
          variant="outline" 
          className="gap-2 shadow-sm"
          onClick={() => {
            setFilterOpen(!filterOpen);
            toast.info(filterOpen ? "Filters closed" : "Filters opened");
          }}
        >
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card 
            key={project.id} 
            className={cn(
              "hover-lift overflow-hidden group border-border/60",
              "animate-fade-in"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-3 bg-gradient-subtle">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2 flex-1 min-w-0">
                  <h3 className="text-lg font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>
                <StatusBadge status={project.status as any} />
              </div>
            </CardHeader>

            <CardContent className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <DollarSign className="h-3.5 w-3.5" />
                    <span>Budget</span>
                  </div>
                  <p className="text-sm font-semibold">{project.budget}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Started</span>
                  </div>
                  <p className="text-sm font-semibold">{project.startDate}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-3 gap-3 py-3 border-y border-border/50">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1">
                    <Clock className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-sm font-semibold">{project.hoursLogged}</p>
                  <p className="text-xs text-muted-foreground">of {project.hoursEstimated}h</p>
                </div>
                <div className="text-center border-x border-border/50">
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1">
                    <Camera className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-sm font-semibold">{project.photos}</p>
                  <p className="text-xs text-muted-foreground">photos</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1">
                    <Package className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-sm font-semibold">12</p>
                  <p className="text-xs text-muted-foreground">items</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <User className="h-3.5 w-3.5" />
                <span>{project.assignee}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="gap-1.5 hover-lift"
                  onClick={(e) => {
                    e.stopPropagation();
                    toast.success(`Logging hours for ${project.name}`);
                  }}
                >
                  <Clock className="h-3.5 w-3.5" />
                  Log Hours
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="gap-1.5 hover-lift"
                  onClick={(e) => {
                    e.stopPropagation();
                    toast.success(`Opening photos for ${project.name}`);
                  }}
                >
                  <Camera className="h-3.5 w-3.5" />
                  Photos
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="gap-1.5 hover-lift"
                  onClick={(e) => {
                    e.stopPropagation();
                    toast.success(`Managing materials for ${project.name}`);
                  }}
                >
                  <Package className="h-3.5 w-3.5" />
                  Materials
                </Button>
                <Button 
                  size="sm" 
                  className="gap-1.5 bg-primary hover:bg-primary/90 hover-glow"
                  onClick={(e) => {
                    e.stopPropagation();
                    toast.info(`Viewing details for ${project.name}`);
                  }}
                >
                  <Eye className="h-3.5 w-3.5" />
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
