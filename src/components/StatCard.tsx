import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  variant?: "default" | "success" | "warning" | "error";
}

export function StatCard({ title, value, icon: Icon, trend, variant = "default" }: StatCardProps) {
  const variantClasses = {
    default: "border-border",
    success: "border-status-success/20 bg-status-success/5",
    warning: "border-status-warning/20 bg-status-warning/5",
    error: "border-status-error/20 bg-status-error/5",
  };

  return (
    <Card className={cn(
      "shadow-lg transition-all hover:shadow-elevated hover:-translate-y-1 border-border/60 overflow-hidden group",
      variantClasses[variant]
    )}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 bg-gradient-subtle">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="text-3xl font-bold group-hover:text-primary transition-colors">{value}</div>
        {trend && (
          <p className={cn(
            "text-xs mt-2 font-medium flex items-center gap-1",
            trend.positive ? "text-status-success" : "text-status-error"
          )}>
            <span>{trend.positive ? "↗" : "↘"}</span>
            {trend.positive ? "+" : ""}{trend.value}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
