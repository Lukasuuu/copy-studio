export type Tone =
  | 'conversational'
  | 'professional'
  | 'persuasive'
  | 'humorous'
  | 'emotional'
  | 'academic'
  | 'journalistic'
  | 'creative'
  | 'technical'
  | 'marketing'
  | 'casual'
  | 'storytelling'
  | 'analytical';

export type WritingStyle =
  | 'formal'
  | 'casual'
  | 'creative'
  | 'technical'
  | 'marketing';

export type Intensity = 'light' | 'medium' | 'aggressive' | 'ninja';

export interface HumanizeOptions {
  tone: Tone;
  style: WritingStyle;
  intensity: Intensity;
}

// Dicionários de substituição por tom
const toneReplacements: Record<Tone, Record<string, string[]>> = {
  conversational: {
    utilize: ['use', 'aproveite'],
    obtain: ['get', 'conseguir'],
    purchase: ['buy', 'comprar'],
    assist: ['help', 'ajudar'],
    require: ['need', 'precisar'],
    demonstrate: ['show', 'mostrar'],
    additional: ['more', 'mais'],
    sufficient: ['enough', 'suficiente'],
    frequently: ['often', 'frequentemente'],
    subsequently: ['then', 'depois'],
    commence: ['start', 'começar'],
    terminate: ['end', 'terminar'],
    endeavor: ['try', 'tentar'],
    facilitate: ['make easier', 'facilitar'],
    implement: ['put in place', 'implementar'],
    leverage: ['use', 'aproveitar'],
    optimize: ['improve', 'melhorar'],
    streamline: ['simplify', 'simplificar'],
    maximize: ['get the most from', 'tirar o máximo'],
    minimize: ['reduce', 'reduzir'],
  },
  professional: {
    use: ['utilize', 'utilizar'],
    get: ['obtain', 'obter'],
    buy: ['purchase', 'adquirir'],
    help: ['assist', 'auxiliar'],
    need: ['require', 'requerer'],
    show: ['demonstrate', 'demonstrar'],
    more: ['additional', 'adicional'],
    enough: ['sufficient', 'suficiente'],
    often: ['frequently', 'frequentemente'],
    then: ['subsequently', 'posteriormente'],
    start: ['commence', 'iniciar'],
    end: ['terminate', 'concluir'],
    try: ['endeavor', 'esforçar-se'],
    'make easier': ['facilitate', 'facilitar'],
    'put in place': ['implement', 'implementar'],
  },
  persuasive: {
    good: ['exceptional', 'extraordinary'],
    important: ['crucial', 'essential'],
    better: ['superior'],
    big: ['transformative'],
    problem: ['challenge'],
    solution: ['breakthrough'],
    improve: ['elevate'],
    success: ['triumph'],
    result: ['outcome'],
    goal: ['mission'],
    begin: ['embark'],
    change: ['revolutionize'],
    grow: ['skyrocket'],
    fast: ['rapid'],
  },
  humorous: {
    problem: ['little hiccup'],
    difficult: ['a bit of a pickle'],
    error: ['oopsie'],
    failure: ['learning opportunity'],
    expensive: ['wallet-unfriendly'],
    complicated: ['brain-twister'],
    boring: ['snooze-fest'],
    busy: ['running around like a headless chicken'],
    tired: ['running on fumes'],
    confused: ['my brain went on vacation'],
  },
  emotional: {
    happy: ['overjoyed'],
    sad: ['heartbroken'],
    excited: ['thrilled'],
    angry: ['devastated'],
    love: ['deeply cherish'],
    thankful: ['profoundly grateful'],
    proud: ['overflowing with pride'],
    hopeful: ['filled with hope'],
    amazing: ['breathtaking'],
    beautiful: ['stunning'],
    friend: ['soul companion'],
    family: ['heart of my heart'],
  },
  academic: {
    use: ['employ'],
    show: ['demonstrate'],
    prove: ['substantiate'],
    explain: ['elucidate'],
    important: ['significant'],
    big: ['substantial'],
    change: ['modification'],
    result: ['consequence'],
    reason: ['rationale'],
    idea: ['concept'],
    part: ['component'],
    thing: ['element'],
    make: ['generate'],
    get: ['acquire'],
  },
  journalistic: {
    said: ['stated', 'reported'],
    told: ['informed'],
    think: ['believe'],
    know: ['understand'],
    big: ['major'],
    problem: ['issue'],
    start: ['launch'],
    end: ['conclude'],
    talk: ['discuss'],
    look: ['examine'],
    find: ['discover'],
    change: ['shift'],
  },
  creative: {
    beautiful: ['a tapestry of wonder'],
    dark: ['swallowed by shadows'],
    light: ['dancing beams of gold'],
    fast: ['like a river rushing'],
    slow: ['unfolding like a lullaby'],
    love: ['a symphony of the soul'],
    time: ['the whispering clock'],
    life: ['the grand poem'],
    dream: ['a flight of fancy'],
    sad: ['draped in twilight'],
  },
  technical: {
    make: ['construct'],
    build: ['assemble'],
    use: ['deploy'],
    fix: ['debug'],
    test: ['validate'],
    check: ['verify'],
    change: ['modify'],
    remove: ['eliminate'],
    add: ['append'],
    find: ['locate'],
    'look at': ['inspect'],
    start: ['initiate'],
    stop: ['terminate'],
    problem: ['anomaly'],
    error: ['exception'],
  },
  marketing: {
    product: ['solution'],
    buy: ['invest in'],
    price: ['investment'],
    customer: ['valued client'],
    sell: ['deliver'],
    good: ['premium'],
    better: ['best-in-class'],
    feature: ['benefit'],
    cheap: ['cost-effective'],
    fast: ['rapid deployment'],
    new: ['innovative'],
    improve: ['supercharge'],
    help: ['empower'],
    grow: ['scale'],
  },
  casual: {
    hello: ['hey'],
    goodbye: ['see ya'],
    'thank you': ['thanks'],
    yes: ['yeah'],
    no: ['nope'],
    friend: ['buddy'],
    great: ['awesome'],
    very: ['super'],
    really: ['honestly'],
    interesting: ['cool'],
    difficult: ['tricky'],
    easy: ['a piece of cake'],
  },
  storytelling: {
    then: ['and just like that'],
    suddenly: ['out of nowhere'],
    finally: ['at long last'],
    after: ['once upon a time after'],
    because: ['the reason was'],
    important: ['the turning point'],
    change: ['the plot twisted'],
    end: ['the curtain fell'],
    begin: ['the story began'],
    remember: ['as the tale goes'],
  },
  analytical: {
    think: ['analyze'],
    feel: ['data suggests'],
    believe: ['evidence indicates'],
    maybe: ['probability suggests'],
    good: ['optimal'],
    bad: ['suboptimal'],
    big: ['significant in magnitude'],
    small: ['negligible'],
    result: ['outcome metric'],
    reason: ['causal factor'],
    problem: ['bottleneck'],
    solution: ['optimization'],
  },
};

// Contractions map
const contractions: Record<string, string> = {
  "don't": 'do not',
  "can't": 'cannot',
  "won't": 'will not',
  "isn't": 'is not',
  "aren't": 'are not',
  "wasn't": 'was not',
  "weren't": 'were not',
  "haven't": 'have not',
  "hasn't": 'has not',
  "hadn't": 'had not',
  "wouldn't": 'would not',
  "shouldn't": 'should not',
  "couldn't": 'could not',
  "mustn't": 'must not',
  "needn't": 'need not',
  "shan't": 'shall not',
  "let's": 'let us',
  "that's": 'that is',
  "who's": 'who is',
  "what's": 'what is',
  "here's": 'here is',
  "there's": 'there is',
  "where's": 'where is',
  "how's": 'how is',
  "it's": 'it is',
  "i'm": 'I am',
  "you're": 'you are',
  "we're": 'we are',
  "they're": 'they are',
  "he's": 'he is',
  "she's": 'she is',
  "i've": 'I have',
  "you've": 'you have',
  "we've": 'we have',
  "they've": 'they have',
  "i'll": 'I will',
  "you'll": 'you will',
  "we'll": 'we will',
  "they'll": 'they will',
  "he'll": 'he will',
  "she'll": 'she will',
  "it'll": 'it will',
  "i'd": 'I would',
  "you'd": 'you would',
  "he'd": 'he would',
  "she'd": 'she would',
  "we'd": 'we would',
  "they'd": 'they would',
  "it'd": 'it would',
};

const reverseContractions: Record<string, string> = Object.fromEntries(
  Object.entries(contractions).map(([k, v]) => [v.toLowerCase(), k])
);

// Transformações por intensidade
function applyIntensity(text: string, intensity: Intensity): string {
  const rules: Record<Intensity, ((t: string) => string)[]> = {
    light: [
      (t) => t.replace(/\b(very|really|extremely)\b/gi, 'quite'),
      (t) => t.replace(/\!{2,}/g, '!'),
    ],
    medium: [
      (t) => t.replace(/\b(very|really|extremely)\b/gi, ''),
      (t) => t.replace(/\!{1,}/g, '!'),
      (t) => t.replace(/\b(utilize|leverage|streamline)\b/gi, (m) => {
        const map: Record<string, string> = { utilize: 'use', leverage: 'use', streamline: 'simplify' };
        return map[m.toLowerCase()] || m;
      }),
    ],
    aggressive: [
      (t) => t.replace(/\b(utilize|leverage|streamline|optimize|maximize|facilitate)\b/gi, (m) => {
        const map: Record<string, string> = {
          utilize: 'use',
          leverage: 'use',
          streamline: 'simplify',
          optimize: 'improve',
          maximize: 'get the most from',
          facilitate: 'make easier',
        };
        return map[m.toLowerCase()] || m;
      }),
      (t) => t.replace(/\b(in order to|due to the fact that|at this point in time)\b/gi, (m) => {
        const map: Record<string, string> = {
          'in order to': 'to',
          'due to the fact that': 'because',
          'at this point in time': 'now',
        };
        return map[m.toLowerCase()] || m;
      }),
      (t) => t.replace(/\,\s*\,/g, ','),
    ],
    ninja: [
      (t) => {
        let r = t;
        r = r.replace(/\b(utilize|leverage|streamline|optimize|maximize|facilitate)\b/gi, (m) => {
          const map: Record<string, string> = {
            utilize: 'use',
            leverage: 'use',
            streamline: 'simplify',
            optimize: 'improve',
            maximize: 'get the most from',
            facilitate: 'make easier',
          };
          return map[m.toLowerCase()] || m;
        });
        r = r.replace(/\b(in order to|due to the fact that|at this point in time)\b/gi, (m) => {
          const map: Record<string, string> = {
            'in order to': 'to',
            'due to the fact that': 'because',
            'at this point in time': 'now',
          };
          return map[m.toLowerCase()] || m;
        });
        return r;
      },
      (t) => t.replace(/([^\.\!\?\n]{80,200}[\,\;])\s+/g, '$1\n'),
      (t) => {
        const sentences = t.split(/(?<=[\.\!\?\n])\s+/);
        return sentences.map((s, i) => {
          if (i % 3 === 0 && s.length > 40) {
            return s.replace(/^([^,]+),\s*/, '$1. ');
          }
          return s;
        }).join(' ');
      },
    ],
  };

  let result = text;
  for (const fn of rules[intensity]) {
    result = fn(result);
  }
  return result;
}

// Aplica substituições por tom
function applyTone(text: string, tone: Tone): string {
  const replacements = toneReplacements[tone];
  if (!replacements) return text;

  let result = text;
  for (const [key, values] of Object.entries(replacements)) {
    const regex = new RegExp(`\\b${key}\\b`, 'gi');
    result = result.replace(regex, () => {
      const pick = values[Math.floor(Math.random() * values.length)];
      return pick;
    });
  }
  return result;
}

// Adiciona estilo de escrita
function applyStyle(text: string, style: WritingStyle): string {
  switch (style) {
    case 'formal': {
      let r = text;
      for (const [contracted, expanded] of Object.entries(contractions)) {
        const regex = new RegExp(`\\b${contracted.replace(/'/g, "'")}\\b`, 'gi');
        r = r.replace(regex, expanded);
      }
      return r;
    }
    case 'casual': {
      let r = text;
      for (const [expanded, contracted] of Object.entries(reverseContractions)) {
        const regex = new RegExp(`\\b${expanded}\\b`, 'gi');
        r = r.replace(regex, contracted);
      }
      return r;
    }
    default:
      return text;
  }
}

// Estimador de human score (0-100)
function estimateHumanScore(text: string): number {
  let score = 50;

  const contractionsFound = (text.match(/\b\w+'\w+\b/g) || []).length;
  score += Math.min(contractionsFound * 2, 15);

  const sentences = text.split(/[.!?]+/).filter(Boolean);
  const avgLen = sentences.reduce((a, s) => a + s.length, 0) / (sentences.length || 1);
  if (avgLen < 80) score += 10;
  else if (avgLen > 150) score -= 10;

  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  const unique = new Set(words);
  const variety = unique.size / (words.length || 1);
  score += (variety - 0.5) * 20;

  const formalWords = ['utilize', 'leverage', 'facilitate', 'optimize', 'maximize', 'streamline', 'implement', 'subsequently', 'furthermore', 'moreover'];
  const formalCount = formalWords.reduce((c, w) => c + (text.toLowerCase().includes(w) ? 1 : 0), 0);
  score -= formalCount * 3;

  const informal = (text.match(/\b(yeah|nope|awesome|cool|super|honestly|seriously|btw|lol|omg|basically|kinda|sorta)\b/gi) || []).length;
  score += informal * 3;

  return Math.max(0, Math.min(100, Math.round(score)));
}

// Função principal
export function humanize(text: string, options: HumanizeOptions): { text: string; score: number } {
  if (!text.trim()) return { text: '', score: 0 };

  let result = text;
  result = applyTone(result, options.tone);
  result = applyStyle(result, options.style);
  result = applyIntensity(result, options.intensity);

  if (options.tone === 'conversational') {
    result = result.replace(/\b(However|Therefore|Moreover|Furthermore|Consequently)\b/g, (m) => m.toLowerCase());
  }

  if (options.tone === 'emotional') {
    result = result.replace(/\./g, '...').replace(/\.\.\.+$/g, '...');
  }

  const score = estimateHumanScore(result);
  return { text: result, score };
}

export const TONES: { value: Tone; label: string; icon: string; desc: string }[] = [
  { value: 'conversational', label: 'Conversational', icon: 'MessageCircle', desc: 'Fala como uma pessoa real numa conversa de café' },
  { value: 'professional', label: 'Professional', icon: 'Briefcase', desc: 'Corporativo, mas acessível e sem jargon excessivo' },
  { value: 'persuasive', label: 'Persuasive', icon: 'Zap', desc: 'Copy que vende, com gatilhos emocionais sutis' },
  { value: 'humorous', label: 'Humorous', icon: 'Laugh', desc: 'Leve, divertida, com metáforas e brincadeiras' },
  { value: 'emotional', label: 'Emotional', icon: 'Heart', desc: 'Profunda, vulnerável, que conecta no coração' },
  { value: 'academic', label: 'Academic', icon: 'GraduationCap', desc: 'Formal, estruturada, com vocabulário elevado' },
  { value: 'journalistic', label: 'Journalistic', icon: 'Newspaper', desc: 'Clara, objetiva, factual' },
  { value: 'creative', label: 'Creative', icon: 'Palette', desc: 'Poética, metafórica, imaginativa' },
  { value: 'technical', label: 'Technical', icon: 'Code', desc: 'Precisa, direta, com terminologia adequada' },
  { value: 'marketing', label: 'Marketing', icon: 'TrendingUp', desc: 'Hype, beneficios, call-to-action' },
  { value: 'casual', label: 'Casual', icon: 'Coffee', desc: 'Descontraída, amigável, gírias leves' },
  { value: 'storytelling', label: 'Storytelling', icon: 'BookOpen', desc: 'Narrativa, gancho, arco dramático' },
  { value: 'analytical', label: 'Analytical', icon: 'BarChart3', desc: 'Baseada em dados, lógica, estrutura' },
];

export const STYLES: { value: WritingStyle; label: string; desc: string }[] = [
  { value: 'formal', label: 'Formal', desc: 'Sem contrações, linguagem completa' },
  { value: 'casual', label: 'Casual', desc: 'Com contrações, linguagem natural' },
  { value: 'creative', label: 'Creative', desc: 'Variações livres e expressivas' },
  { value: 'technical', label: 'Technical', desc: 'Precisa e terminológica' },
  { value: 'marketing', label: 'Marketing', desc: 'Focada em conversão' },
];

export const INTENSITIES: { value: Intensity; label: string; desc: string; color: string }[] = [
  { value: 'light', label: 'Light', desc: 'Toques sutis, pouca mudança', color: '#22c55e' },
  { value: 'medium', label: 'Medium', desc: 'Equilíbrio entre natural e original', color: '#3b82f6' },
  { value: 'aggressive', label: 'Aggressive', desc: 'Mudanças significativas no vocabulário', color: '#f59e0b' },
  { value: 'ninja', label: 'Ninja', desc: 'Loop de 5 passes, máxima transformação', color: '#ef4444' },
];
