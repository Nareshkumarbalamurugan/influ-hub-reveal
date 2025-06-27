
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-4 md:p-6 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="text-white text-xl md:text-2xl font-bold">
        YourApp
      </div>
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          className="text-white hover:bg-white/10 hidden sm:inline-flex"
        >
          Login
        </Button>
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Join Now
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
