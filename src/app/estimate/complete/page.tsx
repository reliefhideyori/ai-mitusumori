import Link from "next/link";

export default function CompletePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-lg font-bold tracking-tight hover:opacity-70 transition-opacity">
            AI<span style={{ color: "#008080" }}>見積もり</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm max-w-md w-full text-center">
          {/* アイコン */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ backgroundColor: "#008080", boxShadow: "0 4px 24px #00808044" }}
          >
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            送信が完了しました
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            ご入力いただいた内容をもとに、AIが見積もりを作成しています。
            数分以内にご登録のメールアドレスへお送りします。
          </p>

          {/* タイムライン */}
          <div className="rounded-2xl p-5 text-left space-y-4 mb-8 border border-gray-100 bg-gray-50">
            {[
              { done: true,  label: "フォームの送信完了" },
              { done: true,  label: "AIによる見積もり生成中..." },
              { done: false, label: "メールにてお届け（数分以内）" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: item.done ? "#008080" : "#e2e8f0",
                    boxShadow: item.done ? "0 0 8px #00808044" : "none",
                  }}
                >
                  {item.done && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`text-sm ${item.done ? "text-gray-800 font-medium" : "text-gray-400"}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 mb-8">
            ※ メールが届かない場合は迷惑メールフォルダをご確認ください。
          </p>

          <Link
            href="/"
            className="inline-block w-full text-sm font-semibold py-3.5 rounded-full transition-all duration-200 text-white"
            style={{ backgroundColor: "#008080", boxShadow: "0 4px 16px #00808044" }}
          >
            トップに戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
