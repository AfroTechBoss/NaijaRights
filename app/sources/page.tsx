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
        publisher: "PLAC — best updated version (includes all alterations up to the 5th Alteration Act 2023)",
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
      {
        name: "Federal Road Safety Corps (FRSC)",
        publisher: "frsc.gov.ng",
        url: "https://frsc.gov.ng",
      },
      {
        name: "National Agency for Food and Drug Administration and Control (NAFDAC)",
        publisher: "nafdac.gov.ng",
        url: "https://www.nafdac.gov.ng",
      },
      {
        name: "National Agency for the Prohibition of Trafficking in Persons (NAPTIP)",
        publisher: "naptip.gov.ng",
        url: "https://www.naptip.gov.ng",
      },
      {
        name: "Nigeria Police Force",
        publisher: "npf.gov.ng",
        url: "https://www.npf.gov.ng",
      },
      {
        name: "Nigeria Revenue Service (FIRS)",
        publisher: "nrs.gov.ng",
        url: "https://www.nrs.gov.ng/",
      },
      {
        name: "Federal Ministry of Justice",
        publisher: "justice.gov.ng",
        url: "https://www.justice.gov.ng",
      },
    ],
  },
  {
    category: "Legal Databases",
    items: [
      {
        name: "Policy and Legal Advocacy Centre (PLAC) — Nigerian legislation repository",
        publisher: "placng.org",
        url: "https://placng.org/i/",
      },
      {
        name: "Laws of Nigeria — PLAC consolidated statutes portal",
        publisher: "lawsofnigeria.placng.org",
        url: "https://lawsofnigeria.placng.org",
      },
      {
        name: "Nigerian Law Guru — Free Nigerian case law and legislation",
        publisher: "nigerianlawguru.com",
        url: "https://nigerianlawguru.com",
      },
    ],
  },
];

export default function SourcesPage() {
  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px 80px", fontFamily: "Georgia, serif", color: "#1a1a1a", lineHeight: 1.8 }}>
      <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "4px", fontFamily: "system-ui, sans-serif" }}>Legal Sources</h1>
      <p style={{ fontSize: "14px", color: "#666", marginBottom: "16px" }}>NaijaRights &nbsp;·&nbsp; Official sources referenced in the app</p>

      <div style={{ background: "#fff8e1", border: "1px solid #ffe082", borderRadius: "8px", padding: "16px 20px", marginBottom: "40px", fontSize: "14px" }}>
        <strong>Disclaimer:</strong> NaijaRights is an independent legal education app. It is <strong>not</strong> affiliated with, endorsed by, or representative of any Nigerian government agency, ministry, or official body. All information is sourced from publicly available official Nigerian legislation and government publications listed below.
      </div>

      {SOURCES.map((group) => (
        <section key={group.category} style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "16px", fontFamily: "system-ui, sans-serif", borderBottom: "2px solid #006e41", paddingBottom: "6px" }}>
            {group.category}
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {group.items.map((item) => (
              <li key={item.url} style={{ marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #f0f0f0" }}>
                <div style={{ fontWeight: 600, fontSize: "15px", marginBottom: "2px", fontFamily: "system-ui, sans-serif" }}>{item.name}</div>
                <div style={{ fontSize: "13px", color: "#666", marginBottom: "4px" }}>{item.publisher}</div>
                <a href={item.url} style={{ fontSize: "13px", color: "#006e41", wordBreak: "break-all" }}>{item.url}</a>
                {item.alt && (
                  <div style={{ marginTop: "4px" }}>
                    <span style={{ fontSize: "12px", color: "#999" }}>{item.altLabel ?? "Also at"}: </span>
                    <a href={item.alt} style={{ fontSize: "12px", color: "#006e41", wordBreak: "break-all" }}>{item.alt}</a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <hr style={{ border: "none", borderTop: "1px solid #e0e0e0", margin: "40px 0 24px" }} />
      <p style={{ fontSize: "13px", color: "#999" }}>
        NaijaRights provides general legal education only, not legal advice. We are not affiliated with any Nigerian government agency. Laws may change — always consult a qualified Nigerian lawyer for specific legal issues.
      </p>
    </main>
  );
}
