
import Navigation from "@/components/Navigation";
import InfluencerCard from "@/components/InfluencerCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const influencers = [
    {
      name: "Jess",
      bio: "Health & Wellness Creator",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      name: "Alex",
      bio: "Fitness & Lifestyle Influencer",
      avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <div className="px-4 py-12 md:py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Discover Influencers.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Unlock Exclusive Content.
          </span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Join your favorite creators and access their premium photos, videos, and private chats.
        </p>
        
        <Button 
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore Creators
        </Button>
      </div>
      
      {/* Influencer Cards */}
      <div className="px-4 pb-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {influencers.map((influencer, index) => (
            <InfluencerCard
              key={index}
              name={influencer.name}
              bio={influencer.bio}
              avatar={influencer.avatar}
              coverImage={influencer.coverImage}
            />
          ))}
          
          {/* Additional cards for demo */}
          <InfluencerCard
            name="Maya"
            bio="Fashion & Beauty Creator"
            avatar="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
            coverImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
          />
          
          <InfluencerCard
            name="Ryan"
            bio="Travel & Adventure Blogger"
            avatar="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
            coverImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
          />
          
          <InfluencerCard
            name="Sophie"
            bio="Art & Design Enthusiast"
            avatar="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
            coverImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
          />
          
          <InfluencerCard
            name="Jake"
            bio="Gaming & Tech Creator"
            avatar="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
            coverImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
