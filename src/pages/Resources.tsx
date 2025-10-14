import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Video, FileText, Search, Upload, Play, Download, Eye } from "lucide-react";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const videos = [
    { id: 1, title: "Hull Maintenance Tutorial", duration: "12:45", category: "Maintenance", views: 234, thumbnail: "🎬" },
    { id: 2, title: "Engine Troubleshooting Guide", duration: "18:30", category: "Repair", views: 456, thumbnail: "🎬" },
    { id: 3, title: "Safety Inspection Checklist", duration: "8:15", category: "Safety", views: 189, thumbnail: "🎬" },
    { id: 4, title: "Fiberglass Repair Techniques", duration: "22:10", category: "Repair", views: 567, thumbnail: "🎬" },
    { id: 5, title: "Paint Application Best Practices", duration: "15:20", category: "Finishing", views: 342, thumbnail: "🎬" },
  ];

  const materials = [
    { id: 1, name: "Marine Grade Epoxy", category: "Adhesives", stock: 45, unit: "gal", supplier: "Marine Supply Co", reorderLevel: 20 },
    { id: 2, name: "Gelcoat - White", category: "Finishing", stock: 12, unit: "gal", supplier: "Boat Finishing Inc", reorderLevel: 15 },
    { id: 3, name: "Stainless Steel Fasteners", category: "Hardware", stock: 234, unit: "box", supplier: "Marine Hardware", reorderLevel: 50 },
    { id: 4, name: "Fiberglass Cloth", category: "Composites", stock: 67, unit: "yd", supplier: "Composite Materials", reorderLevel: 30 },
    { id: 5, name: "Marine Varnish", category: "Finishing", stock: 8, unit: "gal", supplier: "Boat Finishing Inc", reorderLevel: 15 },
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Resources</h1>
          <p className="text-muted-foreground">Training videos and materials inventory</p>
        </div>
      </div>

      <Tabs defaultValue="videos" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="videos" className="gap-2">
            <Video className="h-4 w-4" />
            Training Videos
          </TabsTrigger>
          <TabsTrigger value="materials" className="gap-2">
            <FileText className="h-4 w-4" />
            Materials
          </TabsTrigger>
        </TabsList>

        <TabsContent value="videos" className="space-y-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="gap-2">
              <Upload className="h-4 w-4" />
              Upload Video
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video) => (
              <Card key={video.id} className="hover:shadow-md transition-shadow overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl relative">
                  {video.thumbnail}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="lg" className="gap-2">
                      <Play className="h-5 w-5" />
                      Play
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold line-clamp-1">{video.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{video.duration}</span>
                    <span>{video.views} views</span>
                  </div>
                  <Badge variant="secondary">{video.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="materials" className="space-y-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="gap-2">
              <Upload className="h-4 w-4" />
              Add Material
            </Button>
          </div>

          <div className="grid gap-4">
            {materials.map((material) => (
              <Card key={material.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-lg">{material.name}</h3>
                        <Badge variant="outline">{material.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{material.supplier}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right space-y-1">
                        <p className="text-sm text-muted-foreground">Current Stock</p>
                        <p className={`text-2xl font-bold ${material.stock <= material.reorderLevel ? 'text-status-cancelled' : 'text-primary'}`}>
                          {material.stock} {material.unit}
                        </p>
                        {material.stock <= material.reorderLevel && (
                          <Badge variant="destructive" className="text-xs">Low Stock</Badge>
                        )}
                      </div>
                      <Button size="sm" variant="outline">
                        Reorder
                      </Button>
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

export default Resources;
