import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FileText, DollarSign, Search, Filter, Download, Eye, Send } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Financials = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const quotes = [
    { id: "Q-2024-001", client: "Marina Bay Resort", project: "Annual Maintenance", amount: "$15,420", status: "pending" as const, date: "2024-03-15" },
    { id: "Q-2024-002", client: "Ocean Star Yacht", project: "Hull Repair", amount: "$8,750", status: "approved" as const, date: "2024-03-14" },
    { id: "Q-2024-003", client: "Blue Wave Marina", project: "Engine Overhaul", amount: "$22,300", status: "sent" as const, date: "2024-03-12" },
    { id: "Q-2024-004", client: "Sunset Cruiser", project: "Interior Refurbishment", amount: "$12,890", status: "draft" as const, date: "2024-03-10" },
  ];

  const invoices = [
    { id: "INV-2024-045", client: "Marina Bay Resort", project: "Winter Maintenance", amount: "$14,200", status: "paid" as const, dueDate: "2024-03-01", paidDate: "2024-02-28" },
    { id: "INV-2024-046", client: "Pacific Voyager", project: "Navigation System", amount: "$6,750", status: "overdue" as const, dueDate: "2024-02-15" },
    { id: "INV-2024-047", client: "Coastal Express", project: "Safety Inspection", amount: "$3,200", status: "sent" as const, dueDate: "2024-03-20" },
    { id: "INV-2024-048", client: "Blue Horizon", project: "Deck Restoration", amount: "$18,900", status: "paid" as const, dueDate: "2024-02-25", paidDate: "2024-02-24" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Financials</h1>
          <p className="text-muted-foreground">Manage quotes and invoices</p>
        </div>
      </div>

      <Tabs defaultValue="quotes" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="quotes" className="gap-2">
            <FileText className="h-4 w-4" />
            Quotes
          </TabsTrigger>
          <TabsTrigger value="invoices" className="gap-2">
            <DollarSign className="h-4 w-4" />
            Invoices
          </TabsTrigger>
        </TabsList>

        <TabsContent value="quotes" className="space-y-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search quotes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2" onClick={() => toast({ title: "Filter opened" })}>
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button className="gap-2" onClick={() => toast({ title: "✨ New quote created" })}>
              <FileText className="h-4 w-4" />
              New Quote
            </Button>
          </div>

          <div className="grid gap-4">
            {quotes.map((quote) => (
              <Card key={quote.id} className="hover-lift hover-glow transition-all animate-slide-up">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-lg">{quote.id}</h3>
                        <StatusBadge status={quote.status} />
                      </div>
                      <p className="text-sm text-muted-foreground">{quote.client}</p>
                      <p className="text-sm font-medium">{quote.project}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{quote.amount}</p>
                        <p className="text-sm text-muted-foreground">{quote.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => toast({ title: "📄 Viewing quote" })}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => toast({ title: "⬇️ Downloaded" })}>
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="sm" onClick={() => toast({ title: "📧 Sent" })}>
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search invoices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button className="gap-2">
              <DollarSign className="h-4 w-4" />
              New Invoice
            </Button>
          </div>

          <div className="grid gap-4">
            {invoices.map((invoice) => (
              <Card key={invoice.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-lg">{invoice.id}</h3>
                        <StatusBadge status={invoice.status} />
                      </div>
                      <p className="text-sm text-muted-foreground">{invoice.client}</p>
                      <p className="text-sm font-medium">{invoice.project}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{invoice.amount}</p>
                        <p className="text-sm text-muted-foreground">
                          Due: {invoice.dueDate}
                        </p>
                        {invoice.paidDate && (
                          <p className="text-sm text-status-completed">Paid: {invoice.paidDate}</p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                        {invoice.status !== "paid" && (
                          <Button size="sm">
                            <Send className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Financials;
