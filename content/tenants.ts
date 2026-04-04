import type { Section } from "./types";

export const tenants: Section = {
  slug: "tenants",
  title: {
    en: "Tenants & Landlords",
    pcm: "Tenants & Landlords",
    yo: "Awọn Agbatọ & Awọn Onile",
    ha: "Masu Haya & Ma'abocin Gida",
    ig: "Ndị Dị N'ụlọ Mgbazinye & Ndị Nwe Ụlọ",
  },
  description: {
    en: "Your rights as a tenant against illegal eviction, improper quit notices, and unlawful entry — and what landlords can and cannot legally do.",
    pcm: "Your rights as tenant against illegal eviction, improper quit notice, and unlawful entry — and wetin landlord fit and no fit do by law.",
    yo: "Awọn ẹtọ rẹ gẹgẹbi agbatọ lodi si ilepadanu aitọ, akiyesi ifi silẹ aibojumu, ati wọle aitọ — ati ohun ti onile le ati ko le ṣe ni ofin.",
    ha: "Haƙƙoƙinka a matsayin mai haya kan kora ba bisa ƙa'ida ba, sanarwar ƙaura ba daidai ba, da shiga ba bisa doka ba — da abin da mai gida zai iya da ba zai iya yi ba a bisa doka.",
    ig: "Ikike gị dị ka onye dị n'ụlọ mgbazinye megide ịchụpụ n'ụzọ na-ezighị ezi, ọkwa ịpụ na-ezighị ezi, na ọbanye na-ezighị ezi — na ihe onye nwe ụlọ nwere ike na enweghị ike ime n'iwu.",
  },
  icon: "Home",
  color: "bg-teal-50 text-teal-700",
  topics: [
    {
      slug: "illegal-eviction",
      title: {
        en: "Illegal Eviction — Know Your Rights",
        pcm: "Illegal Eviction — Know Your Rights",
        yo: "Ilepadanu Aitọ — Mọ Awọn Ẹtọ Rẹ",
        ha: "Korar Ba Bisa Ƙa'ida — Sani Haƙƙoƙinka",
        ig: "Ịchụpụ N'ụzọ Na-ezighị Ezi — Mara Ikike Gị",
      },
      summary: {
        en: "A landlord cannot evict you without a valid court order, regardless of rent disputes. Self-help evictions — changing locks, removing your belongings, cutting utilities — are illegal.",
        pcm: "Landlord no fit evict you without valid court order, no matter the rent dispute. Changing locks, removing your things, cutting light or water — na illegal.",
        yo: "Onile ko le le ọ kuro laisi aṣẹ ile-ẹjọ to wulo, laibikita awọn ariyanjiyan iyasilẹ. Iyipada awọn titiipa, yiyọ awọn ohun ini rẹ, gige awọn iṣẹ — jẹ aitọ.",
        ha: "Mai gida ba zai iya kore ka ba tare da ingantaccen umurnin kotu ba, ko da rigimar haya. Canza kulle-kulle, cire kayanka, yanke ruwa ko wuta — ba doka ba ne.",
        ig: "Onye nwe ụlọ enweghị ike ịchụpụ gị na-enweghị iwu ụlọ ikpe dị mma, n'agbanyeghị esemokwu mgbazinye. Ịgbanwe mkpọchi, iwepụ ihe nke gị, ịkpọcha ọrụ — ọ bụghị iwu.",
      },
      readMinutes: 4,
      canDo: {
        en: [
          "Issue a valid quit notice as required by law",
          "Apply to court for a possession order after the notice period",
          "Enter the property with your consent for repairs or inspection",
          "Increase rent with proper notice as allowed by state law",
        ],
        pcm: ["Issue valid quit notice as law requires", "Apply to court for possession order after notice period", "Enter the property with your consent for repairs or inspection", "Increase rent with proper notice as state law allows"],
        yo: ["Fun akiyesi ifi silẹ to wulo bi ofin ti nilo", "Beere si ile-ẹjọ fun aṣẹ ohun ini lẹhin akoko akiyesi", "Wọ ile pẹlu igbanilaaye rẹ fun atunṣe tabi ayẹwo", "Gbe iyasilẹ pẹlu akiyesi to dara bi ofin ipinle ti gba laaye"],
        ha: ["Ba da ingantacciyar sanarwar ƙaura kamar yadda doka ta bukata", "Nemi umurnin mallaka a kotu bayan lokacin sanarwar", "Shiga gidan tare da izininka don gyara ko bincike", "Ƙara haya tare da sanarwa mai kyau kamar yadda dokar jiha ta yarda"],
        ig: ["Nye ọkwa ịpụ dị mma dị ka iwu chọrọ", "Rịọ n'ụlọ ikpe maka iwu ihe onwe onwe ka oge ọkwa gasie", "Banye n'ụlọ na ikike gị maka mgbazi ma ọ bụ nyochaa", "Bụlite mgbazinye na ọkwa kwesịrị dị ka iwu steeti kwere"],
      },
      cannotDo: {
        en: [
          "Evict you without a court order",
          "Change locks while you are still a tenant",
          "Remove your belongings from the property",
          "Cut off water, electricity, or other utilities to force you out",
          "Enter your home without prior notice or your consent",
          "Harass or intimidate you to force you to leave",
        ],
        pcm: ["Evict you without court order", "Change locks while you still dey there as tenant", "Remove your belongings from the property", "Cut off water, light, or other utilities to force you out", "Enter your house without prior notice or your consent", "Harass or intimidate you to force you leave"],
        yo: ["Le ọ kuro laisi aṣẹ ile-ẹjọ", "Yipada awọn titiipa lakoko ti o ṣi jẹ agbatọ", "Yọ ohun ini rẹ kuro ni ile", "Ge omi, ina, tabi awọn iṣẹ miiran lati fi ọ ni ipa", "Wọ ile rẹ laisi akiyesi iṣaju tabi igbanilaaye rẹ", "Wọ tabi ṣe ìdọjútì mọ ọ lati fi ọ ni ipa lati lọ"],
        ha: ["Kore ka ba tare da umurnin kotu ba", "Canza kulle-kulle a lokacin da kake kan haya", "Cire kayanka daga gidan", "Yanke ruwa, wuta, ko sauran ayyuka don tilasta ka fita", "Shiga gidanka ba tare da sanarwa ko izinka ba", "Yi wa kai damunawa ko tsoratarwa don tilasta ka tafi"],
        ig: ["Chụpụ gị na-enweghị iwu ụlọ ikpe", "Gbanwee mkpọchi ị ka dị n'ụlọ dị ka onye mgbazinye", "Wepu ihe nke gị n'ụlọ", "Kpọcha mmiri, ọkụ, ma ọ bụ ọrụ ndị ọzọ iji manye gị pụọ", "Banye n'ụlọ gị na-enyekwala ọkwa ma ọ bụ ikike gị", "Iyi egwu ma ọ bụ atụọ gị egwu iji manye gị ịpụ"],
      },
      whatToDo: {
        en: [
          "If served a quit notice, do not immediately vacate — verify it is lawfully issued",
          "A monthly tenant typically requires one month's notice; an annual tenant requires six months",
          "If you refuse to leave after a valid notice, the landlord must go to court",
          "If locks are changed or utilities cut, contact a lawyer immediately",
          "Document everything — photos, messages, the notice itself",
          "Apply to court for an injunction if eviction is imminent and unlawful",
        ],
        pcm: ["If dem serve you quit notice, no rush to leave — verify am first", "Monthly tenant need one month notice; annual tenant need six months", "If you refuse to leave after valid notice, landlord must go court", "If dem change locks or cut utilities, call lawyer immediately", "Document everything — photos, messages, the notice", "Apply to court for injunction if illegal eviction is coming"],
        yo: ["Ti a ba fi akiyesi ifi silẹ fun ọ, má yara lọ — ṣe idaniloju pe o wulo", "Agbatọ oṣu mọkankan nilo akiyesi oṣu kan; agbatọ ọdọọdun nilo oṣu mẹfa", "Ti o ba kọ lati lọ lẹhin akiyesi to wulo, onile gbọdọ lọ si ile-ẹjọ", "Ti a ba yipada awọn titiipa tabi ge awọn iṣẹ, kan si agbẹjọro lẹsẹkẹsẹ", "Gba akọsilẹ ohun gbogbo — awọn aworan, awọn ifiranṣẹ, akiyesi naa", "Beere si ile-ẹjọ fun ilana ti ilepadanu aitọ ba sunmọ"],
        ha: ["Idan aka ba ka sanarwar ƙaura, kada ka yi gaggawa ka tafi — tabbatar da daidaituwarta", "Mai hayan wata guda yana buƙatar sanarwa ta wata guda; mai hayan shekara yana buƙatar watanni shida", "Idan ka ƙi tafiya bayan ingantacciyar sanarwa, mai gida dole ya je kotu", "Idan aka canza kulle-kulle ko yanke ayyuka, tuntubi lauya nan da nan", "Rubuta komai — hotuna, saƙonni, sanarwar kanta", "Nemi kotun ta ba da hani idan kora ba bisa ƙa'ida ba ta kusanto"],
        ig: ["Ọ bụrụ na e nyere gị ọkwa ịpụ, ghakwala n'oge — nwaa ma ọ dị mma n'iwu", "Onye mgbazinye ọnwa chọọ ọkwa ọnwa otu; onye mgbazinye afọ chọọ ọnwa isii", "Ọ bụrụ na ị jụ ịpụ ka ọkwa dị mma gasie, onye nwe ụlọ kwesịrị ịga n'ụlọ ikpe", "Ọ bụrụ na ha gbanwee mkpọchi ma ọ bụ kpọcha ọrụ, kpọtụrụ ọka iwu n'ozuzu", "Deechie ihe niile — foto, ozi, ọkwa ahụ", "Rịọ n'ụlọ ikpe maka ihe igbochi ọ bụrụ na ịchụpụ na-ezighị ezi dị nso"],
      },
      whatNotToDo: {
        en: [
          "Do not ignore a valid quit notice — respond in writing and seek legal advice",
          "Do not destroy or damage the property",
          "Do not withhold rent as leverage — this weakens your legal position",
          "Do not allow a landlord to intimidate you into leaving without a court order",
        ],
        pcm: ["No ignore valid quit notice — respond in writing and get legal advice", "No destroy or damage the property", "No withhold rent as leverage — e go weaken your legal position", "No allow landlord to intimidate you into leaving without court order"],
        yo: ["Má fojufori akiyesi ifi silẹ to wulo — dahun ni kikọ ati wa imọran ofin", "Má run tabi ba ile jẹ", "Má dẹ iyasilẹ bi ohun ti a le lo — yoo jẹ ki ipo ofin rẹ lagbara lagbara", "Má jẹ ki onile ṣe ìdọjútì mọ ọ lati lọ laisi aṣẹ ile-ẹjọ"],
        ha: ["Kada ka yi watsi da ingantacciyar sanarwar ƙaura — amsa a rubuce kuma nemi shawara ta doka", "Kada ka halaka ko lalata gidan", "Kada ka riƙe haya a matsayin matsin lamba — yana raunana matsayinka na doka", "Kada ka bar mai gida ya tsorata ka ya kore ka ba tare da umurnin kotu ba"],
        ig: ["Anakwụkwala ọkwa ịpụ dị mma — zaghachi n'ihe ede ede ma chọọ ndụmọdụ iwu", "Emebiakwala ụlọ ahụ", "Echekwakwala mgbazinye dị ka ihe mmebe — ọ ga-adịghị mma ọnọdụ iwu gị", "Ikwekwala onye nwe ụlọ ịtụọ gị egwu ka ị pụọ na-enweghị iwu ụlọ ikpe"],
      },
      laws: [
        {
          name: "Recovery of Premises Act (and State Tenancy Laws)",
          section: "Section 2 & 7",
          plainEnglish: {
            en: "A landlord must serve a valid notice to quit before applying to court for possession. For monthly tenants, the notice is one month; for yearly tenants, it is six months.",
            pcm: "Landlord must give valid quit notice before going court for possession. Monthly tenant: one month notice. Yearly tenant: six months notice.",
            yo: "Onile gbọdọ fun akiyesi ifi silẹ to wulo ṣaaju ki o to beere si ile-ẹjọ fun ohun ini. Fun awọn agbatọ oṣu kan: oṣu kan; fun awọn agbatọ ọdọọdun: oṣu mẹfa.",
            ha: "Mai gida dole ya ba da ingantacciyar sanarwar ƙaura kafin ya nemi kotu don mallaka. Ga mai hayan wata guda: wata guda; ga mai hayan shekara: watanni shida.",
            ig: "Onye nwe ụlọ kwesịrị inye ọkwa ịpụ dị mma tupu ịrịọ n'ụlọ ikpe maka ihe onwe onwe. Onye mgbazinye ọnwa: ọnwa otu; onye mgbazinye afọ: ọnwa isii.",
          },
        },
      ],
      scenarios: [],
    },
  ],
};
