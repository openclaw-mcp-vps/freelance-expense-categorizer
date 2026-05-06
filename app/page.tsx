export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Tax Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing Which Expenses{" "}
          <span className="text-[#58a6ff]">Are Deductible</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          FreelanceExpense uses AI to automatically categorize your business expenses from bank feeds and receipts, then generates tax-ready reports that maximize your deductions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Saving on Taxes — $14/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {["AI Categorization", "Bank Feed Sync", "Receipt Scanning", "Tax Reports", "Deduction Optimizer", "IRS-Ready Export"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
          <div className="text-5xl font-bold text-white mb-1">$14<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] mb-6 text-sm">Everything you need to stay tax-ready year-round</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited expense categorization",
              "Bank feed integration (Plaid)",
              "AI receipt scanning & parsing",
              "Quarterly & annual tax reports",
              "Deduction optimization suggestions",
              "IRS Schedule C export",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5 font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Free
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">7-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI categorize my expenses?",
              a: "Our AI uses OpenAI's models to analyze each transaction's merchant name, amount, and description, then maps it to the correct IRS tax category (e.g., home office, travel, software subscriptions). It learns from your corrections over time."
            },
            {
              q: "Is my bank data secure?",
              a: "Yes. We use Plaid, the industry-standard bank integration trusted by thousands of apps. We never store your banking credentials — only read-only transaction data is accessed, and all data is encrypted at rest and in transit."
            },
            {
              q: "Can I export reports for my accountant?",
              a: "Absolutely. FreelanceExpense generates IRS Schedule C-ready reports in PDF and CSV formats. You can export by quarter or year, filtered by category, making it easy to hand off to your CPA or file yourself."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-sm text-[#6e7681]">
        <p>© {new Date().getFullYear()} FreelanceExpense. Built for independent professionals.</p>
      </footer>
    </main>
  );
}
