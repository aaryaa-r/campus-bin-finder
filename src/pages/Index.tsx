import { useNavigate } from "react-router-dom";
import { Search, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <div className="container max-w-5xl py-16 md:py-24">
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Package className="h-4 w-4" />
            Free Campus Lost & Found
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to <span className="text-primary">CampusBin</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple platform to help students recover lost items and return found belongings on campus.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Found Something?</h2>
              <p className="text-muted-foreground">
                List an item you found on campus so the owner can claim it.
              </p>
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => navigate("/list")}
              >
                List Found Item
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Search className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-semibold">Lost Something?</h2>
              <p className="text-muted-foreground">
                Search through found items to see if your belongings were turned in.
              </p>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-2"
                onClick={() => navigate("/search")}
              >
                Search for Items
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* How it Works */}
        <div className="mt-20 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-xl font-bold text-primary">
                1
              </div>
              <h3 className="font-semibold text-lg">Find an Item</h3>
              <p className="text-sm text-muted-foreground">
                Spotted something on campus? Take a photo and note the location.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-xl font-bold text-primary">
                2
              </div>
              <h3 className="font-semibold text-lg">List It Here</h3>
              <p className="text-sm text-muted-foreground">
                Fill out a quick form with item details and your contact info.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto text-xl font-bold text-accent">
                3
              </div>
              <h3 className="font-semibold text-lg">Connect & Return</h3>
              <p className="text-sm text-muted-foreground">
                The owner searches, finds their item, and contacts you directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
