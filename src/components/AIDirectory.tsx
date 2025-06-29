
import { useState, useMemo } from 'react';
import { Search, Sparkles, Brain } from 'lucide-react';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import AICard from './AICard';
import { aiTools } from '@/data/aiTools';

const AIDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', count: aiTools.length },
    { id: 'text', name: 'Texto', count: aiTools.filter(tool => tool.category === 'text').length },
    { id: 'image', name: 'Imagem', count: aiTools.filter(tool => tool.category === 'image').length },
    { id: 'code', name: 'Código', count: aiTools.filter(tool => tool.category === 'code').length },
    { id: 'audio', name: 'Áudio', count: aiTools.filter(tool => tool.category === 'audio').length },
    { id: 'video', name: 'Vídeo', count: aiTools.filter(tool => tool.category === 'video').length },
    { id: 'productivity', name: 'Produtividade', count: aiTools.filter(tool => tool.category === 'productivity').length },
  ];

  const filteredTools = useMemo(() => {
    return aiTools.filter(tool => {
      const query = searchQuery.toLowerCase();
      
      // Busca por texto (nome, descrição, tags)
      const matchesText = !query || 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query));
      
      // Busca por categoria
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      
      // Busca por status premium
      const matchesPremium = !query || 
        (query.includes('premium') && tool.isPremium) ||
        (query.includes('free') && !tool.isPremium) ||
        (query.includes('grátis') && !tool.isPremium) ||
        (query.includes('gratuito') && !tool.isPremium) ||
        (query.includes('pago') && tool.isPremium);
      
      // Se a busca contém termos de premium/free, prioriza essa condição
      const hasPremiumSearch = query.includes('premium') || query.includes('free') || 
                              query.includes('grátis') || query.includes('gratuito') || query.includes('pago');
      
      if (hasPremiumSearch) {
        return matchesPremium && matchesCategory;
      }
      
      return matchesText && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative">
                <Brain className="w-12 h-12 text-purple-400" />
                <Sparkles className="w-6 h-6 text-pink-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                AI Directory
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Descubra as melhores ferramentas de inteligência artificial organizadas por categoria. 
              Explore, pesquise e encontre a solução perfeita para seus projetos.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              💡 Dica: Pesquise por "premium", "free", "grátis" ou "pago" para filtrar por tipo de acesso
            </p>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="container mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 w-full">
              <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            </div>
            <div className="w-full lg:w-auto">
              <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>
        </div>
      </div>

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
            {searchQuery && (
              <span className="ml-2 text-cyan-400">
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
              Tente ajustar sua pesquisa ou selecionar uma categoria diferente
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Experimente pesquisar por "premium", "free", nome da ferramenta ou categoria
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AIDirectory;
