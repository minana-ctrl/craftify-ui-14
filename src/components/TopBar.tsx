import { useState } from "react";
import { Bell, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

export function TopBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      toast({ 
        title: "🔍 Searching", 
        description: `Looking for "${searchValue}"...` 
      });
      setSearchValue("");
    }
  };

  const handleNotifications = () => {
    toast({ 
      title: "🔔 Notifications", 
      description: "You have 3 new notifications" 
    });
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 px-6 shadow-sm">
      <SidebarTrigger className="hover-scale" />
      
      <div className="flex flex-1 items-center gap-4">
        <form onSubmit={handleSearch} className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <Input
            type="search"
            placeholder="Search... (Cmd+K)"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="pl-9 pr-9 bg-muted/50 hover:bg-muted/70 transition-colors"
          />
          {searchValue && (
            <button
              type="button"
              onClick={() => setSearchValue("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </form>
      </div>

      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative hover-scale"
          onClick={handleNotifications}
        >
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive p-0 flex items-center justify-center text-[10px] animate-pulse">
            3
          </Badge>
        </Button>
        
        <div className="flex items-center gap-2 ml-2">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-glow cursor-pointer hover-scale">
            DS
          </div>
        </div>
      </div>
    </header>
  );
}
