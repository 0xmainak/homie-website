import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Homie Bot",
  description: "Terms of Service for Homie Bot Discord bot",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#C026D3]">Terms of Service</h1>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-lg mb-6">Last updated: June 6, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using Homie Bot, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the bot.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p>Permission is granted to temporarily use Homie Bot for personal, non-commercial use only. This is the grant of a license, not a transfer of title.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Restrictions</h2>
          <p>You may not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to reverse engineer any software contained in Homie Bot</li>
            <li>Remove any copyright or other proprietary notations</li>
            <li>Transfer the materials to another person</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Disclaimer</h2>
          <p>Homie Bot's materials are provided 'as is'. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitations</h2>
          <p>In no event shall Homie Bot or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Homie Bot.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Revisions</h2>
          <p>We may update these terms of service at any time without notice. By using Homie Bot you are agreeing to be bound by the then current version of these terms of service.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
          <p>If you have any questions about these Terms of Service, please contact us.</p>
        </section>
      </div>
    </div>
  )
}