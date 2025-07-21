import Iridescence from "@/components/Iridescence";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Iridescence color={[0.48, 0.106, 0.008]} />
      </div>

   <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 min-h-screen">
 

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
    {/* BASIC */}
    <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-slate-400 via-white/20 to-slate-700 transition hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.2)]">
      <div className="rounded-2xl bg-zinc-900/80 text-white p-8 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-center">Sponsor Base</h2>
          <p className="text-sm text-center mb-4">Pacchetto sponsor base</p>
          <p className="text-3xl font-bold text-center mb-6">€200</p>
          <ul className="text-sm space-y-2">
            <li>✔️ Sponsor pagina</li>
            <li>✔️ suca</li>
            <li>✔️ suca</li>
            <li>✔️ suca</li>
            <li>✔️ Supporto via email</li>
          </ul>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">Scegli</button>
        </div>
      </div>
    </div>

    {/* PRO */}
    <div className="relative p-[3px] rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 shadow-[0_0_20px_4px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_6px_rgba(236,72,153,0.7)] transition duration-300 transform hover:scale-[1.02]">
      <div className="rounded-2xl bg-zinc-900/80 text-white p-8 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-center">Pro</h2>
          <p className="text-sm text-center mb-4">Pacchetto sponsor pro</p>
          <p className="text-3xl font-bold text-center mb-6">€500</p>
          <ul className="text-sm space-y-2">
            <li>✔️ Sponsor pagina</li>
            <li>✔️ suca</li>
            <li>✔️ suca</li>
            <li>✔️ suca</li>
          </ul>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">Scegli</button>
        </div>
      </div>
    </div>

    {/* ENTERPRISE */}
    <div className="relative p-[4px] rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-[0_0_25px_4px_rgba(255,165,0,0.5)] hover:shadow-[0_0_30px_6px_rgba(255,165,0,0.7)] transition duration-300">
      <div className="rounded-2xl bg-zinc-900/80 text-white p-8 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-center">Enterprise</h2>
          <p className="text-sm text-center mb-4">Pacchetto sponsor enterprise</p>
          <p className="text-3xl font-bold text-center mb-6">€1000+</p>
          <ul className="text-sm space-y-2">
            <li>✔️ Sponsor pagina</li>
            <li>✔️ suca</li>
            <li>✔️ suca</li>
            <li>✔️ suca</li>
          </ul>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">Contattaci</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
