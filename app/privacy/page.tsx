import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — NaijaRights",
  description: "Privacy policy for the NaijaRights app.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{
        fontFamily: "'Fraunces', Georgia, serif", fontSize: 20, fontWeight: 500,
        color: "var(--ink)", letterSpacing: -0.3, marginBottom: 10,
      }}>
        {title}
      </div>
      {children}
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65 }}>
      {children}
    </div>
  );
}

function Bullet({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "8px 0", paddingLeft: 20 }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 4 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  return (
    <div style={{
      minHeight: "100dvh", background: "var(--bg)",
      fontFamily: "'Instrument Sans', system-ui, sans-serif",
    }}>
      {/* Header */}
      <div style={{
        padding: "14px 18px", display: "flex", alignItems: "center", gap: 10,
        borderBottom: "1px solid var(--line)", background: "var(--bg)",
        position: "sticky", top: 0, zIndex: 10,
      }}>
        <Link href="/" style={{
          width: 40, height: 40, borderRadius: 20, border: "none",
          background: "transparent", display: "flex", alignItems: "center",
          justifyContent: "center", color: "var(--ink)", textDecoration: "none", flexShrink: 0,
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
        </Link>
        <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 500, color: "var(--ink)", letterSpacing: -0.3 }}>
          Privacy Policy
        </div>
      </div>

      <main style={{ maxWidth: 680, margin: "0 auto", padding: "24px 20px 80px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{
            margin: 0, fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 32, fontWeight: 500, color: "var(--ink)", letterSpacing: -0.7, lineHeight: 1.05,
          }}>
            Privacy<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Policy</span>
          </h1>
          <div style={{ marginTop: 8, fontSize: 13, color: "var(--ink-muted)" }}>
            NaijaRights · Last updated April 2026
          </div>
        </div>

        {/* Intro card */}
        <div style={{
          background: "var(--surface)", border: "1px solid var(--line)",
          borderRadius: 16, padding: "16px", marginBottom: 28,
          fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.6,
        }}>
          NaijaRights is a free legal-education tool that helps Nigerians understand their rights under Nigerian law. This policy explains what information we collect, how we use it, and your choices.
        </div>

        <Section title="1. Information We Collect">
          <Body>We collect minimal, anonymised data solely to understand how the app is used so we can improve it.</Body>
          <div style={{ marginTop: 12, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "10px 14px", borderBottom: "1px solid var(--line)", fontWeight: 600, fontSize: 13, color: "var(--ink)" }}>
              Analytics data (PostHog)
            </div>
            <div style={{ padding: "12px 14px" }}>
              <Body>We use PostHog to collect anonymous usage analytics. This includes:</Body>
              <Bullet items={[
                "Pages and topics viewed",
                "Language selected",
                "App session duration",
                "Device type and operating system version",
                "General geographic region (country level — not precise location)",
              ]} />
              <Body>We explicitly disable IP address collection. No personally identifiable information is collected through analytics.</Body>
            </div>
          </div>
          <div style={{ marginTop: 12, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "10px 14px", borderBottom: "1px solid var(--line)", fontWeight: 600, fontSize: 13, color: "var(--ink)" }}>
              Information you do NOT provide to us
            </div>
            <div style={{ padding: "12px 14px" }}>
              <Body>NaijaRights does not ask for, collect, or store:</Body>
              <Bullet items={[
                "Your name, email address, or phone number",
                "Any account or login credentials",
                "Your precise location",
                "Any personal legal information you may read about in the app",
              ]} />
            </div>
          </div>
        </Section>

        <Section title="2. How We Use Your Information">
          <Body>The anonymised analytics data is used only to:</Body>
          <Bullet items={[
            "Understand which sections and topics are most useful",
            "Identify and fix bugs or crashes",
            "Decide which languages and topics to expand",
          ]} />
          <Body>We do not sell, rent, or share your data with any third party for marketing purposes.</Body>
        </Section>

        <Section title="3. Push Notifications">
          <Body>
            NaijaRights may send you push notifications to inform you of important legal updates, new rights topics, or app announcements.
            Notifications are delivered via <strong>Firebase Cloud Messaging (FCM)</strong> by Google.
          </Body>
          <Bullet items={[
            "You will be asked for permission before any notifications are sent",
            "You can withdraw permission at any time in your device's notification settings",
            "We do not use notifications to collect personal data or track your activity",
            "FCM may receive a device token (a random identifier) to route notifications to your device — this token is not linked to your identity",
          ]} />
          <Body>
            Google&apos;s privacy policy for Firebase is available at firebase.google.com/support/privacy.
          </Body>
        </Section>

        <Section title="4. Third-Party Services">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { name: "PostHog", desc: "Anonymous usage analytics.", link: "posthog.com/privacy" },
              { name: "Firebase Cloud Messaging (Google)", desc: "Push notification delivery.", link: "policies.google.com/privacy" },
            ].map((svc) => (
              <div key={svc.name} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 12, padding: "12px 14px" }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: "var(--ink)", marginBottom: 2 }}>{svc.name}</div>
                <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>{svc.desc} Privacy policy at {svc.link}.</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="5. Data Retention">
          <Body>
            Anonymised analytics events are retained for up to 12 months, after which they are automatically deleted.
            FCM device tokens are retained only as long as notifications are enabled and are removed when you uninstall the app or revoke permission.
          </Body>
        </Section>

        <Section title="6. Children's Privacy">
          <Body>
            NaijaRights does not knowingly collect any information from children under the age of 13.
            The app contains general legal education content appropriate for all ages.
          </Body>
        </Section>

        <Section title="7. Changes to This Policy">
          <Body>
            We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date at the top.
            Continued use of the app after changes constitutes acceptance of the updated policy.
          </Body>
        </Section>

        <Section title="8. Contact">
          <Body>
            If you have any questions about this Privacy Policy, please open an issue on our GitHub repository at github.com/AfroTechBoss/NaijaRights.
          </Body>
        </Section>

        {/* Disclaimer */}
        <div style={{
          marginTop: 8, padding: "14px 16px", borderRadius: 14,
          background: "var(--surface)", border: "1px solid var(--line)",
          fontSize: 12, color: "var(--ink-muted)", lineHeight: 1.55,
        }}>
          NaijaRights provides general legal education only, not legal advice. We are not affiliated with any Nigerian government agency.
          Always consult a qualified Nigerian lawyer for specific legal issues.
        </div>
      </main>
    </div>
  );
}
