import { useState } from "react";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus,
  User,
  Clock,
  Mail,
  Phone,
  Shield,
  MapPin,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const teamMembers = [
  {
    id: 1,
    name: "Valentin Rodriguez",
    role: "Specialist",
    email: "valentin@absoluteboatcare.com",
    phone: "+34 612 345 678",
    status: "working" as const,
    currentAssignment: "Yacht Serenity - Paint",
    hoursToday: 6.5,
    location: "STP Boatyard",
    avatar: "VR",
  },
  {
    id: 2,
    name: "Maria Garcia",
    role: "Specialist",
    email: "maria@absoluteboatcare.com",
    phone: "+34 623 456 789",
    status: "working" as const,
    currentAssignment: "Blue Horizon - Varnish",
    hoursToday: 5.0,
    location: "Marina Palma",
    avatar: "MG",
  },
  {
    id: 3,
    name: "Jose Martinez",
    role: "Field Team",
    email: "jose@absoluteboatcare.com",
    phone: "+34 634 567 890",
    status: "working" as const,
    currentAssignment: "Sea Breeze - Antifoul",
    hoursToday: 7.0,
    location: "Binissalem",
    avatar: "JM",
  },
  {
    id: 4,
    name: "Pedro Sanchez",
    role: "Field Team",
    email: "pedro@absoluteboatcare.com",
    phone: "+34 645 678 901",
    status: "on-track" as const,
    currentAssignment: "Marina Belle - Workshop",
    hoursToday: 4.5,
    location: "STP Boatyard",
    avatar: "PS",
  },
  {
    id: 5,
    name: "Ana Lopez",
    role: "Specialist",
    email: "ana@absoluteboatcare.com",
    phone: "+34 656 789 012",
    status: "pending" as const,
    currentAssignment: "No assignment",
    hoursToday: 0,
    location: "Office",
    avatar: "AL",
  },
  {
    id: 6,
    name: "Carlos Fernandez",
    role: "Field Team",
    email: "carlos@absoluteboatcare.com",
    phone: "+34 667 890 123",
    status: "completed" as const,
    currentAssignment: "Golden Wave - Paint (Completed)",
    hoursToday: 8.0,
    location: "Marina Palma",
    avatar: "CF",
  },
];

const roleColors = {
  Specialist: "bg-accent/10 text-accent border-accent/20",
  "Field Team": "bg-primary/10 text-primary border-primary/20",
  Owner: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  Oversight: "bg-status-info/10 text-status-info border-status-info/20",
};

export default function Team() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTeam = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Management</h1>
          <p className="text-muted-foreground">Monitor team activity and assignments</p>
        </div>
        <Button className="bg-primary hover:bg-primary-light" onClick={() => toast({ title: "➕ Add member" })}>
          <Plus className="mr-2 h-4 w-4" />
          Add Team Member
        </Button>
      </div>

      {/* Search & Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search team members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline">Filter by Role</Button>
        <Button variant="outline">Filter by Status</Button>
      </div>

      {/* Team Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTeam.map((member) => (
          <Card
            key={member.id}
            className="group cursor-pointer hover-lift hover-glow transition-all animate-slide-up"
          >
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Header with Avatar */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-semibold">
                      {member.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <Badge variant="outline" className={roleColors[member.role as keyof typeof roleColors]}>
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                  <StatusBadge status={member.status} />
                </div>

                {/* Current Assignment */}
                <div className="space-y-2">
                  <p className="text-sm font-medium">Current Assignment</p>
                  <p className="text-sm text-muted-foreground">{member.currentAssignment}</p>
                </div>

                {/* Hours Today */}
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Hours today:</span>
                  <span className="font-semibold text-primary">{member.hoursToday}h</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{member.location}</span>
                </div>

                {/* Contact Info */}
                <div className="space-y-1.5 pt-3 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-3.5 w-3.5" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-3.5 w-3.5" />
                    <span>{member.phone}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => toast({ title: "👤 Viewing", description: member.name })}>
                    View Details
                  </Button>
                  {member.status === "pending" && (
                    <Button size="sm" className="flex-1" onClick={() => toast({ title: "✅ Assigned", description: member.name })}>
                      Assign
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
