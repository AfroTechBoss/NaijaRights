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
        publisher: "National Assembly of Nigeria",
        url: "https://www.nassnigeria.gov.ng/constitution/",
        alt: "https://nigerialii.org/ng/legislation/constitution-federal-republic-nigeria-1999",
      },
      {
        name: "Administration of Criminal Justice Act (ACJA) 2015",
        publisher: "Nigeria Law Information Institute",
        url: "https://nigerialii.org/ng/legislation/administration-criminal-justice-act-2015",
      },
      {
        name: "Violence Against Persons (Prohibition) Act (VAPP) 2015",
        publisher: "Nigeria Law Information Institute",
        url: "https://nigerialii.org/ng/legislation/violence-against-persons-prohibition-act-2015",
      },
      {
        name: "Nigeria Police Act 2020",
        publisher: "Nigeria Law Information Institute",
        url: "https://nigerialii.org/ng/legislation/nigeria-police-act-2020",
      },
      {
        name: "Cybercrimes (Prohibition, Prevention, Etc.) Act 2015",
        publisher: "Nigeria Law Information Institute",
        url: "https://nigerialii.org/ng/legislation/cybercrimes-prohibition-prevention-etc-act-2015",
      },
      {
        name: "Anti-Torture Act 2017",
        publisher: "Nigeria Law Information Institute",
        url: "https://nigerialii.org/ng/legislation/anti-torture-act-2017",
      },
      {
        name: "Child Rights Act 2003",
        publisher: "Nigeria Law Information Institute",
        url: "https://nigerialii.org/ng/legislation/child-rights-act",
      },
      {
        name: "Matrimonial Causes Act",
        publisher: "Nigeria Law Information Institute",
        url: "https://nigerialii.org/ng/legislation/matrimonial-causes-act",
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
        name: "National Human Rights Commission (NHRC)",
        publisher: "nhrc.gov.ng",
        url: "https://www.nhrc.gov.ng",
      },
      {
        name: "Federal Inland Revenue Service (FIRS)",
        publisher: "firs.gov.ng",
        url: "https://www.firs.gov.ng",
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
        name: "Nigeria Law Information Institute — Full database of Nigerian statutes",
        publisher: "nigerialii.org",
        url: "https://nigerialii.org",
      },
      {
        name: "National Assembly of Nigeria — Bills and Acts",
        publisher: "nassnigeria.gov.ng",
        url: "https://www.nassnigeria.gov.ng",
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
                  <>
                    <span style={{ fontSize: "13px", color: "#999" }}> · also at </span>
                    <a href={item.alt} style={{ fontSize: "13px", color: "#006e41", wordBreak: "break-all" }}>{item.alt}</a>
                  </>
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
