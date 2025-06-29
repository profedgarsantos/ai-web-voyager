
export const aiTools = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Modelo de linguagem avançado da OpenAI para conversas, escrita criativa, programação e resolução de problemas complexos.',
    category: 'text',
    url: 'https://chat.openai.com',
    image: 'photo-1677442136019-21780ecad995',
    isPremium: true,
    rating: 4.8,
    tags: ['conversação', 'escrita', 'programação', 'análise']
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'Gerador de imagens AI que cria arte digital impressionante a partir de descrições de texto com qualidade profissional.',
    category: 'image',
    url: 'https://midjourney.com',
    image: 'photo-1547036967-23d11aacaee0',
    isPremium: true,
    rating: 4.9,
    tags: ['arte digital', 'design', 'criatividade', 'ilustração']
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    description: 'Assistente de programação AI que sugere código em tempo real, aumentando a produtividade dos desenvolvedores.',
    category: 'code',
    url: 'https://github.com/features/copilot',
    image: 'photo-1461749280684-dccba630e2f6',
    isPremium: true,
    rating: 4.7,
    tags: ['programação', 'autocompletar', 'desenvolvimento', 'produtividade']
  },
  {
    id: '4',
    name: 'Runway ML',
    description: 'Plataforma de criação de vídeo com IA, incluindo edição avançada, efeitos especiais e geração de conteúdo.',
    category: 'video',
    url: 'https://runwayml.com',
    image: 'photo-1574717024653-61fd2cf4d44d',
    isPremium: true,
    rating: 4.6,
    tags: ['edição de vídeo', 'efeitos especiais', 'criação', 'multimedia']
  },
  {
    id: '5',
    name: 'ElevenLabs',
    description: 'Síntese de voz AI realista que clona vozes e gera narrações com qualidade profissional em múltiplos idiomas.',
    category: 'audio',
    url: 'https://elevenlabs.io',
    image: 'photo-1590736969955-71cc94901144',
    isPremium: true,
    rating: 4.8,
    tags: ['síntese de voz', 'clonagem', 'narração', 'podcast']
  },
  {
    id: '6', 
    name: 'Notion AI',
    description: 'Assistente de escrita integrado ao Notion para brainstorming, resumos, tradução e organização de conteúdo.',
    category: 'productivity',
    url: 'https://notion.so/product/ai',
    image: 'photo-1484480974693-6ca0a78fb36b',
    isPremium: true,
    rating: 4.5,
    tags: ['produtividade', 'escrita', 'organização', 'notas']
  },
  {
    id: '7',
    name: 'DALL-E 3',
    description: 'Gerador de imagens da OpenAI com compreensão avançada de prompts e criação de imagens altamente detalhadas.',
    category: 'image',
    url: 'https://openai.com/dall-e-3',
    image: 'photo-1618005182384-a83a8bd57fbe',
    isPremium: true,
    rating: 4.7,
    tags: ['geração de imagem', 'arte', 'criatividade', 'design']
  },
  {
    id: '8',
    name: 'Claude',
    description: 'Assistente AI da Anthropic focado em conversas úteis, harmless e honestas com capacidades avançadas de raciocínio.',
    category: 'text',
    url: 'https://claude.ai',
    image: 'photo-1485827404703-89b55fcc595e',
    isPremium: false,
    rating: 4.6,
    tags: ['conversação', 'análise', 'escrita', 'raciocínio']
  },
  {
    id: '9',
    name: 'Stable Diffusion',
    description: 'Modelo open-source para geração de imagens AI com controle detalhado e personalização avançada.',
    category: 'image',
    url: 'https://stablediffusionweb.com',
    image: 'photo-1547036967-23d11aacaee0',
    isPremium: false,
    rating: 4.4,
    tags: ['open-source', 'geração de imagem', 'personalização', 'arte']
  },
  {
    id: '10',
    name: 'Replit Ghostwriter',
    description: 'Assistente de código AI integrado ao Replit que ajuda na programação com sugestões contextuais.',
    category: 'code',
    url: 'https://replit.com/site/ghostwriter',
    image: 'photo-1487058792275-0ad4aaf24ca7',
    isPremium: true,
    rating: 4.3,
    tags: ['programação', 'IDE', 'colaboração', 'aprendizado']
  },
  {
    id: '11',
    name: 'Murf AI',
    description: 'Gerador de voz AI para criar narrações profissionais com múltiplas vozes e idiomas para vídeos e podcasts.',
    category: 'audio',
    url: 'https://murf.ai',
    image: 'photo-1598488035139-bdbb2231ce04',
    isPremium: true,
    rating: 4.5,
    tags: ['text-to-speech', 'narração', 'vídeo', 'multilingual']
  },
  {
    id: '12',
    name: 'Pika Labs',
    description: 'Plataforma de geração de vídeos AI que transforma texto e imagens em vídeos curtos e envolventes.',
    category: 'video',
    url: 'https://pika.art',
    image: 'photo-1574717024653-61fd2cf4d44d',
    isPremium: true,
    rating: 4.4,
    tags: ['text-to-video', 'animação', 'criação', 'social media']
  },
  {
    id: '13',
    name: 'Jasper AI',
    description: 'Plataforma de escrita AI para marketing que cria conteúdo otimizado para blogs, anúncios e redes sociais.',
    category: 'text',
    url: 'https://jasper.ai',
    image: 'photo-1486312338219-ce68d2c6f44d',
    isPremium: true,
    rating: 4.5,
    tags: ['marketing', 'copywriting', 'SEO', 'conteúdo']
  },
  {
    id: '14',
    name: 'Canva AI',
    description: 'Ferramentas de design AI integradas ao Canva para criação automática de layouts, remoção de fundo e mais.',
    category: 'image',
    url: 'https://canva.com/ai-image-generator/',
    image: 'photo-1561070791-2526d30994b5',
    isPremium: true,
    rating: 4.6,
    tags: ['design gráfico', 'templates', 'marketing', 'social media']
  },
  {
    id: '15',
    name: 'Grammarly',
    description: 'Assistente de escrita AI que corrige gramática, melhora clareza e ajusta tom para diferentes contextos.',
    category: 'productivity',
    url: 'https://grammarly.com',
    image: 'photo-1488590528505-98d2b5aba04b',
    isPremium: true,
    rating: 4.7,
    tags: ['correção', 'escrita', 'gramática', 'produtividade']
  },
  {
    id: '16',
    name: 'Synthesia',
    description: 'Criador de vídeos AI com avatares virtuais que falam em múltiplos idiomas para treinamento e apresentações.',
    category: 'video',
    url: 'https://synthesia.io',
    image: 'photo-1574717024653-61fd2cf4d44d',
    isPremium: true,
    rating: 4.3,
    tags: ['avatar virtual', 'apresentação', 'treinamento', 'multilingual']
  }
];
