export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Cloud Backup Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Auto-backup before your cloud account gets suspended
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          CloudGuard monitors your AWS, GCP, and Azure account health signals 24/7 and automatically triggers full data backups the moment suspension risk is detected — before it&apos;s too late.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Protecting Your Data — $39/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-4">Cancel anytime. Setup in under 5 minutes.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { title: 'Multi-Cloud Monitoring', desc: 'AWS, GCP, Azure account health tracked in real time.' },
          { title: 'Instant Backup Trigger', desc: 'Backups fire automatically when risk signals appear.' },
          { title: 'Webhook Alerts', desc: 'Get notified via Slack, email, or custom webhooks.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Up to 10 cloud accounts',
              'Continuous health monitoring',
              'Automated backup on risk detection',
              'Multi-cloud: AWS, GCP, Azure',
              'Webhook & email alerts',
              'Backup history & audit logs',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does CloudGuard detect suspension risk?',
              a: 'We poll your cloud provider APIs for billing anomalies, policy violations, and account health flags — the same signals providers use before suspending accounts.',
            },
            {
              q: 'Where are my backups stored?',
              a: 'Backups are sent to your own storage bucket (S3, GCS, or Azure Blob). We never store your data — you stay in full control.',
            },
            {
              q: 'What happens if I cancel?',
              a: 'Cancel anytime from your dashboard. Monitoring stops immediately and your data remains in your own storage, untouched.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} CloudGuard Backup. All rights reserved.
      </footer>
    </main>
  )
}
