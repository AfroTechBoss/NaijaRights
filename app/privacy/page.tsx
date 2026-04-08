export const metadata = {
  title: "Privacy Policy — NaijaRights",
  description: "Privacy policy for the NaijaRights app.",
};

export default function PrivacyPolicy() {
  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px 80px", fontFamily: "Georgia, serif", color: "#1a1a1a", lineHeight: 1.8 }}>
      <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "4px", fontFamily: "system-ui, sans-serif" }}>Privacy Policy</h1>
      <p style={{ fontSize: "14px", color: "#666", marginBottom: "40px" }}>NaijaRights &nbsp;·&nbsp; Last updated: April 2026</p>

      <p>NaijaRights (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the app&rdquo;) is a free legal-education tool that helps Nigerians understand their rights under Nigerian law. This Privacy Policy explains what information we collect, how we use it, and your choices.</p>

      <h2 style={h2}>1. Information We Collect</h2>
      <p>We collect minimal, anonymised data solely to understand how the app is used so we can improve it.</p>
      <h3 style={h3}>Analytics data (PostHog)</h3>
      <p>We use <strong>PostHog</strong> (posthog.com) to collect anonymous usage analytics. This includes:</p>
      <ul style={ul}>
        <li>Pages and topics viewed</li>
        <li>Language selected</li>
        <li>App session duration</li>
        <li>Device type and operating system version</li>
        <li>General geographic region (country level — we do <strong>not</strong> collect precise location)</li>
      </ul>
      <p>We explicitly disable IP address collection. No personally identifiable information is collected through analytics.</p>

      <h3 style={h3}>Information you do NOT provide to us</h3>
      <p>NaijaRights does not ask for, collect, or store:</p>
      <ul style={ul}>
        <li>Your name, email address, or phone number</li>
        <li>Any account or login credentials</li>
        <li>Your precise location</li>
        <li>Any personal legal information you may read about in the app</li>
      </ul>

      <h2 style={h2}>2. How We Use Your Information</h2>
      <p>The anonymised analytics data is used only to:</p>
      <ul style={ul}>
        <li>Understand which sections and topics are most useful</li>
        <li>Identify and fix bugs or crashes</li>
        <li>Decide which languages and topics to expand</li>
      </ul>
      <p>We do not sell, rent, or share your data with any third party for marketing purposes.</p>

      <h2 style={h2}>3. Push Notifications</h2>
      <p>NaijaRights may send you <strong>push notifications</strong> to inform you of important legal updates, new rights topics, or app announcements. Notifications are delivered via <strong>Firebase Cloud Messaging (FCM)</strong> by Google.</p>
      <ul style={ul}>
        <li>You will be asked for permission before any notifications are sent</li>
        <li>You can withdraw permission at any time in your device&apos;s notification settings</li>
        <li>We do not use notifications to collect personal data or track your activity</li>
        <li>FCM may receive a device token (a random identifier) to route notifications to your device — this token is not linked to your identity</li>
      </ul>
      <p>Google&apos;s privacy policy for Firebase is available at <a href="https://firebase.google.com/support/privacy" style={link}>firebase.google.com/support/privacy</a>.</p>

      <h2 style={h2}>4. Third-Party Services</h2>
      <p>We use the following third-party services:</p>
      <ul style={ul}>
        <li><strong>PostHog</strong> — anonymous usage analytics. PostHog&apos;s privacy policy is available at <a href="https://posthog.com/privacy" style={link}>posthog.com/privacy</a>.</li>
        <li><strong>Firebase Cloud Messaging (Google)</strong> — push notification delivery. Google&apos;s privacy policy is available at <a href="https://policies.google.com/privacy" style={link}>policies.google.com/privacy</a>.</li>
      </ul>

      <h2 style={h2}>5. Data Retention</h2>
      <p>Anonymised analytics events are retained for up to 12 months, after which they are automatically deleted. FCM device tokens are retained only as long as notifications are enabled and are removed when you uninstall the app or revoke permission.</p>

      <h2 style={h2}>6. Children&apos;s Privacy</h2>
      <p>NaijaRights does not knowingly collect any information from children under the age of 13. The app contains general legal education content appropriate for all ages.</p>

      <h2 style={h2}>7. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date at the top. Continued use of the app after changes constitutes acceptance of the updated policy.</p>

      <h2 style={h2}>8. Contact</h2>
      <p>If you have any questions about this Privacy Policy, please open an issue on our GitHub repository: <a href="https://github.com/AfroTechBoss/NaijaRights" style={link}>github.com/AfroTechBoss/NaijaRights</a>.</p>

      <hr style={{ border: "none", borderTop: "1px solid #e0e0e0", margin: "48px 0 24px" }} />
      <p style={{ fontSize: "13px", color: "#999" }}>NaijaRights provides general legal education only, not legal advice. We are not affiliated with any Nigerian government agency. Always consult a qualified Nigerian lawyer for specific legal issues.</p>
    </main>
  );
}

const h2: React.CSSProperties = { fontSize: "20px", fontWeight: 700, marginTop: "40px", marginBottom: "8px", fontFamily: "system-ui, sans-serif" };
const h3: React.CSSProperties = { fontSize: "16px", fontWeight: 700, marginTop: "24px", marginBottom: "4px", fontFamily: "system-ui, sans-serif" };
const ul: React.CSSProperties = { paddingLeft: "24px", marginTop: "8px", marginBottom: "8px" };
const link: React.CSSProperties = { color: "#006e41" };
