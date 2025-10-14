import { useState } from "react";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  MapPin, 
  Calendar,
  Users,
  Euro,
} from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Yacht Serenity",
    client: "Maritime Solutions Ltd",
    type: "Paint",
    status: "in-progress" as const,
    location: "STP Boatyard",
    startDate: "Oct 1, 2025",
    budget: "€12,500",
    hoursQuoted: 60,
    hoursLogged: 52,
    team: ["Valentin", "Maria", "Jose"],
  },
  {
    id: 2,
    name: "Blue Horizon",
    client: "Ocean Ventures",
    type: "Varnish",
    status: "on-track" as const,
    location: "Marina Palma",
    startDate: "Oct 5, 2025",
    budget: "€8,200",
    hoursQuoted: 45,
    hoursLogged: 38,
    team: ["Pedro", "Ana"],
  },
  {
    id: 3,
    name: "Sea Breeze",
    client: "Coastal Properties",
    type: "Antifoul",
    status: "at-risk" as const,
    location: "Binissalem",
    startDate: "Sep 28, 2025",
    budget: "€5,900",
    hoursQuoted: 35,
    hoursLogged: 42,
    team: ["Maria", "Carlos"],
  },
  {
    id: 4,
    name: "Marina Belle",
    client: "Mediterranean Yachts",
    type: "Workshop",
    status: "completed" as const,
    location: "STP Boatyard",
    startDate: "Sep 15, 2025",
    budget: "€15,300",
    hoursQuoted: 80,
    hoursLogged: 78,
    team: ["Valentin", "Pedro", "Jose", "Ana"],
  },
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage all your boat care projects</p>
        </div>
        <Button className="bg-primary hover:bg-primary-light">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Search & Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects or clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline">Filter</Button>
        <Button variant="outline">Sort</Button>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="group cursor-pointer shadow-md transition-all hover:shadow-lg hover:scale-[1.02]"
          >
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </div>
                  <StatusBadge status={project.status} />
                </div>

                {/* Type Badge */}
                <Badge variant="secondary" className="font-medium">
                  {project.type}
                </Badge>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Euro className="h-4 w-4" />
                    <span className="font-medium text-foreground">{project.budget}</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Hours Progress</span>
                    <span className="font-medium">
                      {project.hoursLogged}/{project.hoursQuoted}h
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full bg-accent transition-all"
                      style={{
                        width: `${Math.min((project.hoursLogged / project.hoursQuoted) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Team */}
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div className="flex -space-x-2">
                    {project.team.slice(0, 3).map((member, idx) => (
                      <div
                        key={idx}
                        className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-card bg-primary text-[10px] font-semibold text-primary-foreground"
                      >
                        {member.slice(0, 2).toUpperCase()}
                      </div>
                    ))}
                    {project.team.length > 3 && (
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-card bg-muted text-[10px] font-semibold">
                        +{project.team.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
