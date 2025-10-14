import { useState } from "react";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  Euro,
  Calendar,
  AlertCircle,
  Send,
  CheckCircle,
  Download,
} from "lucide-react";

const invoices = [
  {
    id: "INV-2024-032",
    client: "Maritime Solutions Ltd",
    boat: "Yacht Serenity",
    date: "Oct 15, 2025",
    dueDate: "Nov 15, 2025",
    amount: "€12,850",
    status: "sent" as const,
    daysOverdue: 0,
  },
  {
    id: "INV-2024-031",
    client: "Ocean Ventures",
    boat: "Blue Horizon",
    date: "Oct 12, 2025",
    dueDate: "Nov 12, 2025",
    amount: "€8,340",
    status: "paid" as const,
    daysOverdue: 0,
  },
  {
    id: "INV-2024-030",
    client: "Mediterranean Yachts",
    boat: "Marina Belle",
    date: "Sep 28, 2025",
    dueDate: "Oct 28, 2025",
    amount: "€15,620",
    status: "overdue" as const,
    daysOverdue: 15,
  },
  {
    id: "INV-2024-029",
    client: "Coastal Properties",
    boat: "Sea Breeze",
    date: "Oct 8, 2025",
    dueDate: "Nov 8, 2025",
    amount: "€6,150",
    status: "sent" as const,
    daysOverdue: 0,
  },
];

const summary = {
  invoicedThisMonth: "€43,960",
  paid: "€24,490",
  outstanding: "€19,470",
};

export default function Invoices() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invoices</h1>
          <p className="text-muted-foreground">Track payments and manage invoices</p>
        </div>
        <Button className="bg-primary hover:bg-primary-light">
          <Plus className="mr-2 h-4 w-4" />
          Create Invoice
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-md border-status-info/20 bg-status-info/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Invoiced This Month</p>
                <p className="text-2xl font-bold mt-1">{summary.invoicedThisMonth}</p>
              </div>
              <Euro className="h-8 w-8 text-status-info" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-md border-status-success/20 bg-status-success/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Paid</p>
                <p className="text-2xl font-bold mt-1">{summary.paid}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-status-success" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-md border-status-warning/20 bg-status-warning/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Outstanding</p>
                <p className="text-2xl font-bold mt-1">{summary.outstanding}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-status-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search & Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search invoices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline">Filter by Status</Button>
        <Button variant="outline">Date Range</Button>
      </div>

      {/* Invoices List */}
      <div className="space-y-4">
        {filteredInvoices.map((invoice) => (
          <Card
            key={invoice.id}
            className={`group cursor-pointer shadow-md transition-all hover:shadow-lg ${
              invoice.status === "overdue" ? "border-status-error/30" : ""
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {invoice.id}
                    </Badge>
                    <StatusBadge status={invoice.status} />
                    {invoice.daysOverdue > 0 && (
                      <Badge className="bg-status-error/10 text-status-error border-status-error/20">
                        {invoice.daysOverdue} days overdue
                      </Badge>
                    )}
                  </div>

                  {/* Main Info */}
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    <div>
                      <p className="text-sm text-muted-foreground">Client</p>
                      <p className="font-medium">{invoice.client}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Boat</p>
                      <p className="font-medium">{invoice.boat}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date Issued</p>
                      <p className="font-medium">{invoice.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Due Date</p>
                      <p className="font-medium">{invoice.dueDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Amount</p>
                      <p className="text-lg font-bold text-primary">{invoice.amount}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  {invoice.status === "sent" && (
                    <Button size="sm" variant="outline">
                      <Send className="mr-1 h-4 w-4" />
                      Remind
                    </Button>
                  )}
                  {invoice.status !== "paid" && (
                    <Button size="sm" className="bg-status-success hover:bg-status-success/90">
                      <CheckCircle className="mr-1 h-4 w-4" />
                      Mark Paid
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
