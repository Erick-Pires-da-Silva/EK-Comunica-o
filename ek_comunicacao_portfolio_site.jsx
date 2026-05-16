import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Menu, X, Upload, Plus, Eye, Newspaper, Camera, Video, PenTool, Mic2, ArrowUpRight, Sparkles, Layers, LayoutDashboard, Globe2 } from "lucide-react";

const categories = ["Todos", "Jornalismo", "Design", "Fotografia", "Vídeo", "Podcast", "Artigos"];

const works = [
  {
    title: "Reportagem Especial: Cidade em Movimento",
    type: "Jornalismo",
    format: "Texto + Foto",
    desc: "Matéria aprofundada sobre mobilidade urbana, comportamento social e transformação das cidades.",
    year: "2026",
    featured: true,
  },
  {
    title: "Identidade Visual — EK Comunicação",
    type: "Design",
    format: "Branding",
    desc: "Sistema visual com monograma, paleta verde/preto, aplicações digitais e linguagem premium.",
    year: "2026",
    featured: true,
  },
  {
    title: "Ensaio Fotográfico Editorial",
    type: "Fotografia",
    format: "Galeria",
    desc: "Série visual com estética documental, luz dramática e narrativa urbana.",
    year: "2025",
    featured: false,
  },
  {
    title: "Vídeo Institucional — Comunicação Estratégica",
    type: "Vídeo",
    format: "Motion + Roteiro",
    desc: "Produção audiovisual curta com foco em posicionamento, autoridade e presença digital.",
    year: "2025",
    featured: false,
  },
  {
    title: "Podcast Piloto — Bastidores da Comunicação",
    type: "Podcast",
    format: "Áudio + Vídeo",
    desc: "Episódio experimental sobre jornalismo, imagem pública, design e narrativa de marca.",
    year: "2026",
    featured: true,
  },
  {
    title: "Artigo: A estética da credibilidade",
    type: "Artigos",
    format: "Opinião",
    desc: "Texto autoral sobre como design, linguagem e narrativa constroem percepção profissional.",
    year: "2026",
    featured: false,
  },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-11 w-14">
        <span className="absolute left-0 top-2 h-1.5 w-8 rounded-full bg-gradient-to-r from-emerald-900 to-emerald-300" />
        <span className="absolute left-0 top-5 h-1.5 w-8 rounded-full bg-gradient-to-r from-emerald-950 to-emerald-500" />
        <span className="absolute left-0 top-8 h-1.5 w-9 rounded-full bg-gradient-to-r from-emerald-950 to-emerald-400" />
        <span className="absolute left-7 top-4 h-1.5 w-8 origin-left rotate-[-42deg] rounded-full bg-gradient-to-r from-emerald-500 to-white" />
        <span className="absolute left-7 top-7 h-1.5 w-8 origin-left rotate-[42deg] rounded-full bg-white" />
      </div>
      <div>
        <p className="tracking-[0.35em] text-sm font-semibold text-white">EK</p>
        <p className="text-[10px] uppercase tracking-[0.32em] text-emerald-300">Comunicação</p>
      </div>
    </div>
  );
}

function FloatingOrb() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ rotateX: [0, 18, 0], rotateY: [0, -24, 0], y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-8 top-28 h-72 w-72 rounded-[3rem] border border-emerald-400/30 bg-gradient-to-br from-emerald-400/30 via-black to-white/5 shadow-[0_0_90px_rgba(16,185,129,0.35)] backdrop-blur-xl md:right-24 md:h-96 md:w-96"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-8 rounded-[2rem] border border-white/10" />
        <div className="absolute bottom-12 left-12 right-12 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-white" />
        <div className="absolute left-10 top-14 h-24 w-24 rounded-full border border-emerald-300/30" />
      </motion.div>
    </div>
  );
}

function Header({ current, setCurrent }) {
  const [open, setOpen] = useState(false);
  const links = ["Início", "Portfólio", "Jornalismo", "Design", "Podcast", "Sobre", "Admin"];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button onClick={() => setCurrent("Início")} className="text-left"><LogoMark /></button>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <button key={link} onClick={() => setCurrent(link)} className={`text-xs uppercase tracking-[0.22em] transition ${current === link ? "text-emerald-300" : "text-zinc-400 hover:text-white"}`}>{link}</button>
          ))}
        </nav>
        <button className="rounded-full border border-emerald-400/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-200 hover:bg-emerald-400/10" onClick={() => setCurrent("Contato")}>Contato</button>
        <button className="lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-4 lg:hidden">
          {links.map((link) => <button key={link} onClick={() => { setCurrent(link); setOpen(false); }} className="block py-3 text-sm uppercase tracking-[0.18em] text-zinc-300">{link}</button>)}
        </div>
      )}
    </header>
  );
}

function Hero({ setCurrent }) {
  return (
    <section className="relative min-h-[82vh] overflow-hidden px-5 py-20">
      <FloatingOrb />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-200"><Sparkles size={14}/> Jornalismo · Design · Estratégia</div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">Portfólio autoral para conteúdo, imagem e comunicação estratégica.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">Um hub profissional para reunir reportagens, artigos, fotografias, vídeos, identidades visuais e futuros episódios de podcast da EK Comunicação.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button onClick={() => setCurrent("Portfólio")} className="rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black">Ver trabalhos</button>
            <button onClick={() => setCurrent("Admin")} className="rounded-full border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.18em] text-white hover:border-emerald-300/60">Painel admin</button>
          </div>
        </div>
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }} className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-5 shadow-2xl backdrop-blur-xl">
          <div className="aspect-[4/5] rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,.35),transparent_35%),linear-gradient(135deg,#020202,#151515)] p-6">
            <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-emerald-300"><span>Featured</span><span>2026</span></div>
            <div className="mt-24"><LogoMark /></div>
            <h2 className="mt-16 text-3xl font-semibold text-white">Bastidores da Comunicação</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-300">Espaço editorial para análises, entrevistas, narrativas visuais e projetos criativos.</p>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs text-zinc-300">
              <div className="rounded-2xl border border-white/10 p-4"><Newspaper className="mx-auto mb-2 text-emerald-300"/> Textos</div>
              <div className="rounded-2xl border border-white/10 p-4"><Camera className="mx-auto mb-2 text-emerald-300"/> Fotos</div>
              <div className="rounded-2xl border border-white/10 p-4"><Video className="mx-auto mb-2 text-emerald-300"/> Vídeos</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorkCard({ item }) {
  return (
    <motion.article whileHover={{ y: -8, rotateX: 2, rotateY: -2 }} className="group rounded-[2rem] border border-white/10 bg-zinc-950/70 p-5 transition hover:border-emerald-300/50 hover:shadow-[0_0_60px_rgba(16,185,129,0.12)]">
      <div className="mb-5 aspect-video rounded-[1.5rem] bg-[radial-gradient(circle_at_25%_25%,rgba(16,185,129,.38),transparent_30%),linear-gradient(135deg,#0b0b0b,#1f1f1f)] p-5">
        <div className="flex h-full flex-col justify-between">
          <span className="w-fit rounded-full border border-emerald-300/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-200">{item.type}</span>
          <ArrowUpRight className="self-end text-white/70 transition group-hover:text-emerald-300" />
        </div>
      </div>
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-500"><span>{item.format}</span><span>{item.year}</span></div>
      <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{item.desc}</p>
    </motion.article>
  );
}

function Portfolio({ defaultFilter = "Todos" }) {
  const [filter, setFilter] = useState(defaultFilter);
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => works.filter((w) => (filter === "Todos" || w.type === filter) && w.title.toLowerCase().includes(query.toLowerCase())), [filter, query]);
  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Portfólio</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-6xl">Trabalhos publicados</h1>
          <p className="mt-4 max-w-2xl text-zinc-400">Uma vitrine no estilo Behance, mas organizada para comportar jornalismo, design, foto, vídeo, artigos e podcast.</p>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-zinc-400"><Search size={18}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar projeto" className="bg-transparent outline-none" /></div>
      </div>
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((cat) => <button key={cat} onClick={() => setFilter(cat)} className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] ${filter === cat ? "bg-emerald-400 text-black" : "border border-white/10 text-zinc-300"}`}>{cat}</button>)}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((item) => <WorkCard key={item.title} item={item} />)}</div>
    </main>
  );
}

function About() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Sobre</p>
      <h1 className="mt-3 text-5xl font-semibold text-white">EK Comunicação</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-2xl font-semibold text-white">Proposta</h2>
          <p className="mt-4 leading-8 text-zinc-300">A EK Comunicação nasce como uma marca pessoal com estrutura profissional: um espaço para apresentar projetos de jornalismo, design gráfico, conteúdo estratégico e, no futuro, um canal ou podcast.</p>
          <p className="mt-4 leading-8 text-zinc-300">A identidade visual combina precisão editorial, estética premium e presença digital contemporânea.</p>
        </div>
        <div className="rounded-[2rem] border border-emerald-300/20 bg-emerald-400/5 p-8">
          <h2 className="text-2xl font-semibold text-white">Pilares editoriais</h2>
          <ul className="mt-4 space-y-4 text-zinc-300">
            <li>• Jornalismo, apuração e narrativa.</li>
            <li>• Design, identidade visual e percepção de marca.</li>
            <li>• Conteúdo audiovisual, entrevistas e podcast.</li>
            <li>• Comunicação estratégica para marcas e profissionais.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

function Admin() {
  const [published, setPublished] = useState(false);
  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <div className="mb-10 flex items-center justify-between gap-5">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Painel administrativo</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-6xl">Gerencie seus materiais</h1>
        </div>
        <button onClick={() => setPublished(!published)} className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black"><Globe2 className="mr-2 inline" size={16}/> {published ? "Publicado" : "Publicar"}</button>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-[2rem] border border-white/10 bg-zinc-950 p-6">
          <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white"><LayoutDashboard className="text-emerald-300"/> Menu</h2>
          {["Novo material", "Artigos", "Projetos de design", "Galerias", "Vídeos", "Podcast", "Configurações"].map((x) => <button key={x} className="mb-2 block w-full rounded-2xl px-4 py-3 text-left text-zinc-300 hover:bg-white/5 hover:text-emerald-300">{x}</button>)}
        </aside>
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-white"><Plus className="text-emerald-300"/> Cadastrar novo trabalho</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input placeholder="Título do projeto" className="rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-emerald-300" />
            <select className="rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-emerald-300"><option>Categoria</option><option>Jornalismo</option><option>Design</option><option>Fotografia</option><option>Vídeo</option><option>Podcast</option></select>
            <input placeholder="Link do vídeo, áudio ou publicação" className="rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-emerald-300 md:col-span-2" />
            <textarea placeholder="Descrição / texto do material" rows={7} className="rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-emerald-300 md:col-span-2" />
          </div>
          <div className="mt-5 rounded-[2rem] border border-dashed border-emerald-300/30 bg-emerald-400/5 p-8 text-center">
            <Upload className="mx-auto mb-3 text-emerald-300" />
            <p className="text-white">Arraste arquivos ou clique para subir imagens, PDFs, vídeos e capas.</p>
            <p className="mt-2 text-sm text-zinc-500">No projeto real, esta área seria conectada a um CMS, banco de dados e armazenamento.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full border border-white/15 px-5 py-3 text-sm uppercase tracking-[0.16em] text-white"><Eye className="mr-2 inline" size={16}/> Pré-visualizar</button>
            <button className="rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black">Salvar e publicar</button>
          </div>
        </section>
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Contato</p>
      <h1 className="mt-3 text-5xl font-semibold text-white">Vamos construir uma narrativa?</h1>
      <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <input placeholder="Nome" className="rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-emerald-300" />
          <input placeholder="E-mail" className="rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-emerald-300" />
          <textarea placeholder="Mensagem" rows={7} className="rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-emerald-300 md:col-span-2" />
        </div>
        <button className="mt-5 rounded-full bg-emerald-400 px-6 py-3 font-semibold uppercase tracking-[0.16em] text-black">Enviar</button>
      </div>
    </main>
  );
}

export default function App() {
  const [current, setCurrent] = useState("Início");
  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-emerald-300 selection:text-black">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,.16),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,.08),transparent_25%),linear-gradient(180deg,#000,#070707)]" />
      <Header current={current} setCurrent={setCurrent} />
      {current === "Início" && <><Hero setCurrent={setCurrent} /><Portfolio defaultFilter="Todos" /></>}
      {current === "Portfólio" && <Portfolio />}
      {current === "Jornalismo" && <Portfolio defaultFilter="Jornalismo" />}
      {current === "Design" && <Portfolio defaultFilter="Design" />}
      {current === "Podcast" && <Portfolio defaultFilter="Podcast" />}
      {current === "Sobre" && <About />}
      {current === "Admin" && <Admin />}
      {current === "Contato" && <Contact />}
      <footer className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 py-8 text-sm text-zinc-500">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <LogoMark />
          <p className="uppercase tracking-[0.25em]">Jornalismo · Design · Estratégia · Conteúdo</p>
        </div>
      </footer>
    </div>
  );
}
