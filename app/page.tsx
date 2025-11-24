import type { Metadata } from "next";
import Image from "next/image";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Video,
} from "lucide-react";

export const metadata: Metadata = {
  title: "anjana784 — 3D Web Engineer",
  description: "Building digital worlds with math, shaders, and code.",
};

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#0B0B0C] text-[#A7A7AA] selection:bg-[#D4A42E] selection:text-[#0B0B0C] font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-24">
        {/* Hero Section */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#26272B] shrink-0">
              <Image
                src="/anjana784-logo.png"
                alt="anjana784 Avatar"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#E6E6E7] tracking-tight">
              anjana784
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl text-[#D4A42E] font-medium">
            Building digital worlds with math, shaders, and code.
          </h2>
          <div className="max-w-xl text-lg leading-relaxed text-[#E6E6E7]">
            <p className="mb-4">
              I specialize in <span className="text-[#5BD6FF]">Three.js</span>,{" "}
              <span className="text-[#5BD6FF]">WebGL</span>, and{" "}
              <span className="text-[#5BD6FF]">WebGPU</span>.
            </p>
            <p>
              I craft immersive web-based realities powered by computer
              graphics, 3D math, and real-time rendering.
            </p>
          </div>
        </section>

        {/* About / Identity Pitch */}
        <section className="flex flex-col gap-6">
          <h3 className="text-sm font-mono text-[#77777A] uppercase tracking-widest border-b border-[#1F2023] pb-2 mb-2">
            Identity Trace: anjana784_
          </h3>
          <div className="space-y-4 text-lg">
            <p>
              I build alternative digital realities using my brain and a
              computer. My work combines code, mathematics, and imagination to
              create 3D interactive experiences on the web.
            </p>
            <p>I operate as a 3D Web Engineer focused on:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#E6E6E7] pl-4 border-l-2 border-[#D4A42E]/30">
              <li>— Three.js</li>
              <li>— WebGL</li>
              <li>— WebGPU</li>
              <li>— GLSL shaders</li>
              <li>— Computer graphics</li>
              <li>— Real-time rendering</li>
              <li>— 3D math and simulation</li>
            </ul>
            <p className="text-[#A7A7AA] italic mt-4">
              I’m currently constructing an amazing, fully immersive portfolio
              experience. Until then, this single-page version holds my domain.
            </p>
          </div>
        </section>

        {/* Blog */}
        <section className="flex flex-col gap-6">
          <h3 className="text-sm font-mono text-[#77777A] uppercase tracking-widest border-b border-[#1F2023] pb-2 mb-2">
            Explore My Mindspace_
          </h3>
          <p className="text-lg">
            While the main portal is under construction, you can explore my
            thoughts, research, and computer graphics explanations here:
          </p>
          <a
            href="https://blog.anjana784.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#D4A42E] hover:text-[#E0B84A] transition-colors text-lg font-medium group"
          >
            blog.anjana784.dev
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </section>

        {/* Contact */}
        <section className="flex flex-col gap-6">
          <h3 className="text-sm font-mono text-[#77777A] uppercase tracking-widest border-b border-[#1F2023] pb-2 mb-2">
            Connect with Me_
          </h3>

          <div className="flex flex-col gap-2">
            <p className="text-[#E6E6E7]">
              Email:{" "}
              <a
                href="mailto:hello@anjana784.dev"
                className="text-[#D4A42E] hover:underline"
              >
                hello@anjana784.dev
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {[
              {
                name: "Facebook",
                url: "https://facebook.com/anjana784",
                icon: Facebook,
              },
              {
                name: "Instagram",
                url: "https://instagram.com/anjana.784",
                icon: Instagram,
              },
              {
                name: "GitHub",
                url: "https://github.com/anjana784",
                icon: Github,
              },
              {
                name: "TikTok",
                url: "https://tiktok.com/@anjana784",
                icon: Video,
              },
              {
                name: "LinkedIn",
                url: "https://linkedin.com/in/anjana784",
                icon: Linkedin,
              },
              {
                name: "X (Twitter)",
                url: "https://twitter.com/anjana784",
                icon: Twitter,
              },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#151617] hover:bg-[#1F2023] border border-[#26272B] rounded text-[#A7A7AA] hover:text-[#E6E6E7] transition-all text-sm flex items-center gap-2"
              >
                <link.icon size={18} />
                {link.name}
              </a>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <footer className="pt-12 mt-12 border-t border-[#1F2023] text-center">
          <p className="text-[#8B5CF6] font-mono text-sm animate-pulse">
            The full portfolio warp-drive is initializing…
          </p>
          <p className="text-[#77777A] text-sm mt-2">
            Return soon to experience the complete immersive interface.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default HomePage;
