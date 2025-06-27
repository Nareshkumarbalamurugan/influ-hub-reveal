
import { Button } from "@/components/ui/button";
import { Lock, Chat } from "lucide-react";

interface InfluencerCardProps {
  name: string;
  bio: string;
  avatar: string;
  coverImage: string;
}

const InfluencerCard = ({ name, bio, avatar, coverImage }: InfluencerCardProps) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <img 
          src={avatar} 
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          <p className="text-gray-400 text-sm">{bio}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="relative">
          <img 
            src={coverImage} 
            alt="Content preview"
            className="w-full h-32 object-cover rounded-xl filter blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="relative">
          <img 
            src={coverImage} 
            alt="Content preview"
            className="w-full h-32 object-cover rounded-xl filter blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
        >
          <Lock className="w-4 h-4" />
          Unlock Content
        </Button>
        <Button 
          variant="outline"
          className="border-gray-600 text-white hover:bg-gray-700 flex items-center gap-2"
        >
          <Chat className="w-4 h-4" />
          Chat
        </Button>
      </div>
    </div>
  );
};

export default InfluencerCard;
