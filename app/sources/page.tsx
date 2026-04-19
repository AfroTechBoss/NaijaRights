import Link from "next/link";

export const metadata = {
  title: "Legal Sources — NaijaRights",
  description: "Official Nigerian government and legal sources referenced in the NaijaRights app.",
};

const SOURCES = [
  {
    category: "Primary Legislation",
    items: [
      {
        name: "Constitution of the Federal Republic of Nigeria 1999 (as amended)",
        publisher: "PLAC — includes all alterations up to the 5th Alteration Act 2023",
        url: "https://placng.org/i/wp-content/uploads/2023/05/Constitution-of-the-Federal-Republic-of-Nigeria-2023.pdf",
        altLabel: "Alternative official PDF",
        alt: "https://nigeriarights.gov.ng/files/constitution.pdf",
      },
      {
        name: "Administration of Criminal Justice Act (ACJA) 2015",
        publisher: "policinglaw.info — official PDF",
        url: "https://www.policinglaw.info/assets/downloads/2015_Administration_of_Criminal_Justice_Act.pdf",
        altLabel: "Alternative clean copy",
        alt: "https://nigerianlawguru.com/wp-content/uploads/2024/06/ADMINISTRATION-OF-CRIMINAL-JUSTICE-ACT2015.pdf",
      },
      {
        name: "Violence Against Persons (Prohibition) Act (VAPP) 2015",
        publisher: "NAPTIP — National Agency for the Prohibition of Trafficking in Persons",
        url: "https://naptip.gov.ng/download/violence-against-persons-prohibition-act-2015/",
        altLabel: "Alternative clean copy",
        alt: "https://fida.org.ng/wp-content/uploads/2020/09/Violence-Against-Persons-Prohibition-Act-2015-1.pdf",
      },
      {
        name: "Nigeria Police Act 2020",
        publisher: "PLAC — Policy and Legal Advocacy Centre",
        url: "https://placng.org/i/wp-content/uploads/2020/09/Police-Act-2020.pdf",
        altLabel: "Alternative clean copy",
        alt: "https://sabilaw.org/wp-content/uploads/2020/11/Police-Act-2020-1.pdf",
      },
      {
        name: "Cybercrimes (Prohibition, Prevention, Etc.) Act 2015",
        publisher: "NFIU — Nigerian Financial Intelligence Unit",
        url: "https://www.nfiu.gov.ng/images/Downloads/downloads/cybercrime.pdf",
      },
      {
        name: "Anti-Torture Act 2017",
        publisher: "ILO NATLEX — official PDF",
        url: "https://natlex.ilo.org/dyn/natlex2/natlex2/files/download/108562/NGA108562.pdf",
        altLabel: "PLAC page with download",
        alt: "https://placng.org/i/documents/anti-torture-act-2017/",
      },
      {
        name: "Child Rights Act 2003",
        publisher: "PLAC Laws of Nigeria portal",
        url: "https://placng.org/lawsofnigeria/laws/C50.pdf",
      },
      {
        name: "Matrimonial Causes Act",
        publisher: "PLAC Laws of Nigeria portal",
        url: "https://lawsofnigeria.placng.org/laws/M7.pdf",
      },
    ],
  },
  {
    category: "Government Agencies",
    items: [
      { name: "Federal Road Safety Corps (FRSC)", publisher: "frsc.gov.ng", url: "https://frsc.gov.ng" },
      { name: "National Agency for Food and Drug Administration and Control (NAFDAC)", publisher: "nafdac.gov.ng", url: "https://www.nafdac.gov.ng" },
      { name: "National Agency for the Prohibition of Trafficking in Persons (NAPTIP)", publisher: "naptip.gov.ng", url: "https://www.naptip.gov.ng" },
      { name: "Nigeria Police Force", publisher: "npf.gov.ng", url: "https://www.npf.gov.ng" },
      { name: "Federal Ministry of Justice", publisher: "justice.gov.ng", url: "https://www.justice.gov.ng" },
    ],
  },
  {
    category: "Legal Databases",
    items: [
      { name: "Policy and Legal Advocacy Centre (PLAC)", publisher: "placng.org", url: "https://placng.org/i/" },
      { name: "Laws of Nigeria — PLAC consolidated statutes portal", publisher: "lawsofnigeria.placng.org", url: "https://lawsofnigeria.placng.org" },
      { name: "Nigerian Law Guru — Free Nigerian case law and legislation", publisher: "nigerianlawguru.com", url: "https://nigerianlawguru.com" },
    ],
  },
];

export default function SourcesPage() {
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
          width: 40, height: 40, borderRadius: 20,
          background: "transparent", display: "flex", alignItems: "center",
          justifyContent: "center", color: "var(--ink)", textDecoration: "none", flexShrink: 0,
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
        </Link>
        <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 500, color: "var(--ink)", letterSpacing: -0.3 }}>
          Legal Sources
        </div>
      </div>

      <main style={{ maxWidth: 680, margin: "0 auto", padding: "24px 20px 80px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 24 }}>
          <h1 style={{
            margin: 0, fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 32, fontWeight: 500, color: "var(--ink)", letterSpacing: -0.7, lineHeight: 1.05,
          }}>
            Legal<br /><span style={{ fontStyle: "italic", color: "var(--accent)" }}>Sources</span>
          </h1>
          <div style={{ marginTop: 8, fontSize: 13, color: "var(--ink-muted)" }}>
            Official sources referenced in the NaijaRights app
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{
          padding: "14px 16px", borderRadius: 14, marginBottom: 28,
          background: "var(--accent-soft)", border: "1px solid var(--accent)",
          fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55,
        }}>
          <strong style={{ color: "var(--accent)" }}>Independent app:</strong> NaijaRights is not affiliated with, endorsed by, or representative of any Nigerian government agency, ministry, or official body. All content is sourced from publicly available official Nigerian legislation listed below.
        </div>

        {SOURCES.map((group) => (
          <div key={group.category} style={{ marginBottom: 32 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase",
              color: "var(--ink-muted)", marginBottom: 10,
            }}>
              {group.category}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {group.items.map((item) => (
                <div
                  key={item.url}
                  style={{
                    background: "var(--surface)", border: "1px solid var(--line)",
                    borderRadius: 14, padding: "14px",
                  }}
                >
                  <div style={{
                    fontFamily: "'Fraunces', Georgia, serif", fontSize: 15, fontWeight: 500,
                    color: "var(--ink)", lineHeight: 1.25, letterSpacing: -0.1, marginBottom: 4,
                  }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--ink-muted)", marginBottom: 6 }}>
                    {item.publisher}
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      fontSize: 12, color: "var(--accent)", wordBreak: "break-all", textDecoration: "none",
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    {item.url.replace(/^https?:\/\//, "")}
                  </a>
                  {"alt" in item && item.alt && (
                    <div style={{ marginTop: 6 }}>
                      <span style={{ fontSize: 11, color: "var(--ink-muted)" }}>{item.altLabel ?? "Also at"}: </span>
                      <a
                        href={item.alt}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: 11, color: "var(--accent)", wordBreak: "break-all", textDecoration: "none" }}
                      >
                        {item.alt.replace(/^https?:\/\//, "")}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{
          marginTop: 8, padding: "14px 16px", borderRadius: 14,
          background: "var(--surface)", border: "1px solid var(--line)",
          fontSize: 12, color: "var(--ink-muted)", lineHeight: 1.55,
        }}>
          NaijaRights provides general legal education only, not legal advice. Laws may change — always consult a qualified Nigerian lawyer for specific legal issues.
        </div>
      </main>
    </div>
  );
}
