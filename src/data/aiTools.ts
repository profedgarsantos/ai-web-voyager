
// AI Tools Database with Multiple Categories Support
export interface AITool {
  id: string;
  name: string;
  description: string;
  categories: string[]; // Changed from single category to array
  url: string;
  image: string;
  isPremium: boolean;
  rating: number;
  tags: string[];
}

export const aiTools: AITool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Assistente de IA conversacional para texto, código e análise de dados.',
    categories: ['text', 'code', 'productivity'], // Multiple categories
    url: 'https://chat.openai.com',
    image: 'https://cdn.openai.com/API/logo-openai.svg',
    isPremium: true,
    rating: 4.8,
    tags: ['conversação', 'escrita', 'programação', 'análise']
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'Gerador de imagens artísticas com IA de alta qualidade.',
    categories: ['image'],
    url: 'https://midjourney.com',
    image: 'https://midjourney.com/apple-touch-icon.png',
    isPremium: true,
    rating: 4.9,
    tags: ['arte', 'design', 'criatividade']
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    description: 'Assistente de programação que sugere código em tempo real.',
    categories: ['code', 'productivity'],
    url: 'https://github.com/features/copilot',
    image: 'https://github.githubassets.com/images/modules/site/copilot/copilot-logo.png',
    isPremium: true,
    rating: 4.7,
    tags: ['programação', 'autocomplete', 'desenvolvimento']
  },
  {
    id: '4',
    name: 'Notion AI',
    description: 'IA integrada ao Notion para escrita, organização e produtividade.',
    categories: ['text', 'productivity'],
    url: 'https://notion.so/product/ai',
    image: 'https://notion.so/images/favicon.ico',
    isPremium: true,
    rating: 4.5,
    tags: ['escrita', 'organização', 'produtividade', 'notas']
  },
  {
    id: '5',
    name: 'Stable Diffusion',
    description: 'Modelo de IA open-source para geração de imagens.',
    categories: ['image'],
    url: 'https://stability.ai/stable-diffusion',
    image: 'https://stability.ai/favicon.ico',
    isPremium: false,
    rating: 4.6,
    tags: ['geração de imagens', 'open-source', 'arte']
  },
  {
    id: '6',
    name: 'Eleven Labs',
    description: 'Síntese de voz realista com IA para diversos idiomas.',
    categories: ['audio'],
    url: 'https://elevenlabs.io',
    image: 'https://elevenlabs.io/favicon.ico',
    isPremium: true,
    rating: 4.8,
    tags: ['síntese de voz', 'dublagem', 'narração']
  },
  {
    id: '7',
    name: 'RunwayML',
    description: 'Plataforma de IA para criação e edição de vídeos.',
    categories: ['video', 'image'],
    url: 'https://runwayml.com',
    image: 'https://runwayml.com/favicon.ico',
    isPremium: true,
    rating: 4.7,
    tags: ['edição de vídeo', 'efeitos especiais', 'criação']
  },
  {
    id: '8',
    name: 'Jasper AI',
    description: 'Assistente de escrita para marketing e criação de conteúdo.',
    categories: ['text', 'productivity'],
    url: 'https://jasper.ai',
    image: 'https://jasper.ai/favicon.ico',
    isPremium: true,
    rating: 4.4,
    tags: ['copywriting', 'marketing', 'conteúdo']
  },
  {
    id: '9',
    name: 'Canva AI',
    description: 'Ferramentas de IA integradas ao Canva para design.',
    categories: ['image', 'productivity'],
    url: 'https://canva.com/ai',
    image: 'https://canva.com/favicon.ico',
    isPremium: true,
    rating: 4.6,
    tags: ['design', 'templates', 'criação visual']
  },
  {
    id: '10',
    name: 'Perplexity AI',
    description: 'Motor de busca com IA que fornece respostas com fontes.',
    categories: ['text', 'productivity'],
    url: 'https://perplexity.ai',
    image: 'https://perplexity.ai/favicon.ico',
    isPremium: false,
    rating: 4.5,
    tags: ['busca', 'pesquisa', 'informação']
  },
  {
    id: '11',
    name: 'Claude',
    description: 'Assistente de IA da Anthropic para conversação e análise.',
    categories: ['text', 'code', 'productivity'],
    url: 'https://claude.ai',
    image: 'https://claude.ai/favicon.ico',
    isPremium: true,
    rating: 4.7,
    tags: ['conversação', 'análise', 'escrita', 'código']
  },
  {
    id: '12',
    name: 'Replicate',
    description: 'Plataforma para executar modelos de IA open-source.',
    categories: ['image', 'text', 'audio', 'video'],
    url: 'https://replicate.com',
    image: 'https://replicate.com/favicon.ico',
    isPremium: false,
    rating: 4.3,
    tags: ['modelos', 'open-source', 'API']
  },
  {
    id: '13',
    name: 'Synthesia',
    description: 'Criação de vídeos com avatares de IA.',
    categories: ['video'],
    url: 'https://synthesia.io',
    image: 'https://synthesia.io/favicon.ico',
    isPremium: true,
    rating: 4.5,
    tags: ['vídeo', 'avatares', 'apresentações']
  },
  {
    id: '14',
    name: 'Grammarly',
    description: 'Assistente de escrita com correção gramatical e de estilo.',
    categories: ['text', 'productivity'],
    url: 'https://grammarly.com',
    image: 'https://grammarly.com/favicon.ico',
    isPremium: true,
    rating: 4.6,
    tags: ['gramática', 'correção', 'escrita']
  },
  {
    id: '15',
    name: 'Loom AI',
    description: 'Gravação de tela com recursos de IA para edição.',
    categories: ['video', 'productivity'],
    url: 'https://loom.com',
    image: 'https://loom.com/favicon.ico',
    isPremium: true,
    rating: 4.4,
    tags: ['gravação', 'tela', 'edição']
  },
  {
    id: '16',
    name: 'Murf AI',
    description: 'Gerador de voz com IA para narração e dublagem.',
    categories: ['audio'],
    url: 'https://murf.ai',
    image: 'https://murf.ai/favicon.ico',
    isPremium: true,
    rating: 4.3,
    tags: ['voz', 'narração', 'dublagem']
  },
  {
    id: '17',
    name: 'Remove.bg',
    description: 'Remoção automática de fundo de imagens com IA.',
    categories: ['image'],
    url: 'https://remove.bg',
    image: 'https://remove.bg/favicon.ico',
    isPremium: false,
    rating: 4.7,
    tags: ['remoção de fundo', 'edição', 'imagens']
  },
  {
    id: '18',
    name: 'Tome',
    description: 'Criação de apresentações com IA.',
    categories: ['productivity', 'text'],
    url: 'https://tome.app',
    image: 'https://tome.app/favicon.ico',
    isPremium: true,
    rating: 4.2,
    tags: ['apresentações', 'slides', 'criação']
  },
  {
    id: '19',
    name: 'Replit AI',
    description: 'Assistente de programação integrado ao Replit.',
    categories: ['code', 'productivity'],
    url: 'https://replit.com',
    image: 'https://replit.com/favicon.ico',
    isPremium: true,
    rating: 4.5,
    tags: ['programação', 'código', 'desenvolvimento']
  },
  {
    id: '20',
    name: 'Descript',
    description: 'Edição de áudio e vídeo baseada em texto com IA.',
    categories: ['audio', 'video'],
    url: 'https://descript.com',
    image: 'https://descript.com/favicon.ico',
    isPremium: true,
    rating: 4.6,
    tags: ['edição', 'transcrição', 'áudio', 'vídeo']
  }
];
