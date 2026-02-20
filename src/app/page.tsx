import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#030f0f]">

      {/* ── 背景レイヤー ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* メイングロー */}
        <div
          className="absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,128,128,0.35) 0%, transparent 65%)" }}
        />
        <div
          className="absolute -bottom-80 -right-60 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,128,128,0.2) 0%, transparent 65%)" }}
        />
        {/* サブグロー */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(0,128,128,0.08) 0%, transparent 70%)" }}
        />
        {/* ドットグリッド */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #008080 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* ノイズライン */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(0,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "100% 80px",
          }}
        />
      </div>

      {/* ── Header ── */}
      <header className="relative z-10 flex items-center justify-between px-8 py-5">
        <span className="text-lg font-bold tracking-tight text-white">
          AI<span style={{ color: "#2dd4bf" }}>見積もり</span>
        </span>
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
          style={{ backgroundColor: "rgba(0,128,128,0.2)", border: "1px solid rgba(0,128,128,0.4)", color: "#5eead4" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          AI稼働中
        </div>
      </header>

      {/* ── Hero ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">

        {/* AIバッジ */}
        <div className="mb-6 flex items-center gap-4">
          <div
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-semibold"
            style={{
              background: "linear-gradient(135deg, rgba(0,128,128,0.3), rgba(0,200,180,0.15))",
              border: "1px solid rgba(0,128,128,0.5)",
              color: "#5eead4",
              boxShadow: "0 0 20px rgba(0,128,128,0.2)",
            }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L19 6L14.74 10.74L21 12L14.74 13.26L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.26L3 12L9.26 10.74L5 6L10.91 8.26L12 2Z"/>
            </svg>
            AIをフル活用したチームがあなたのDXをサポートします
          </div>
        </div>

        {/* メインヘッドライン */}
        <h1 className="font-extrabold leading-[1.1] tracking-tight mb-5 max-w-2xl">
          <span className="block text-4xl sm:text-5xl text-white/80 mb-1">今までの</span>
          <span
            className="block text-6xl sm:text-8xl"
            style={{
              background: "linear-gradient(135deg, #2dd4bf 0%, #008080 40%, #00ffcc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(0,200,180,0.4))",
            }}
          >
            1/2
          </span>
          <span className="block text-4xl sm:text-5xl text-white/80 mt-1">でITシステムを構築</span>
        </h1>

        {/* サブテキスト */}
        <p className="text-sm sm:text-base text-white/50 max-w-sm leading-relaxed mb-8">
          要件を入力するだけで、AIが工数・金額を自動算出。<br />
          見積もりをその場でご覧いただけます。
        </p>

        {/* 特徴ピル */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { icon: "⚡", text: "AI自動算出" },
            { icon: "💰", text: "コスト最適化" },
            { icon: "📩", text: "即時メール送信" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* CTAボタン */}
        <Link
          href="/estimate"
          className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-bold text-white transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #008080, #00a896)",
            boxShadow: "0 4px 30px rgba(0,128,128,0.5), 0 0 60px rgba(0,128,128,0.15)",
          }}
        >
          <svg className="w-4 h-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L19 6L14.74 10.74L21 12L14.74 13.26L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.26L3 12L9.26 10.74L5 6L10.91 8.26L12 2Z"/>
          </svg>
          今すぐ無料で見積もり
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 text-center py-4">
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>© 2026 AI見積もり</p>
      </footer>

    </div>
  );
}
