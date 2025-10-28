import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Anchor, 
  ArrowRight, 
  BarChart3, 
  Users, 
  FolderKanban,
  Clock,
  Sparkles
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FolderKanban,
      title: "Project Management",
      description: "Track projects, timelines, and deliverables effortlessly",
      route: "/projects"
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Log hours and monitor team productivity in real-time",
      route: "/timesheet"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Manage your crew and assign tasks seamlessly",
      route: "/team"
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      description: "Generate insights and track business performance",
      route: "/reports"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-12 max-w-3xl">
        <div className="flex items-center justify-center gap-3 mb-6 animate-scale-in">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-glow">
            <Anchor className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Absolute Boat Care
          </h1>
        </div>
        
        <p className="text-xl text-muted-foreground">
          Complete project management solution for marine professionals
        </p>
        
        <div className="flex gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-light group"
            onClick={() => navigate("/dashboard")}
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="hover-lift"
            onClick={() => navigate("/projects")}
          >
            View Projects
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={feature.title}
              className="group cursor-pointer hover-lift hover-glow transition-all animate-slide-up border-l-4 border-l-primary"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(feature.route)}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <div className="flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Stats Banner */}
      <div className="mt-16 flex gap-12 text-center animate-fade-in">
        <div>
          <p className="text-3xl font-bold text-primary">50+</p>
          <p className="text-sm text-muted-foreground">Active Projects</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primary">15</p>
          <p className="text-sm text-muted-foreground">Team Members</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primary">€487K</p>
          <p className="text-sm text-muted-foreground">Revenue YTD</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
