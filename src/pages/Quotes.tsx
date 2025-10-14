import { useState } from "react";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  FileText,
  Calendar,
  User,
  Euro,
  Eye,
  CheckCircle,
  XCircle,
} from "lucide-react";

const quotes = [
  {
    id: "2024-047",
    client: "Maritime Solutions Ltd",
    boat: "Yacht Serenity",
    jobType: "Paint",
    amount: "€3,675",
    status: "pending" as const,
    createdBy: "Valentin",
    date: "Oct 10, 2025",
    riskFlags: ["Corrosion", "Access difficulty"],
  },
  {
    id: "2024-046",
    client: "Ocean Ventures",
    boat: "Blue Horizon",
    jobType: "Varnish",
    amount: "€8,200",
    status: "approved" as const,
    createdBy: "Maria",
    date: "Oct 8, 2025",
    riskFlags: [],
  },
  {
    id: "2024-045",
    client: "Coastal Properties",
    boat: "Sea Breeze",
    jobType: "Antifoul",
    amount: "€5,900",
    status: "draft" as const,
    createdBy: "Pedro",
    date: "Oct 12, 2025",
    riskFlags: ["Structural concerns"],
  },
  {
    id: "2024-044",
    client: "Mediterranean Yachts",
    boat: "Marina Belle",
    jobType: "Workshop",
    amount: "€15,300",
    status: "sent" as const,
    createdBy: "Valentin",
    date: "Oct 5, 2025",
    riskFlags: [],
  },
  {
    id: "2024-043",
    client: "Sunset Sailing",
    boat: "Golden Wave",
    jobType: "Paint",
    amount: "€4,500",
    status: "rejected" as const,
    createdBy: "Ana",
    date: "Oct 3, 2025",
    riskFlags: ["Filler required"],
  },
];

export default function Quotes() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuotes = quotes.filter(
    (quote) =>
      quote.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.boat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Quotes</h1>
          <p className="text-muted-foreground">Review and manage client quotes</p>
        </div>
        <Button className="bg-primary hover:bg-primary-light">
          <Plus className="mr-2 h-4 w-4" />
          New Quote
        </Button>
      </div>

      {/* Search & Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search quotes by ID, client, or boat..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline">Filter by Status</Button>
        <Button variant="outline">Sort</Button>
      </div>

      {/* Quotes List */}
      <div className="space-y-4">
        {filteredQuotes.map((quote) => (
          <Card
            key={quote.id}
            className="group cursor-pointer shadow-md transition-all hover:shadow-lg"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="font-mono text-xs">
                      #{quote.id}
                    </Badge>
                    <StatusBadge status={quote.status} />
                    <Badge className="bg-accent/10 text-accent border-accent/20">
                      {quote.jobType}
                    </Badge>
                  </div>

                  {/* Main Info */}
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Client</p>
                      <p className="font-medium">{quote.client}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Boat</p>
                      <p className="font-medium">{quote.boat}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Amount</p>
                      <p className="text-lg font-bold text-primary">{quote.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Created</p>
                      <p className="font-medium">{quote.date}</p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <User className="h-4 w-4" />
                      <span>Created by {quote.createdBy}</span>
                    </div>
                    {quote.riskFlags.length > 0 && (
                      <div className="flex items-center gap-1.5 text-status-warning">
                        <FileText className="h-4 w-4" />
                        <span>{quote.riskFlags.length} risk flag(s)</span>
                      </div>
                    )}
                  </div>

                  {/* Risk Flags */}
                  {quote.riskFlags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {quote.riskFlags.map((flag) => (
                        <Badge
                          key={flag}
                          variant="outline"
                          className="bg-status-warning/10 text-status-warning border-status-warning/20"
                        >
                          {flag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  {quote.status === "pending" && (
                    <>
                      <Button size="sm" className="bg-status-success hover:bg-status-success/90">
                        <CheckCircle className="mr-1 h-4 w-4" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="text-status-error border-status-error hover:bg-status-error/10">
                        <XCircle className="mr-1 h-4 w-4" />
                        Reject
                      </Button>
                    </>
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
