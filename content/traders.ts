import type { Section } from "./types";

export const traders: Section = {
  slug: "traders",
  title: {
    en: "Traders & Business Owners",
    pcm: "Traders & Business People",
    yo: "Awọn Oniṣowo & Awọn Oniwun Iṣowo",
    ha: "Masu Kasuwanci & Masu Kasuwanci",
    ig: "Ndị Ahịa & Ndị Nwe Azụmahịa",
  },
  description: {
    en: "Rights for market traders, shop owners, hawkers, and entrepreneurs facing task forces, NAFDAC, tax officials, or illegal shop sealing.",
    pcm: "Rights for market traders, shop owners, hawkers, and business people wey face task force, NAFDAC, tax officials, or illegal shop sealing.",
    yo: "Awọn ẹtọ fun awọn oniṣowo ọja, awọn oniwun ile itaja, awọn oniṣowo ita, ati awọn oniṣowo ti o dojuko pẹlu awọn ẹgbẹ iṣẹ, NAFDAC, awọn oṣiṣẹ owo-ori, tabi pipade ile itaja ti kii ṣe ofin.",
    ha: "Haƙƙoƙi ga masu kasuwancin kasuwa, masu shaguna, masu kaya a kan hanya, da masu kasuwanci da ke fuskantar ƙungiyar aiki, NAFDAC, jami'an haraji, ko rufin shago ba bisa ƙa'ida ba.",
    ig: "Ikike maka ndị ahịa ahịa, ndị nwe ụlọ ahịa, ndị ahịa ụzọ, na ndị ọrụ azụmahịa ndị na-emegbu ọrụ ọrụ, NAFDAC, ndị ọrụ ụtụ isi, ma ọ bụ mbozu ụlọ ahịa na-ezighị ezi.",
  },
  icon: "ShoppingBag",
  color: "bg-amber-50 text-amber-700",
  topics: [
    {
      slug: "market-task-force",
      title: {
        en: "Market Task Force Encounters",
        pcm: "Market Task Force",
        yo: "Awọn Ipade Ẹgbẹ Iṣẹ Ọja",
        ha: "Saurari Ƙungiyar Aikin Kasuwa",
        ig: "Ọgbọ Ọrụ Ahịa Ahịa",
      },
      summary: {
        en: "State and local government task forces operate in markets. They have specific limited powers — they cannot arbitrarily seize goods, demand cash, or assault traders.",
        pcm: "State and local government task force dey operate for market. Their power get limit — dem no fit just seize your goods, demand cash, or beat traders.",
        yo: "Awọn ẹgbẹ iṣẹ ijọba ipinle ati agbegbe n'ṣiṣẹ ni awọn ọja. Wọn ni agbara to ni opin — wọn ko le gba ẹru larọwọto, beere owo, tabi kọlu awọn oniṣowo.",
        ha: "Ƙungiyoyin aikin jiha da gwamnatin gari suna aiki a kasuwanni. Suna da ikon iyakantacce — ba za su iya kwace kaya ba tare da dalili ba, nemi kuɗi, ko duka masu kasuwanci ba.",
        ig: "Ọrụ ọrụ steeti na ọchịchọ ọbụbụ na-arụ ọrụ n'ahịa. Ha nwere ike obere — ha enweghị ike ịchekwa ngwongwo gị n'ụzọ ọ bụla, ịrịọ ego, ma ọ bụ ịkụ ndị ahịa.",
      },
      readMinutes: 3,
      canDo: {
        en: [
          "Enforce market bylaws and regulations",
          "Issue notices for violations",
          "Seize goods that violate specific regulations (with documentation)",
          "Request valid business permits and licences",
        ],
        pcm: ["Enforce market bylaws and regulations", "Give notice for violations", "Seize goods wey violate specific rules (with paperwork)", "Ask for valid business permit and licence"],
        yo: ["Mu ẹjọ awọn ofin ọja ati awọn ilana", "Fun awọn akiyesi fun awọn ìka", "Gba ẹru ti o lodi si awọn ilana kan (pẹlu awọn iwe)", "Beere fun awọn iwe aṣẹ iṣowo to wulo"],
        ha: ["Tilasta bin dokokin kasuwa da ka'idoji", "Ba da sanarwa don keta doka", "Kwace kaya da ke keta ka'idoji na musamman (tare da takardu)", "Nemi ingantattun izinin kasuwanci da lasisi"],
        ig: ["Machibido iwu ahịa na usoro", "Nye ọkwa maka mmebi", "Chekwa ngwongwo ndị na-emebi usoro ụfọdụ (na akwụkwọ)", "Rịọ ikike azụmahịa na laịsensị dị mma"],
      },
      cannotDo: {
        en: [
          "Seize goods without issuing a formal receipt or documentation",
          "Demand cash payments that are not official levies",
          "Use violence or threats against traders",
          "Operate without displaying proper identification",
          "Seal a shop without a court order or formal notice",
        ],
        pcm: ["Seize goods without formal receipt or documentation", "Demand cash wey no be official levy", "Use violence or threat against traders", "Operate without showing proper ID", "Seal shop without court order or formal notice"],
        yo: ["Gba ẹru laisi fifun riri alaye tabi iwe", "Beere awọn sisanwo owo ti kii ṣe awọn adeta alaye", "Lo iwa-ipa tabi ìdọjútì si awọn oniṣowo", "Ṣiṣẹ laisi ifitonileti idanimọ to dara", "Pa ile itaja laisi aṣẹ ile-ẹjọ tabi akiyesi alaye"],
        ha: ["Kwace kaya ba tare da ba da kirtani ko takarda ba", "Nemi biyan kuɗi wanda ba haraji hukuma ba", "Yi amfani da tashin hankali ko barazana ga masu kasuwanci", "Aiki ba tare da nuna ingantaccen shaida ba", "Rufe shago ba tare da umurnin kotu ko sanarwa ta hukuma ba"],
        ig: ["Chekwa ngwongwo na-enweghị inyesite recept ma ọ bụ akwụkwọ", "Rịọ ụgwọ ego na-abụghị ụtụ ọrụ", "Ojiji ihe ike ma ọ bụ iyi egwu megide ndị ahịa", "Ọrụ na-egosighị njirimara dị mma", "Mechie ụlọ ahịa na-enweghị iwu ụlọ ikpe ma ọ bụ ọkwa ọrụ"],
      },
      whatToDo: {
        en: [
          "Ask for the officers' identification and the authority they represent",
          "Request a copy of any notice or seizure receipt",
          "Do not obstruct them physically, but assert your rights verbally",
          "Contact your market union or association immediately",
          "Document everything — photos if safe to do so",
          "Report to your Local Government Authority if rights are violated",
        ],
        pcm: ["Ask for their ID and which authority dem represent", "Request copy of any notice or seizure receipt", "No block them physically but use your voice to assert your rights", "Call your market union immediately", "Document everything — take photos if safe", "Report to Local Government if dem violate your rights"],
        yo: ["Beere fun idanimọ awọn ọfẹ ati aṣẹ ti wọn ṣojuuṣe", "Beere fun adakọ ti akiyesi tabi riri ijagba eyikeyi", "Má dẹ̀ wọn ni ara, ṣugbọn sọ awọn ẹtọ rẹ ni ohun", "Kan si ẹgbẹ ọja rẹ lẹsẹkẹsẹ", "Gba akọsilẹ ohun gbogbo — ya awọn aworan ti o ba jẹ ailewu", "Ròyìn si Aṣẹ Ijọba Agbegbe Rẹ ti a ba ru ẹtọ rẹ"],
        ha: ["Nemi shaida jami'an da ikon da suke wakilta", "Nemi kwafin kowane sanarwa ko kirtanin kwace", "Kada ka toshe su jiki, amma nemi haƙƙoƙinka ta murya", "Tuntubi ƙungiyar kasuwanku nan da nan", "Rubuta komai — dauki hotuna idan lafiya ta bada damar", "Kai ƙara ga Hukumar Gwamnatin Gari idan an keta haƙƙoƙinka"],
        ig: ["Rịọ njirimara ndị ọrụ ahụ na ọchịchọ ha na-anọchite anya ya", "Rịọ otu n'ime ọkwa ọ bụla ma ọ bụ recept nchekwa", "Emebikwala ha n'ahụ, mana kwuo ikike gị n'olu", "Kpọtụrụ ọgbakọ ahịa gị n'ozuzu", "Deechie ihe niile — were foto ọ bụrụ na ọ dị mma", "Kọọ na Ọchịchọ Gọọmenti Ebe ma ọ bụrụ na e mebiiri ikike gị"],
      },
      whatNotToDo: {
        en: [
          "Do not physically obstruct or assault task force officers",
          "Do not pay unofficial cash without documentation",
          "Do not abandon your goods at the scene without documentation",
          "Do not ignore notices — respond formally in writing",
        ],
        pcm: ["No physically block or attack task force officers", "No pay unofficial cash without documentation", "No abandon your goods without documentation", "No ignore notice — respond formally in writing"],
        yo: ["Má dẹ́ tabi kọlu awọn ọfẹ ẹgbẹ iṣẹ ni ara", "Má san owo aṣiri laisi iwe", "Má fi ẹru rẹ silẹ ni ibi laisi iwe", "Má fojufori awọn akiyesi — dahun ni alaye ni kikọ"],
        ha: ["Kada ka toshe ko kai wa jami'an ƙungiyar aikin hari jiki", "Kada ka biya kuɗin ɓoye ba tare da takardu ba", "Kada ka bar kayanka a wurin ba tare da takardu ba", "Kada ka yi watsi da sanarwa — amsa da hukuma a rubuce"],
        ig: ["Emebikwala ma ọ bụ kụọ ndị ọrụ ọrụ ọrụ n'ahụ", "Akwụkwala ego nzuzo na-enweghị akwụkwọ", "Hapụkwala ngwongwo gị n'ebe ahụ na-enweghị akwụkwọ", "Anakwụkwala ọkwa — zaghachi n'ụzọ ọrụ n'ihe ede ede"],
      },
      laws: [
        {
          name: "Constitution of the Federal Republic of Nigeria 1999",
          section: "Section 44",
          plainEnglish: {
            en: "No moveable property shall be compulsorily acquired unless fair compensation is paid. Seizure of goods without documentation or compensation may be unconstitutional.",
            pcm: "Nobody fit compulsorily take your property without fair compensation. Seizing goods without documentation or payment fit be unconstitutional.",
            yo: "Ko si ohun ini ti a le gba ni ipa laisi isanpada ododo. Imugba ẹru laisi iwe tabi isanpada le jẹ aiofin.",
            ha: "Ba za a kwace dukiya ta tilas ba sai an biya diyya mai adalci. Kwace kaya ba tare da takardu ko diyya ba na iya zama rashin tsarin mulki.",
            ig: "Enweghị ihe onwe onye ga-abụ nke a ga-anabata n'ike na-enweghị ụgwọ kwesịrị ekwesị. Ịchekwa ngwongwo na-enweghị akwụkwọ ma ọ bụ ụgwọ nwere ike ọ bụghị iwu.",
          },
        },
      ],
      scenarios: [],
    },
  ],
};
