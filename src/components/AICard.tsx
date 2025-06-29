
import { ExternalLink, Star, Zap } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  image: string;
  isPremium: boolean;
  rating: number;
  tags: string[];
}

interface AICardProps {
  tool: AITool;
  className?: string;
  style?: React.CSSProperties;
}

const getCategoryColor = (category: string) => {
  const colors = {
    text: 'from-blue-500 to-cyan-500',
    image: 'from-pink-500 to-rose-500',
    code: 'from-green-500 to-emerald-500',
    audio: 'from-purple-500 to-violet-500',
    video: 'from-red-500 to-orange-500',
    productivity: 'from-yellow-500 to-amber-500',
  };
  return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
};

const AICard = ({ tool, className = '', style }: AICardProps) => {
  const handleOpenSite = () => {
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card 
      className={`group bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl overflow-hidden ${className}`}
      style={style}
    >
      <CardHeader className="p-0 relative">
        <div className="relative h-48 overflow-hidden">
          <img
            src={`https://images.unsplash.com/${tool.image}?w=400&h=300&fit=crop`}
            alt={tool.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Premium Badge */}
          {tool.isPremium && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                <Zap className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge className={`bg-gradient-to-r ${getCategoryColor(tool.category)} text-white border-0 capitalize`}>
              {tool.category}
            </Badge>
          </div>

          {/* Rating */}
          <div className="absolute bottom-3 left-3 flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">{tool.rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {tool.name}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {tool.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tool.tags.slice(0, 3).map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs border-white/20 text-gray-300 hover:bg-white/10"
            >
              {tag}
            </Badge>
          ))}
          {tool.tags.length > 3 && (
            <Badge variant="outline" className="text-xs border-white/20 text-gray-400">
              +{tool.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <button
          onClick={handleOpenSite}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group/btn"
        >
          <span>Visitar Site</span>
          <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </CardFooter>
    </Card>
  );
};

export default AICard;
