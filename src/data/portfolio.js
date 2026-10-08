// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the site.
//  Empty strings ("") hide the related link/image automatically.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Kinshuk Narang',
  role: 'GenAI Engineer',
  focus: 'LLM Applications, RAG & AI Agents',
  openTo: ['GenAI Engineer', 'SDE'], // shown in the hero badge
  location: 'Delhi, India',
  email: 'kinshuk120@gmail.com',
  phone: '+91-8743095029',
  linkedin: 'https://www.linkedin.com/in/kinshuk-narang',
  github: 'https://github.com/kinshuk-coder',
  resume: '/resume.pdf', // public/resume.pdf
  heroImage: '/hero-image.jpeg',
  tagline:
    'B.Tech CSE (2026) graduate who builds and ships LLM applications — a hybrid RAG system with a measured evaluation suite, an autonomous coding agent with a hardened Docker sandbox, and apps deployed on FastAPI Cloud, Render and Vercel. Focused on grounded answers, evals and production-style Python backends.',
}

// type: 'work' | 'education'
export const experience = [
  {
    type: 'work',
    role: 'Agentic AI Engineer (Part-time)',
    org: 'Moleculyst',
    location: 'Delhi (Remote)',
    period: 'Oct 2026 — Present',
    bullets: [
      'Building an LLM agent that explores a large database and finds semantically related records.',
      'Adding observability and retrieval evals to prove the agent searches the data correctly, not just plausibly.',
    ],
    tags: ['LLM Agents', 'Retrieval Evals', 'Observability'],
  },
  {
    type: 'work',
    role: 'Internship — DSA & Competitive Programming',
    org: 'Coding Blocks',
    location: '',
    period: 'Sep 2024 — Nov 2024',
    bullets: [
      'Certificate of Internship — Master Data Structures & Algorithms and Competitive Programming using C++.',
    ],
    tags: ['C++', 'DSA', 'Competitive Programming'],
  },
  {
    type: 'education',
    role: 'B.Tech, Computer Science & Engineering',
    org: 'Guru Gobind Singh Indraprastha University (GGSIPU)',
    location: 'New Delhi',
    period: 'Graduated 2026',
    bullets: ['CGPA: 7.5/10  ·  Class XII (CBSE): 88%  ·  Class X (CBSE): 89%'],
    tags: [],
  },
]

export const coursework = [
  'LangChain for LLM Application Development',
  'LangChain: Chat with Your Data',
  'AI Agents in LangGraph',
  'How Transformer LLMs Work',
  'ChatGPT Prompt Engineering for Developers',
  'CS50P: Introduction to Programming with Python (Harvard)',
]

// image: path under public/, e.g. '/projects/rag-assistant.png'
export const projects = [
  {
    title: 'Evaluation-Driven RAG Assistant over FastAPI Docs',
    stack: ['Python', 'FastAPI', 'BGE', 'ChromaDB', 'BM25', 'Groq'],
    metrics: ['95% retrieval hit-rate', '4.95/5 faithfulness', '100% citation validity'],
    bullets: [
      'Hybrid retriever — BGE embeddings + ChromaDB dense search, BM25 keyword search, merged with Reciprocal Rank Fusion — over 85 FastAPI docs chunked into 744 passages.',
      '27-question evaluation suite: 95% retrieval hit-rate, 100% citation validity, 100% refusal accuracy on unanswerable questions with zero false refusals.',
      'LLM-as-judge scores of 4.95/5 faithfulness, 5.00/5 relevance and 4.95/5 completeness.',
      'Streaming FastAPI service (SSE) with response caching and inline source citations, deployed on FastAPI Cloud.',
    ],
    image: '/projects/fastapi-rag-docs.png',
    github: 'https://github.com/kinshuk-coder/rag-fastapi-docs',
    live: 'https://rag-fastapi-docs.fastapicloud.dev/',
  },
  {
    title: 'Autonomous Coding Agent with Sandboxed Execution',
    stack: ['Python', 'Groq API', 'Docker', 'SQLite', 'pytest'],
    metrics: ['60% → 100% review-ready', '15-task benchmark', 'Human approval gate'],
    bullets: [
      'Turns a GitHub issue into a tested patch: context building, planning, patch generation, Docker sandbox test run, retry on test feedback and a human approval gate (never auto-merges).',
      'Hardened sandbox with network isolation, CPU/memory/PID limits, read-only filesystem and timeouts; diffs validated to block path traversal and .git changes.',
      'Found correct patches were rejected before testing (fenced diffs, path prefixes, hunk counts, CRLF); fixing the pipeline raised review-ready tasks from 9/15 to 15/15 (hand-audited).',
      'Every run logged to SQLite for audit — resolution rate, retries and latency.',
    ],
    image: '',
    github: 'https://github.com/kinshuk-coder/autonomous-coding-agent',
    live: '',
  },
  {
    title: 'MindCare — AI Support Assistant',
    stack: ['React', 'Vite', 'FastAPI', 'Pinecone', 'MongoDB Atlas'],
    metrics: ['Long-term semantic memory', '384-dim embeddings', 'Vercel + Render'],
    bullets: [
      'Conversational assistant with long-term semantic memory: past messages embedded (Hugging Face, 384-dim) into Pinecone and retrieved as context for each reply.',
      'Stateless architecture — React frontend on Vercel, FastAPI backend on Render, MongoDB Atlas for chat history.',
    ],
    image: '/projects/mindcare.png',
    github: 'https://github.com/kinshuk-coder/mindcare-backend',
    live: 'https://mindcare-frontend-teal.vercel.app/',
  },
  {
    title: 'Atlas — Multi-Document RAG Chatbot',
    stack: ['Python', 'FastAPI', 'Gemini API', 'TF-IDF'],
    metrics: ['PDF · DOCX · TXT · MD', 'Cited answers', 'Extractive fallback'],
    bullets: [
      'Upload PDF, DOCX (incl. Strict OOXML), TXT and Markdown; extract, chunk and index with TF-IDF; answer across files with cited source chunks.',
      'Optional Gemini-generated answers with an extractive fallback; config managed with .env and dependencies with uv.',
    ],
    image: '/projects/atlas-multi-rag-chatbot.png',
    github: 'https://github.com/kinshuk-coder/multi-document-RAG-chatbot',
    live: 'https://multi-document-rag-chatbot-9375c02e.fastapicloud.dev/',
  },
]

// icon keys map to components in src/components/Skills.jsx (optional — items without one get a dot)
export const skills = [
  {
    group: 'Languages',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'C++', icon: 'cpp' },
    ],
  },
  {
    group: 'GenAI / LLM',
    items: [
      { name: 'RAG', icon: 'rag' },
      { name: 'AI Agents / Agentic Workflows', icon: 'agent' },
      { name: 'LLM Evaluation (LLM-as-judge)' },
      { name: 'Prompt Engineering' },
      { name: 'NLP' },
      { name: 'LangChain', icon: 'langchain' },
      { name: 'Transformers', icon: 'huggingface' },
      { name: 'LLM APIs (Gemini, Mistral, OpenAI, Groq)', icon: 'llm' },
    ],
  },
  {
    group: 'Retrieval',
    items: [
      { name: 'ChromaDB' },
      { name: 'Pinecone' },
      { name: 'BGE & Hugging Face Embeddings', icon: 'huggingface' },
      { name: 'BM25' },
      { name: 'Hybrid Search (RRF)' },
      { name: 'Cross-Encoder Reranking' },
      { name: 'TF-IDF' },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'REST APIs' },
      { name: 'Server-Sent Events (streaming)' },
      { name: 'Response Caching' },
      { name: 'CORS & API Security' },
    ],
  },
  {
    group: 'Data & DevOps',
    items: [
      { name: 'Docker', icon: 'docker' },
      { name: 'MongoDB Atlas', icon: 'mongodb' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'Git / GitHub', icon: 'git' },
      { name: 'pytest', icon: 'pytest' },
      { name: 'uv', icon: 'uv' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Render', icon: 'render' },
      { name: 'FastAPI Cloud', icon: 'fastapi' },
    ],
  },
  {
    group: 'CS Fundamentals',
    items: [
      { name: 'Data Structures & Algorithms', icon: 'dsa' },
      { name: 'OOP', icon: 'oops' },
      { name: 'DBMS & SQL', icon: 'dbms' },
      { name: 'Operating Systems', icon: 'os' },
      { name: 'Computer Networks', icon: 'network' },
      { name: 'SDLC' },
    ],
  },
]

export const achievements = [
  {
    platform: 'CodeChef',
    icon: 'codechef',
    headline: '2★ Coder',
    stats: [
      { value: '1471', label: 'Highest rating' },
      { value: '30', label: 'Rated contests' },
      { value: '14', label: 'Skill certificates' },
    ],
    url: 'https://www.codechef.com/users/tiny_score_97',
  },
  {
    platform: 'LeetCode',
    icon: 'leetcode',
    headline: 'DSA problem solving',
    stats: [{ value: '100+', label: 'Problems solved' }],
    url: 'https://leetcode.com/u/Kinshuk_04/',
  },
]

export const hobbies = [
  { name: 'Chess', icon: 'chess', blurb: 'Thinking a few moves ahead — on the board and in code.' },
  { name: 'Gaming', icon: 'gaming', blurb: 'Strategy, story and the occasional late-night ranked grind.' },
  { name: 'Gym', icon: 'gym', blurb: 'Lifting and staying consistent — progressive overload, in and out of the gym.' },
  { name: 'Football', icon: 'football', blurb: 'Playing, watching, and arguing about tactics.' },
]
