import { useState, useMemo } from 'react';
import { Search, Sparkles, Brain, Filter } from 'lucide-react';
import SearchBar from './SearchBar';
import AICard from './AICard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { aiTools } from '@/data/aiTools';

const AIDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [premiumFilter, setPremiumFilter] = useState('all');

  // Move getCategoryName function before its first use
  const getCategoryName = (category: string) => {
    const names = {
      text: 'Texto',
      image: 'Imagem',
      code: 'Código',
      audio: 'Áudio',
      video: 'Vídeo',
      productivity: 'Produtividade',
    };
    return names[category as keyof typeof names] || category;
  };

  // Calcular categorias únicas e suas contagens
  const categories = useMemo(() => {
    const allCategories = aiTools.flatMap(tool => tool.categories);
    const uniqueCategories = [...new Set(allCategories)];
    
    const categoryData = [
      { id: 'all', name: 'Todas as Categorias', count: aiTools.length },
      ...uniqueCategories.map(category => ({
        id: category,
        name: getCategoryName(category),
        count: aiTools.filter(tool => tool.categories.includes(category)).length
      }))
    ];
    
    return categoryData;
  }, []);

  const premiumOptions = [
    { id: 'all', name: 'Todas as Ferramentas', count: aiTools.length },
    { id: 'free', name: 'Gratuitas', count: aiTools.filter(tool => !tool.isPremium).length },
    { id: 'premium', name: 'Premium', count: aiTools.filter(tool => tool.isPremium).length },
  ];

  const filteredTools = useMemo(() => {
    return aiTools.filter(tool => {
      const query = searchQuery.toLowerCase();
      
      // Busca por texto (nome, descrição, tags)
      const matchesText = !query || 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query)) ||
        tool.categories.some(category => getCategoryName(category).toLowerCase().includes(query));
      
      // Busca por categoria (verifica se a ferramenta tem a categoria selecionada)
      const matchesCategory = selectedCategory === 'all' || tool.categories.includes(selectedCategory);
      
      // Busca por status premium
      const matchesPremium = premiumFilter === 'all' || 
        (premiumFilter === 'premium' && tool.isPremium) ||
        (premiumFilter === 'free' && !tool.isPremium);
      
      return matchesText && matchesCategory && matchesPremium;
    });
  }, [searchQuery, selectedCategory, premiumFilter]);

  const handleSearch = () => {
    // A busca já acontece automaticamente através dos filtros
    console.log('Buscando com:', { searchQuery, selectedCategory, premiumFilter });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Header with Enhanced Search */}
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6 pt-12 pb-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative">
                <Brain className="w-12 h-12 text-purple-400" />
                <Sparkles className="w-6 h-6 text-pink-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                IACatálogo
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Descubra as melhores ferramentas de inteligência artificial organizadas por categoria. 
              Explore, pesquise e encontre a solução perfeita para seus projetos.
            </p>
          </div>
          
          {/* Enhanced Search Section */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 shadow-2xl ring-2 ring-purple-500/30">
              <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
                  <Search className="w-8 h-8 text-purple-400" />
                  Encontre sua Ferramenta de IA
                </h2>
                <p className="text-gray-300">
                  🔍 Use os filtros abaixo para encontrar exatamente o que você precisa
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="w-full">
                  <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
                </div>
                
                {/* Filters Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
                  {/* Category Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      Categoria
                    </label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id} className="text-white hover:bg-gray-700">
                            {category.name} ({category.count})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Premium Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Tipo de Acesso
                    </label>
                    <Select value={premiumFilter} onValueChange={setPremiumFilter}>
                      <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Filtrar por acesso" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        {premiumOptions.map((option) => (
                          <SelectItem key={option.id} value={option.id} className="text-white hover:bg-gray-700">
                            {option.name} ({option.count})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Search Button */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-transparent">Ação</label>
                    <Button 
                      onClick={handleSearch}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 border-0"
                      size="lg"
                    >
                      <Search className="w-5 h-5 mr-2" />
                      Buscar Ferramentas
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Results Counter */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <p className="text-gray-300">
            <span className="text-2xl font-bold text-white">{filteredTools.length}</span> ferramentas encontradas
            {selectedCategory !== 'all' && (
              <span className="ml-2 text-purple-400">
                em {categories.find(cat => cat.id === selectedCategory)?.name}
              </span>
            )}
            {premiumFilter !== 'all' && (
              <span className="ml-2 text-cyan-400">
                • {premiumOptions.find(opt => opt.id === premiumFilter)?.name}
              </span>
            )}
            {searchQuery && (
              <span className="ml-2 text-yellow-400">
                para "{searchQuery}"
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <main className="container mx-auto px-6 pb-16">
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool, index) => (
              <AICard 
                key={tool.id} 
                tool={tool} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">
              Nenhuma ferramenta encontrada
            </h3>
            <p className="text-gray-400">
              Tente ajustar sua pesquisa ou selecionar filtros diferentes
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Use a barra de busca e os filtros de categoria e tipo de acesso
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AIDirectory;