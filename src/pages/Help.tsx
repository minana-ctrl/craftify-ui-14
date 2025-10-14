import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search,
  BookOpen,
  Video,
  MessageCircle,
  Mail,
  Phone,
  FileText,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    question: "How do I create a new quote?",
    answer: "Navigate to the Quotes page and click the 'New Quote' button. Follow the 5-step wizard to add client details, inspection photos, and pricing.",
  },
  {
    question: "How do team members log their hours?",
    answer: "Field team members can use the voice logging feature from their mobile device or manually enter hours through the timesheet form.",
  },
  {
    question: "Can I export invoices as PDF?",
    answer: "Yes, all invoices can be downloaded as PDF from the invoice detail page or the invoices list.",
  },
  {
    question: "How do I add new materials to the database?",
    answer: "Go to Materials Database and click 'Add Material'. You can also import materials in bulk using the CSV import feature.",
  },
];

const resources = [
  {
    title: "User Guide",
    description: "Comprehensive documentation for all features",
    icon: BookOpen,
    link: "#",
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video walkthroughs",
    icon: Video,
    link: "#",
  },
  {
    title: "What's New",
    description: "Latest updates and release notes",
    icon: FileText,
    link: "#",
  },
];

export default function Help() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
        <p className="text-muted-foreground">Find answers and get assistance</p>
      </div>

      {/* Search */}
      <Card className="shadow-md">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for help..."
              className="pl-10 h-12 text-base"
            />
          </div>
        </CardContent>
      </Card>

      {/* Contact Options */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-md cursor-pointer hover:shadow-lg transition-all group">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-sm text-muted-foreground">Chat with our team</p>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Start Chat
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md cursor-pointer hover:shadow-lg transition-all group">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Email Support</h3>
                <p className="text-sm text-muted-foreground">support@absoluteboatcare.com</p>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Send Email
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md cursor-pointer hover:shadow-lg transition-all group">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-status-success/10 group-hover:bg-status-success/20 transition-colors">
                <Phone className="h-6 w-6 text-status-success" />
              </div>
              <div>
                <h3 className="font-semibold">Phone Support</h3>
                <p className="text-sm text-muted-foreground">+34 600 123 456</p>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Call Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resources */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Resources</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Card
                key={resource.title}
                className="shadow-md cursor-pointer hover:shadow-lg transition-all group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <CardTitle className="text-base flex items-start gap-2">
                  <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground pl-7">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Still Need Help */}
      <Card className="shadow-md border-primary/20 bg-primary/5">
        <CardContent className="p-6">
          <div className="text-center space-y-3">
            <h3 className="text-lg font-semibold">Still need help?</h3>
            <p className="text-muted-foreground">
              Our support team is available Monday to Friday, 9:00 AM - 6:00 PM CET
            </p>
            <Button className="bg-primary hover:bg-primary-light">
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
