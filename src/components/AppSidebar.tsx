import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  DollarSign,
  BarChart3,
  Video,
  Users,
  Settings,
  LogOut,
  Anchor,
  Clock,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

const mainNav = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Projects", url: "/projects", icon: FolderKanban },
  { title: "Timesheet", url: "/timesheet", icon: Clock },
  { title: "Financials", url: "/financials", icon: DollarSign },
  { title: "Resources", url: "/resources", icon: Video },
  { title: "Team", url: "/team", icon: Users },
  { title: "Reports", url: "/reports", icon: BarChart3 },
];

const bottomNav = [
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast({ 
      title: "👋 Logged out successfully", 
      description: "See you next time!" 
    });
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/")}>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-primary shadow-glow">
            <Anchor className="h-6 w-6 text-sidebar-primary-foreground" />
          </div>
          {open && (
            <div>
              <p className="text-sm font-semibold text-sidebar-foreground">Absolute Boat Care</p>
              <p className="text-xs text-sidebar-foreground/70">Duncan Sykes</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-sm"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all hover:translate-x-0.5"
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          {bottomNav.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <NavLink
                  to={item.url}
                  className="text-sidebar-foreground hover:bg-sidebar-accent/50"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <Separator className="my-2 bg-sidebar-border" />
          <SidebarMenuItem>
            <SidebarMenuButton 
              tooltip="Logout" 
              className="text-sidebar-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
