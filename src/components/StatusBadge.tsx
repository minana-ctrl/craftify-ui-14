import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, AlertCircle, XCircle, Clock, FileText } from "lucide-react";

export type StatusType = 
  | "approved" | "on-track" | "paid" | "completed"
  | "active" | "sent" | "working" | "in-progress"
  | "pending" | "at-risk" | "needs-attention"
  | "delayed" | "flagged" | "late"
  | "rejected" | "overdue" | "urgent"
  | "draft" | "inactive" | "archived";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig: Record<StatusType, { label: string; icon: any; color: string }> = {
  // Success (Green)
  "approved": { label: "Approved", icon: CheckCircle, color: "bg-status-success/10 text-status-success border-status-success/20" },
  "on-track": { label: "On Track", icon: CheckCircle, color: "bg-status-success/10 text-status-success border-status-success/20" },
  "paid": { label: "Paid", icon: CheckCircle, color: "bg-status-success/10 text-status-success border-status-success/20" },
  "completed": { label: "Completed", icon: CheckCircle, color: "bg-status-success/10 text-status-success border-status-success/20" },
  
  // Active (Blue)
  "active": { label: "Active", icon: Circle, color: "bg-status-info/10 text-status-info border-status-info/20" },
  "sent": { label: "Sent", icon: Circle, color: "bg-status-info/10 text-status-info border-status-info/20" },
  "working": { label: "Working", icon: Circle, color: "bg-status-info/10 text-status-info border-status-info/20" },
  "in-progress": { label: "In Progress", icon: Circle, color: "bg-status-info/10 text-status-info border-status-info/20" },
  
  // Warning (Yellow)
  "pending": { label: "Pending", icon: Clock, color: "bg-status-warning/10 text-status-warning border-status-warning/20" },
  "at-risk": { label: "At Risk", icon: AlertCircle, color: "bg-status-warning/10 text-status-warning border-status-warning/20" },
  "needs-attention": { label: "Needs Attention", icon: AlertCircle, color: "bg-status-warning/10 text-status-warning border-status-warning/20" },
  
  // Delayed (Orange)
  "delayed": { label: "Delayed", icon: AlertCircle, color: "bg-orange-500/10 text-orange-600 border-orange-500/20" },
  "flagged": { label: "Flagged", icon: AlertCircle, color: "bg-orange-500/10 text-orange-600 border-orange-500/20" },
  "late": { label: "Late", icon: AlertCircle, color: "bg-orange-500/10 text-orange-600 border-orange-500/20" },
  
  // Error (Red)
  "rejected": { label: "Rejected", icon: XCircle, color: "bg-status-error/10 text-status-error border-status-error/20" },
  "overdue": { label: "Overdue", icon: XCircle, color: "bg-status-error/10 text-status-error border-status-error/20" },
  "urgent": { label: "Urgent", icon: XCircle, color: "bg-status-error/10 text-status-error border-status-error/20" },
  
  // Draft (Grey)
  "draft": { label: "Draft", icon: FileText, color: "bg-status-draft/10 text-status-draft border-status-draft/20" },
  "inactive": { label: "Inactive", icon: Circle, color: "bg-status-draft/10 text-status-draft border-status-draft/20" },
  "archived": { label: "Archived", icon: Circle, color: "bg-status-draft/10 text-status-draft border-status-draft/20" },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Badge 
      variant="outline" 
      className={cn(
        "gap-1.5 font-medium transition-all animate-scale-in",
        config.color, 
        className
      )}
    >
      <Icon className="h-3 w-3" />
      {config.label}
    </Badge>
  );
}
