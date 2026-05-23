import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CloudGuard Backup — Auto-backup before account suspensions',
  description: 'Monitors cloud provider account health and automatically backs up your data when suspension risk is detected. Never lose data to unexpected account suspensions again.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="33dc577e-5bfc-4114-8bcc-7cd880f1f970"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
