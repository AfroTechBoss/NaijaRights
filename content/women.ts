import type { Section } from "./types";

export const women: Section = {
  slug: "women",
  title: {
    en: "Women & Vulnerable Persons",
    pcm: "Women & Vulnerable Persons",
    yo: "Awọn Obinrin & Awọn Eniyan Alailagbara",
    ha: "Mata & Mutanen da ke cikin Haɗari",
    ig: "Ụmụ Nwanyị & Ndị Na-adịghị Ike",
  },
  description: {
    en: "Legal protections for women, survivors of domestic violence, victims of sexual harassment, and vulnerable persons under the VAPP Act and Nigerian Constitution.",
    pcm: "Legal protection for women, domestic violence survivors, sexual harassment victims, and vulnerable persons under VAPP Act and Nigerian Constitution.",
    yo: "Awọn aabo ofin fun awọn obinrin, awọn aláàárọ̀ iwa ipa ni ile, awọn olufaragba ipalara ibalopo, ati awọn eniyan alailagbara labẹ Ofin VAPP ati Ofin Ipilẹ Nigeria.",
    ha: "Kariyar doka ga mata, wadanda suka tsira daga cin zarafin gida, wadanda suka fuskanci cin zarafin jima'i, da mutanen da ke cikin haɗari a ƙarƙashin Dokar VAPP da Kundin Tsarin Mulki na Najeriya.",
    ig: "Nchebe iwu maka ụmụ nwanyị, ndị gasịrị n'ime ihe ike n'ụlọ, ndị ihe ọjọọ mere n'ihe banyere mmekọahụ, na ndị na-adịghị ike n'okpuru VAPP Act na Iwu Nke Naịjirịa.",
  },
  icon: "Heart",
  color: "bg-rose-50 text-rose-700",
  topics: [
    {
      slug: "domestic-violence",
      title: {
        en: "Domestic Violence & the VAPP Act",
        pcm: "Domestic Violence & VAPP Act",
        yo: "Iwa Ipa Ìdílé & Ofin VAPP",
        ha: "Cin Zarafin Gida & Dokar VAPP",
        ig: "Ihe Ike N'ụlọ & VAPP Act",
      },
      summary: {
        en: "The Violence Against Persons Prohibition (VAPP) Act 2015 criminalises domestic violence, sexual assault, stalking, and emotional abuse. It applies at the federal level and in states that have adopted it.",
        pcm: "VAPP Act 2015 make domestic violence, sexual assault, stalking, and emotional abuse na crime. E apply for federal level and states wey don adopt am.",
        yo: "Ofin VAPP 2015 ṣe iwa ipa ìdílé, ikọlu ibalopo, takurọsẹ, ati ilokulo ẹdun jẹ ẹṣẹ. O kan ni ipele apapo ati ni awọn ipinle ti o ti gba a.",
        ha: "Dokar VAPP 2015 ta mai da cin zarafin gida, cin zarafin jima'i, kiyayya, da cin zarafin tunani su zama laifi. Tana aiki a matakin tarayya da jihohin da suka karbe ta.",
        ig: "VAPP Act 2015 mere ka ihe ike n'ụlọ, inyeaghara n'ihe mmekọahụ, ịgba ọsọ imi ọzọ, na mmegbu mwute bụ mmehie. Ọ na-arụ ọrụ n'ọkwa gọọmenti etiti na n'obodo ndị nabatara ya.",
      },
      readMinutes: 5,
      canDo: {
        en: [
          "Police must accept reports of domestic violence",
          "A court can issue a Protection Order against an abuser",
          "You can apply for an emergency protection order without the abuser's presence",
          "Shelters and support services must be made available to victims",
        ],
        pcm: ["Police must accept report of domestic violence", "Court fit issue Protection Order against abuser", "You fit apply for emergency protection order without abuser being there", "Shelters and support services must be available for victims"],
        yo: ["Ọlọpaa gbọdọ gba ijabọ iwa ipa ìdílé", "Ile-ẹjọ le fun Aṣẹ Aabo si ẹni ti o kọlu", "O le beere fun aṣẹ aabo pajawiri laisi wiwa ẹni ti o kọlu", "Awọn ile aabo ati awọn iṣẹ atilẹyin gbọdọ wa fun awọn olufaragba"],
        ha: ["Yan sanda dole su karɓi rahotannin cin zarafin gida", "Kotu na iya ba da Dokar Kariya kan mai cin zarafi", "Kuna iya neman umarni na gaggawa na kariya ba tare da halartar mai cin zarafi ba", "Dole a samar da matsugunan kuma da ayyukan tallafi ga waɗanda aka azabtar"],
        ig: ["Ndị uwe ojii kwesịrị anabata akụkọ banyere ihe ike n'ụlọ", "Ụlọ ikpe nwere ike enye Iwu Nchebe megide onye na-eme ihe ike", "Ị nwere ike arịọ iwu nchebe mberede na-enweghị ọnụ onye na-eme ihe ike", "A kwesịrị inye ndị ihe ike mere ụlọ nchedo na ọrụ nkwado"],
      },
      cannotDo: {
        en: [
          "Police cannot refuse to file a report of domestic violence",
          "An abuser cannot legally prevent you from leaving the home",
          "No officer can dismiss domestic violence as a 'family matter' and refuse to act",
          "A landlord cannot evict you for leaving an abusive partner",
        ],
        pcm: ["Police no fit refuse to accept domestic violence report", "Abuser no fit legally stop you from leaving house", "No officer fit say domestic violence na 'family matter' and refuse to act", "Landlord no fit evict you for leaving abusive partner"],
        yo: ["Ọlọpaa ko le kọ lati gba ijabọ iwa ipa ìdílé", "Ẹni ti o kọlu ko le ṣe idiwọ fun ọ lati lọ kuro ni ile", "Oṣiṣẹ kankan ko le kọ iwa ipa ìdílé silẹ bi 'ọrọ ìdílé'", "Onile ko le le ọ kuro nitori ti o ti lọ kuro lọwọ alabaṣiṣẹpọ ti o kọlu"],
        ha: ["Yan sanda ba za su iya ƙi karɓar rahoton cin zarafin gida ba", "Mai cin zarafi ba zai iya hana ka barin gida ta doka ba", "Babu jami'i da zai iya yafe cin zarafin gida a matsayin 'al'amarin iyali'", "Mai gida ba zai iya kore ka saboda ka bar abokin da ke cin zarafi ba"],
        ig: ["Ndị uwe ojii enweghị ike ịjụ ịnabata akụkọ banyere ihe ike n'ụlọ", "Onye na-eme ihe ike enweghị ike izọpụta gị na iwu n'ụlọ", "Onye ọrụ ọ bụla enweghị ike ikwu na ihe ike n'ụlọ bụ 'ihe ezinụlọ' wee jụ ime ihe", "Landlord enweghị ike ịchụpụ gị maka ihapụ onye ndụ gị na-eme ihe ike"],
      },
      whatToDo: {
        en: [
          "Go to the nearest police station and report the violence",
          "Request to see a female officer if you prefer",
          "Seek medical attention and ask the hospital to document your injuries",
          "Contact a legal aid organisation or the National Agency for the Prohibition of Trafficking in Persons (NAPTIP)",
          "Apply for a Protection Order at the Magistrates' Court",
          "Save all evidence: photos, messages, medical records",
        ],
        pcm: ["Go nearest police station and report the violence", "Ask to see female officer if you prefer", "Get medical treatment and ask hospital to document your injuries", "Contact legal aid or NAPTIP", "Apply for Protection Order at Magistrates' Court", "Save all evidence: photos, messages, medical records"],
        yo: ["Lọ si ibudo ọlọpaa ti o sunmọ julọ ati ròyìn iwa ipa naa", "Beere lati ri ọfẹ obinrin ti o ba fẹ", "Wa itọju iṣoogun ati beere ile-iwosan lati ṣe akọsilẹ awọn ọgbẹ rẹ", "Kan si ẹgbẹ iranlọwọ ofin tabi NAPTIP", "Beere fun Aṣẹ Aabo ni Ile-ẹjọ Magistrate", "Fipamọ gbogbo ẹri: awọn aworan, awọn ifiranṣẹ, awọn igbasilẹ iṣoogun"],
        ha: ["Tafi tashar 'yan sanda mafi kusa kuma kai rahoto", "Nemi ganin jandarmiyar mata idan kana so", "Nemi kulawa ta likita kuma nemi asibitin ya rubuta raunuka", "Tuntubi ƙungiyar taimakon shari'a ko NAPTIP", "Nemi Dokar Kariya a Kotun Mista", "Adana duk shaidu: hotuna, saƙonni, takardun likita"],
        ig: ["Gaa n'ụlọ ọrụ uwe ojii kacha nso ma kọọ ihe ike ahụ", "Rịọ ka i hụ onye uwe ojii nwanyị ọ bụrụ na ị chọọ ya", "Chọọ ọgwụgwọ ahụike ma rịọ ụlọ ọgwụ ikwupụta ihere gị", "Kpọtụrụ ọgbakọ enyemaka iwu ma ọ bụ NAPTIP", "Rịọ Iwu Nchebe na Ụlọ Ikpe Magistrate", "Chekwaa ihe akaebe niile: foto, ozi, ndekọ ahụike"],
      },
      whatNotToDo: {
        en: [
          "Do not stay in a dangerous situation waiting for things to improve",
          "Do not be pressured by family to 'manage' the situation",
          "Do not destroy evidence — keep records of everything",
          "Do not be discouraged if police initially resist — insist on your right to report",
        ],
        pcm: ["No stay for dangerous situation waiting for things to get better", "No let family pressure you to 'manage' the situation", "No destroy evidence — keep everything", "No give up if police try to discourage you — insist on your right to report"],
        yo: ["Má duro ni ipo eewu ti o nduro fun awọn nkan lati ni ilọsiwaju", "Má jẹ ki ẹbi tẹ ọ lati 'ṣakoso' ipo naa", "Má run ẹri — tọju awọn igbasilẹ ohun gbogbo", "Má kọ silẹ ti ọlọpaa ba kọ ni akọkọ — duro si ẹtọ rẹ lati ròyìn"],
        ha: ["Kada ka zauna a yanayi mai haɗari suna jiran abubuwa su inganta", "Kada ka bar dangi ya matsa maka ka 'sarrafa' yanayin", "Kada ka lalata shaidu — kiyaye duk bayanan", "Kada ka yanke ƙauna idan 'yan sanda sun ƙi da farko — nace kan haƙƙinka na kai rahoto"],
        ig: ["Anọkwala n'ọnọdụ ize ndụ na-echere ka ihe dịkwuo mma", "Ikwekwala ezinụlọ igbochi gị 'ijikwa' ọnọdụ ahụ", "Eweghachikwala ihe akaebe — zachie ndekọ ihe niile", "Anakwụkwala ma ndị uwe ojii chọpụtara igbochi gị na mbụ — nọdee n'ikike gị ịkọ"],
      },
      laws: [
        {
          name: "Violence Against Persons (Prohibition) Act 2015",
          section: "Sections 1–46",
          plainEnglish: {
            en: "The VAPP Act prohibits all forms of violence against persons including physical, sexual, psychological, and socio-economic abuse. Offenders can be jailed for up to 14 years.",
            pcm: "VAPP Act prohibit all form of violence — physical, sexual, psychological, and economic. Person wey do am fit go jail for up to 14 years.",
            yo: "Ofin VAPP ṣe idinaduro gbogbo awọn iru iwa ipa pẹlu ti ara, ibalopo, ati ti ẹdun. Awọn olufisẹ le lọ si tubu fun ọdun 14.",
            ha: "Dokar VAPP ta hana duk nau'ikan cin zarafi ciki har da na jiki, na jima'i, na tunani, da na tattalin arziki. Masu laifin za a iya daurin su har zuwa shekara 14.",
            ig: "VAPP Act machibido ọdịdị ihe ike niile megide ndị mmadụ gụnyere ihe ahụike, mmekọahụ, uche, na akụ. Ndị na-emegbu iwu nwere ike ịga n'mkpọrọ ruo afọ 14.",
          },
        },
        {
          name: "Constitution of the Federal Republic of Nigeria 1999",
          section: "Section 34",
          plainEnglish: {
            en: "Every individual is entitled to respect for the dignity of his person, and no person shall be subjected to torture or inhuman or degrading treatment.",
            pcm: "Every person get right to respect and dignity. Nobody suppose torture you or treat you in inhuman or degrading way.",
            yo: "Gbogbo eniyan ni ẹtọ si ọwọ fun iyì ara ẹni, ati pe ẹnikẹni ko gbọdọ jẹ ohun ti ijiya tabi itọju alailẹsan.",
            ha: "Kowane mutum yana da hakkin mutunci na mutumtakarsa, kuma ba za a azabtar da kowa ba ko a yi masa ta'adi.",
            ig: "Onye ọ bụla nwere ikike maka ihe ọ bụ onye ya, onye ọ bụla agaghị ata ahụhụ ma ọ bụ a ga-etinye ya n'ọnọdụ ihe mmejọ.",
          },
        },
      ],
      scenarios: [],
    },
  ],
};
