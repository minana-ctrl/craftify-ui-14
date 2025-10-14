import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Shield,
  Edit,
  Camera,
} from "lucide-react";

const activityLog = [
  { date: "Oct 14, 2025 09:23 AM", action: "Logged in" },
  { date: "Oct 13, 2025 05:47 PM", action: "Approved quote #2024-047" },
  { date: "Oct 13, 2025 03:15 PM", action: "Created new project" },
  { date: "Oct 12, 2025 11:30 AM", action: "Generated monthly report" },
  { date: "Oct 12, 2025 09:45 AM", action: "Updated material costs" },
];

export default function Profile() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
        <p className="text-muted-foreground">View and manage your profile information</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground text-3xl font-bold">
                    DS
                  </div>
                  <Button
                    size="icon"
                    className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-accent hover:bg-accent-light"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-1">
                  <h2 className="text-xl font-bold">Duncan Sykes</h2>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    <Shield className="mr-1 h-3 w-3" />
                    Owner
                  </Badge>
                </div>
                <Separator />
                <div className="w-full space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">duncan@absoluteboatcare.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">+34 600 123 456</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Mallorca, Spain</span>
                  </div>
                </div>
                <Separator />
                <Button variant="outline" className="w-full">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Details & Activity */}
        <div className="lg:col-span-2 space-y-6">
          {/* Work Summary */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Work Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Hours This Week</p>
                  <p className="text-2xl font-bold">0h</p>
                  <p className="text-xs text-muted-foreground">Administrative role</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Projects Managed</p>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-xs text-status-success">All active</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Quotes Approved</p>
                  <p className="text-2xl font-bold">23</p>
                  <p className="text-xs text-muted-foreground">This month</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Team Members</p>
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-xs text-muted-foreground">2 Specialists, 4 Field</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Details */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Account Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Member since</span>
                </div>
                <span className="font-medium">January 15, 2023</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Last login</span>
                </div>
                <span className="font-medium">Oct 14, 2025 at 09:23 AM</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">User ID</span>
                </div>
                <span className="font-mono font-medium text-sm">ABC-001</span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityLog.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-2 w-2 mt-2 rounded-full bg-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
