import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Upload,
  Video,
  Grid3x3,
  List,
  Play,
  Clock,
  FileText,
  User,
} from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Yacht Serenity - Assessment",
    category: "Assessment",
    duration: "5:23",
    noteCount: 7,
    uploadDate: "Oct 10, 2025",
    uploadedBy: "Valentin",
    views: 12,
    thumbnail: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=400&h=225&fit=crop",
  },
  {
    id: 2,
    title: "Blue Horizon - Progress Update Week 2",
    category: "Progress",
    duration: "8:45",
    noteCount: 12,
    uploadDate: "Oct 8, 2025",
    uploadedBy: "Maria",
    views: 24,
    thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=225&fit=crop",
  },
  {
    id: 3,
    title: "Sea Breeze - QC Inspection",
    category: "QC",
    duration: "3:12",
    noteCount: 5,
    uploadDate: "Oct 12, 2025",
    uploadedBy: "Pedro",
    views: 8,
    thumbnail: "https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=400&h=225&fit=crop",
  },
  {
    id: 4,
    title: "Marina Belle - Completion Walkthrough",
    category: "Completion",
    duration: "12:34",
    noteCount: 18,
    uploadDate: "Oct 5, 2025",
    uploadedBy: "Valentin",
    views: 35,
    thumbnail: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=400&h=225&fit=crop",
  },
  {
    id: 5,
    title: "Varnish Application Training",
    category: "Training",
    duration: "15:47",
    noteCount: 22,
    uploadDate: "Oct 3, 2025",
    uploadedBy: "Ana",
    views: 56,
    thumbnail: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=225&fit=crop",
  },
  {
    id: 6,
    title: "Golden Wave - Client Walkthrough",
    category: "Client Walkthrough",
    duration: "6:18",
    noteCount: 9,
    uploadDate: "Oct 1, 2025",
    uploadedBy: "Carlos",
    views: 18,
    thumbnail: "https://images.unsplash.com/photo-1535024966711-1d1c90d6d5f6?w=400&h=225&fit=crop",
  },
];

const categoryColors: Record<string, string> = {
  Assessment: "bg-status-info/10 text-status-info border-status-info/20",
  Progress: "bg-accent/10 text-accent border-accent/20",
  QC: "bg-status-warning/10 text-status-warning border-status-warning/20",
  Completion: "bg-status-success/10 text-status-success border-status-success/20",
  Training: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  "Client Walkthrough": "bg-primary/10 text-primary border-primary/20",
};

export default function Videos() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Video Documentation</h1>
          <p className="text-muted-foreground">Manage project videos and inspection footage</p>
        </div>
        <Button className="bg-primary hover:bg-primary-light">
          <Upload className="mr-2 h-4 w-4" />
          Upload Video
        </Button>
      </div>

      {/* Search & View Toggle */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search videos by title or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline">Filter by Category</Button>
        <div className="flex gap-1 border rounded-lg p-1">
          <Button
            variant={viewMode === "grid" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid3x3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Videos Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => (
            <Card
              key={video.id}
              className="group cursor-pointer shadow-md transition-all hover:shadow-lg overflow-hidden"
            >
              <div className="relative aspect-video bg-muted">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90">
                    <Play className="h-6 w-6 text-primary ml-1" />
                  </div>
                </div>
                <Badge className="absolute bottom-2 right-2 bg-black/80 text-white border-0">
                  {video.duration}
                </Badge>
              </div>
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <Badge variant="outline" className={categoryColors[video.category]}>
                  {video.category}
                </Badge>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <FileText className="h-3 w-3" />
                    <span>{video.noteCount} notes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Video className="h-3 w-3" />
                    <span>{video.views} views</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Uploaded {video.uploadDate} by {video.uploadedBy}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredVideos.map((video) => (
            <Card
              key={video.id}
              className="group cursor-pointer shadow-md transition-all hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="relative w-48 aspect-video rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90">
                        <Play className="h-5 w-5 text-primary ml-0.5" />
                      </div>
                    </div>
                    <Badge className="absolute bottom-2 right-2 bg-black/80 text-white border-0 text-xs">
                      {video.duration}
                    </Badge>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={categoryColors[video.category]}>
                        {video.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <FileText className="h-4 w-4" />
                        <span>{video.noteCount} notes</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Video className="h-4 w-4" />
                        <span>{video.views} views</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>Uploaded by {video.uploadedBy}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{video.uploadDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
