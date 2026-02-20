import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">

      {/* 背景装飾 */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-70"
          style={{ background: "radial-gradient(circle, #008080 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-60 -right-40 w-[700px] h-[700px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, #008080 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <span className="text-xl font-bold tracking-tight text-gray-900">
          AI<span style={{ color: "#008080" }}>見積もり</span>
        </span>
      </header>

      {/* Hero */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">

        {/* タグライン */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-2xl border text-sm font-medium"
            style={{
              borderColor: "#00808044",
              backgroundColor: "#00808010",
              color: "#008080",
              boxShadow: "0 2px 16px #00808018",
            }}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0 animate-pulse"
              style={{ backgroundColor: "#008080" }}
            />
            <span>AIをフル活用したチームがあなたのDXをサポートします</span>
          </div>
        </div>

        {/* 見出し */}
        <h1 className="text-6xl sm:text-7xl font-extrabold leading-[1.08] tracking-tight text-gray-900 mb-6 max-w-3xl">
          今までの
          <span
            className="relative inline-block"
            style={{ color: "#008080" }}
          >
            1/2
          </span>
          で
          <br />
          ITシステムを構築
        </h1>

        {/* サブテキスト */}
        <p className="text-lg text-gray-500 max-w-md leading-relaxed mb-12">
          要件を入力するだけで、AIが工数・金額を自動算出。
          <br />
          見積もりをその場でご覧いただけます。
        </p>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/estimate"
            className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-full text-base font-bold transition-all duration-300"
            style={{
              backgroundColor: "#008080",
              color: "#ffffff",
              boxShadow: "0 4px 24px #00808055",
            }}
          >
            今すぐ無料で見積もり
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-4">
        <p className="text-xs text-gray-300">© 2026 AI見積もり</p>
      </footer>
    </div>
  );
}
