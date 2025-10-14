import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus,
  Package,
  Euro,
  Edit,
  History,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const materials = [
  {
    id: 1,
    name: "Awlgrip Topcoat White",
    category: "Paint",
    costPerUnit: "€23.00",
    unit: "L",
    pricingTier: "High",
    lastUpdated: "Oct 10, 2025",
    updatedBy: "Duncan",
    stockLevel: 45,
    trend: "up" as const,
  },
  {
    id: 2,
    name: "Awlwood Varnish Clear",
    category: "Varnish",
    costPerUnit: "€18.50",
    unit: "L",
    pricingTier: "Mid",
    lastUpdated: "Oct 8, 2025",
    updatedBy: "Maria",
    stockLevel: 32,
    trend: "stable" as const,
  },
  {
    id: 3,
    name: "International Antifoul Blue",
    category: "Antifoul",
    costPerUnit: "€15.20",
    unit: "L",
    pricingTier: "Mid",
    lastUpdated: "Oct 12, 2025",
    updatedBy: "Pedro",
    stockLevel: 28,
    trend: "down" as const,
  },
  {
    id: 4,
    name: "Sikaflex 291i Marine Adhesive",
    category: "Sealant",
    costPerUnit: "€12.80",
    unit: "Cartridge",
    pricingTier: "Low",
    lastUpdated: "Oct 5, 2025",
    updatedBy: "Ana",
    stockLevel: 67,
    trend: "stable" as const,
  },
  {
    id: 5,
    name: "3M Marine Sandpaper P80",
    category: "Abrasives",
    costPerUnit: "€2.40",
    unit: "Sheet",
    pricingTier: "Low",
    lastUpdated: "Oct 3, 2025",
    updatedBy: "Carlos",
    stockLevel: 150,
    trend: "stable" as const,
  },
  {
    id: 6,
    name: "Teak Oil Natural",
    category: "Wood Care",
    costPerUnit: "€21.50",
    unit: "L",
    pricingTier: "High",
    lastUpdated: "Oct 1, 2025",
    updatedBy: "Valentin",
    stockLevel: 18,
    trend: "up" as const,
  },
];

const tierColors = {
  High: "bg-status-error/10 text-status-error border-status-error/20",
  Mid: "bg-status-warning/10 text-status-warning border-status-warning/20",
  Low: "bg-status-success/10 text-status-success border-status-success/20",
};

export default function Materials() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMaterials = materials.filter(
    (material) =>
      material.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Materials Database</h1>
          <p className="text-muted-foreground">Manage inventory and pricing tiers</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            Import CSV
          </Button>
          <Button className="bg-primary hover:bg-primary-light">
            <Plus className="mr-2 h-4 w-4" />
            Add Material
          </Button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search materials by name or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline">Filter by Category</Button>
        <Button variant="outline">Filter by Tier</Button>
      </div>

      {/* Materials Table */}
      <Card className="shadow-md">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th className="text-left p-4 font-semibold">Material Name</th>
                  <th className="text-left p-4 font-semibold">Category</th>
                  <th className="text-left p-4 font-semibold">Cost/Unit</th>
                  <th className="text-left p-4 font-semibold">Unit</th>
                  <th className="text-left p-4 font-semibold">Pricing Tier</th>
                  <th className="text-left p-4 font-semibold">Stock</th>
                  <th className="text-left p-4 font-semibold">Last Updated</th>
                  <th className="text-left p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMaterials.map((material, index) => (
                  <tr 
                    key={material.id}
                    className={`border-b transition-colors hover:bg-muted/30 ${
                      index % 2 === 0 ? "bg-background" : "bg-muted/10"
                    }`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{material.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="secondary">{material.category}</Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-primary">{material.costPerUnit}</span>
                        {material.trend === "up" && (
                          <TrendingUp className="h-3 w-3 text-status-error" />
                        )}
                        {material.trend === "down" && (
                          <TrendingDown className="h-3 w-3 text-status-success" />
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{material.unit}</td>
                    <td className="p-4">
                      <Badge variant="outline" className={tierColors[material.pricingTier as keyof typeof tierColors]}>
                        {material.pricingTier}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className={material.stockLevel < 20 ? "text-status-warning font-medium" : ""}>
                        {material.stockLevel}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">
                        <div className="text-muted-foreground">{material.lastUpdated}</div>
                        <div className="text-xs text-muted-foreground">by {material.updatedBy}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <History className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
