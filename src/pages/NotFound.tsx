import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Anchor, Home, Search } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-ocean p-4 animate-fade-in">
      <Card className="w-full max-w-lg shadow-elevated hover-glow animate-slide-up text-center">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 shadow-glow">
              <Anchor className="h-10 w-10 text-primary" />
            </div>
          </div>
          <div>
            <CardTitle className="text-6xl font-bold text-primary mb-2">404</CardTitle>
            <CardDescription className="text-xl">
              Oops! This page has drifted away
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved to calmer waters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => navigate("/")}
              className="gap-2 shadow-glow"
              size="lg"
            >
              <Home className="h-4 w-4" />
              Return Home
            </Button>
            <Button 
              onClick={() => navigate(-1)}
              variant="outline"
              className="gap-2"
              size="lg"
            >
              Go Back
            </Button>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-2">
              Looking for something specific?
            </p>
            <div className="flex gap-2 text-sm text-muted-foreground justify-center flex-wrap">
              <button 
                onClick={() => navigate("/projects")}
                className="hover:text-primary transition-colors underline"
              >
                Projects
              </button>
              <span>•</span>
              <button 
                onClick={() => navigate("/timesheet")}
                className="hover:text-primary transition-colors underline"
              >
                Timesheet
              </button>
              <span>•</span>
              <button 
                onClick={() => navigate("/team")}
                className="hover:text-primary transition-colors underline"
              >
                Team
              </button>
              <span>•</span>
              <button 
                onClick={() => navigate("/reports")}
                className="hover:text-primary transition-colors underline"
              >
                Reports
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
