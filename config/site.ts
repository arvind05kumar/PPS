export interface SiteConfig {
  studioName: string;
  brandName: string;
  owner: string;
  tagline: string;
  taglineHindi: string;
  locationName: string;
  address: {
    line1: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
  };
  contact: {
    primaryPhone: string;
    primaryPhoneFormatted: string;
    secondaryPhone: string;
    secondaryPhoneFormatted: string;
    whatsappNumber: string;
    email: string;
    instagramHandle: string;
    instagramUrl: string;
  };
  timings: {
    days: string;
    daysHindi: string;
    openHour: number; // 24-hr format (e.g. 9 for 9:00 AM)
    openMinute: number;
    closeHour: number; // 24-hr format (e.g. 21 for 9:00 PM)
    closeMinute: number;
    displayString: string;
    displayStringHindi: string;
    sundayHours: string;
  };
  hero: {
    headlines: {
      en: string;
      hi: string;
    }[];
    subtitles: {
      en: string;
      hi: string;
    };
    videoUrl: string; // royalty free wedding video loop
    videoPoster: string;
  };
  stats: {
    value: number;
    suffix: string;
    labelEn: string;
    labelHi: string;
  }[];
  services: {
    id: string;
    titleEn: string;
    titleHi: string;
    shortDescEn: string;
    shortDescHi: string;
    longDescEn: string;
    longDescHi: string;
    image: string;
    tag: string;
    features: string[];
    link?: string;
  }[];
  portfolioCategories: {
    id: string;
    labelEn: string;
    labelHi: string;
  }[];
  galleryItems: {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
    thumbnailUrl: string;
    aspectRatio?: "portrait" | "landscape" | "square";
    location?: string;
    caption: string;
  }[];
  weddingFilms: {
    id: string;
    title: string;
    couple: string;
    duration: string;
    thumbnail: string;
    youtubeId: string;
    category: string;
  }[];
  weddingStoryStages: {
    stage: string;
    stageHi: string;
    title: string;
    titleHi: string;
    description: string;
    descriptionHi: string;
    image: string;
    quote: string;
  }[];
  beforeAfter: {
    beforeImage: string;
    afterImage: string;
    title: string;
    subtitle: string;
    rawLabel: string;
    editedLabel: string;
  };
  packages: {
    id: string;
    name: string;
    tagline: string;
    startingPrice: string;
    showStartingPrice: boolean; // toggle starting from vs contact for quote
    isPopular: boolean;
    features: string[];
    deliverables: string[];
  }[];
  processSteps: {
    step: string;
    titleEn: string;
    titleHi: string;
    descEn: string;
    descHi: string;
    icon: string;
  }[];
  testimonials: {
    id: string;
    coupleName: string;
    weddingType: string;
    location: string;
    quote: string;
    quoteHi: string;
    rating: number;
    image: string;
    weddingDate: string;
  }[];
  instagramPosts: {
    id: string;
    imageUrl: string;
    likes: string;
    caption: string;
    link: string;
  }[];
  studioServicesCategories: {
    id: string;
    titleEn: string;
    titleHi: string;
    iconName: string;
    summaryEn: string;
    summaryHi: string;
    items: {
      nameEn: string;
      nameHi: string;
      descEn: string;
      startingPrice?: string;
      popular?: boolean;
    }[];
  }[];
  onlineCafeServices: {
    name: string;
    nameHi: string;
    category: "print" | "forms" | "photo" | "utility";
    estimatedTime: string;
    startingRate: string;
  }[];
  rateCard: {
    category: string;
    items: {
      service: string;
      rate: string;
      unit: string;
    }[];
  }[];
  faqs: {
    questionEn: string;
    questionHi: string;
    answerEn: string;
    answerHi: string;
    category: string;
  }[];
  bookedDates: string[]; // YYYY-MM-DD
}

export const siteConfig: SiteConfig = {
  studioName: "Prasad Photo & Video Studio",
  brandName: "Bhaskendra Photography",
  owner: "Bhaskendra Prasad",
  tagline: "All Types of Photo Work",
  taglineHindi: "फ़ोटोग्राफी व वीडियोग्राफी का सम्पूर्ण प्रतिष्ठान",
  locationName: "Badi Khanjarpur",
  address: {
    line1: "Near Durga Mandir Chowk, Main Market Road",
    landmark: "Opposite Sharda Sadan",
    area: "Badi Khanjarpur",
    city: "Bhagalpur",
    state: "Bihar",
    pincode: "812001",
    googleMapsUrl: "https://maps.google.com/?q=Prasad+Photo+%26+Video+Studio+Badi+Khanjarpur",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14442.278385958045!2d86.9934!3d25.2445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE0JzQwLjIiTiA4NsKwNTknMzYuMiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  contact: {
    primaryPhone: "+917717732061",
    primaryPhoneFormatted: "+91 77177 32061",
    secondaryPhone: "+919430926577",
    secondaryPhoneFormatted: "+91 94309 26577",
    whatsappNumber: "917717732061",
    email: "bhaskarphotography4321@gmail.com",
    instagramHandle: "@bhaskendra.photography",
    instagramUrl: "https://instagram.com/bhaskendra.photography",
  },
  timings: {
    days: "Monday – Sunday",
    daysHindi: "सोमवार – रविवार",
    openHour: 9,
    openMinute: 0,
    closeHour: 21,
    closeMinute: 30,
    displayString: "9:00 AM – 9:30 PM (All 7 Days)",
    displayStringHindi: "सुबह 9:00 बजे से रात 9:30 बजे तक (सातों दिन)",
    sundayHours: "9:00 AM – 9:00 PM",
  },
  hero: {
    headlines: [
      {
        en: "Every Pheras. Every Smile. Every Memory.",
        hi: "शादी की हर याद, सिनेमैटिक अंदाज़ में",
      },
      {
        en: "Aapki Shaadi, Hamari Kahani",
        hi: "आपकी शादी, हमारी कहानी",
      },
      {
        en: "All Types of Photo Work, Made Cinematic",
        hi: "हर लम्हा ख़ास, हर फ़्रेम यादगार",
      },
    ],
    subtitles: {
      en: "From the sacred vows to joyous tears, we weave your timeless wedding story with cinematic elegance and deep warmth.",
      hi: "पवित्र सात फेरों से लेकर विदाई के आंसुओं तक—हम आपकी शादी के हर अनमोल लम्हे को एक भव्य सिनेमाई कहानी में ढालते हैं।",
    },
    // High quality royalty-free video sample (Pixabay / Pexels reliable direct mp4)
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-indian-bride-dressed-in-traditional-wedding-attire-43369-large.mp4",
    videoPoster:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=80",
  },
  stats: [
    { value: 500, suffix: "+", labelEn: "Weddings Captured", labelHi: "वैवाहिक समारोह" },
    { value: 12, suffix: "+", labelEn: "Years of Craft", labelHi: "वर्षों का अनुभव" },
    { value: 1000, suffix: "+", labelEn: "Happy Families", labelHi: "संतुष्ट परिवार" },
    { value: 50, suffix: "k+", labelEn: "Frames & Prints Delivered", labelHi: "फ़्रेम व प्रिंट्स" },
  ],
  services: [
    {
      id: "wedding-photography",
      titleEn: "Wedding Photography",
      titleHi: "वेडिंग फोटोग्राफी",
      shortDescEn: "Candid portraits, timeless rituals, and royal couple frames crafted with soul.",
      shortDescHi: "कैंडिड पोर्ट्रेट्स, पारंपरिक रस्में और शाही अंदाज़ में सजी जीवनभर की यादें।",
      longDescEn:
        "We capture the heart and soul of your big day. From subtle glances and spontaneous laughter to majestic ritual traditions, our lenses ensure no precious emotion slips away.",
      longDescHi: "हम आपकी शादी की वास्तविक भावनाओं और परंपराओं को सबसे सुंदर और कलात्मक रूप में संजोते हैं।",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      tag: "Signature Craft",
      features: ["Traditional & Candid Coverage", "Dual Master Photographers", "Custom Story Album", "High-Res Master Gallery"],
    },
    {
      id: "cinematic-video",
      titleEn: "Cinematic Video",
      titleHi: "सिनेमैटिक वीडियो फ़िल्म्स",
      shortDescEn: "Breathtaking 4K wedding films, emotional highlights, and cinematic teasers.",
      shortDescHi: "4K सिनेमाई वेडिंग फ़िल्में, भावनात्मक टीज़र और दिल छू लेने वाले हाइलाइट्स।",
      longDescEn:
        "Experience your wedding like a Bollywood feature film. Drone aerials, professional gimbals, rich color grading, and licensed emotional scores bring every ritual alive forever.",
      longDescHi: "सिनेमाई कैमरा मूवमेंट्स, ड्रोन शॉट्स और दिल छूने वाले बैकग्राउंड संगीत के साथ बनाई गई यादगार फ़िल्में।",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
      tag: "4K UHD & Drone",
      features: ["Teaser (60-sec Reels)", "Cinematic Highlight (5-7 min)", "Full Feature Film (45-90 min)", "Licensed Audio Grading"],
    },
    {
      id: "pre-wedding",
      titleEn: "Pre-Wedding Shoots",
      titleHi: "प्री-वेडिंग शूट्स",
      shortDescEn: "Romantic destination shoots, scenic sunsets, and playful couple chemistry.",
      shortDescHi: "रोमांटिक डेस्टिनेशन, मनमोहक सूर्यास्त और आपकी खूबसूरत केमिस्ट्री का उत्सव।",
      longDescEn:
        "Celebrate your love story before the wedding rush. We scout dreamy heritage locations, lush gardens, and riverbanks to capture your chemistry in natural, effortless magic.",
      longDescHi: "शादी की व्यस्तताओं से पहले अपने प्यार के सफर को खूबसूरत और यादगार लोकेशन्स पर कैमरे में कैद कराएं।",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80",
      tag: "Romantic Storytelling",
      features: ["Scenic Locations & Styling Advice", "Concept & Storyboard Shoots", "Save the Date Video Teaser", "Poster & Canvas Print"],
    },
    {
      id: "matrimonial-photography",
      titleEn: "Matrimonial Photography",
      titleHi: "मैट्रिमोनियल पोर्ट्रेट्स",
      shortDescEn: "Graceful, authentic portraits designed specifically for marriage biodata and profiles.",
      shortDescHi: "विवाह बायोडाटा और प्रोफाइल के लिए गरिमापूर्ण, आकर्षक और प्रभावशाली फ़ोटो।",
      longDescEn:
        "First impressions matter deeply in matrimonial alliances. We provide gentle posing direction, natural studio lighting, and refined retouching that reveals genuine grace and personality.",
      longDescHi: "शादी के प्रस्तावों के लिए गरिमापूर्ण, पेशेवर और प्राकृतिक फ़ोटो शूट, जिससे पहला प्रभाव सबसे अच्छा बने।",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
      tag: "Biodata & Profiles",
      features: ["Natural & Studio Lighting", "Traditional & Formal Looks", "Gentle Expressive Posing", "Same-Day High-Res Delivery"],
    },
    {
      id: "videography",
      titleEn: "Traditional Videography",
      titleHi: "ट्रेडिशनल वीडियोग्राफी",
      shortDescEn: "Complete end-to-end ritual coverage capturing every guest, blessing, and ceremony.",
      shortDescHi: "हर रस्म, हर मेहमान और हर आशीर्वाद की मुकम्मल और विस्तृत वीडियो रिकॉर्डिंग।",
      longDescEn:
        "Uncut, comprehensive coverage of all rituals—Haldi, Tilak, Mandap, Jaymala, Pheras, and Reception. Perfect for reliving every minute with parents and grandparents for decades.",
      longDescHi: "तिलक, हल्दी, मंडप, जयमाला और फेरों की पूरी रस्मों का स्पष्ट और संपूर्ण ऑडियो-वीडियो कवरेज।",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
      tag: "Full Ritual Archive",
      features: ["Multi-Camera Ritual Setup", "High Clarity Microphones", "Full Length USB / Hard Drive", "Family Interviews & Blessings"],
    },
    {
      id: "event-coverage",
      titleEn: "Event Photo & Video Coverage",
      titleHi: "इवेंट मैनेजमेंट व कवरेज",
      shortDescEn: "Birthdays, anniversaries, corporate seminars, thread ceremonies, and family galas.",
      shortDescHi: "जन्मदिन, वर्षगांठ, मुंडन, जनेऊ व कॉर्पोरेट आयोजनों का संपूर्ण कवरेज।",
      longDescEn:
        "From intimate family gatherings to grand community celebrations, our team provides seamless photography and live video feeds with vibrant clarity and punctual delivery.",
      longDescHi: "पारिवारिक उत्सवों से लेकर भव्य आयोजनों तक—समय पर उत्कृष्ट फोटोग्राफी और वीडियोग्राफी सेवा।",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
      tag: "Milestone Moments",
      features: ["Live LED Wall Feeds", "Instant Social Media Clips", "Group Photo Stage Management", "Dedicated Event Director"],
    },
  ],
  portfolioCategories: [
    { id: "all", labelEn: "All Highlights", labelHi: "सभी झलकियां" },
    { id: "wedding", labelEn: "Weddings", labelHi: "विवाह" },
    { id: "pre-wedding", labelEn: "Pre-Wedding", labelHi: "प्री-वेडिंग" },
    { id: "haldi-mehndi", labelEn: "Haldi & Mehndi", labelHi: "हल्दी व मेहंदी" },
    { id: "matrimonial", labelEn: "Matrimonial", labelHi: "मैट्रिमोनियल" },
    { id: "events", labelEn: "Events", labelHi: "इवेंट्स" },
    { id: "candid", labelEn: "Candid", labelHi: "कैंडिड" },
  ],
  galleryItems: [
    {
      id: "img-1",
      title: "Royal Bride in Vermilion Splendor",
      category: "wedding",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=75",
      aspectRatio: "portrait",
      location: "Raj Darbar Palace, Bhagalpur",
      caption: "Intricate gold jewelry, heirloom red lehenga, and the serene glow before the Jaymala.",
    },
    {
      id: "img-2",
      title: "The Regal Mandap Portraits",
      category: "wedding",
      imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=75",
      aspectRatio: "portrait",
      location: "Grand Heritage Lawns",
      caption: "A quiet moment of devotion and regal poise amidst the holy mantras.",
    },
    {
      id: "img-3",
      title: "Turmeric Blessings & Laughter",
      category: "haldi-mehndi",
      imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=75",
      aspectRatio: "landscape",
      location: "Courtyard Ceremony",
      caption: "Pure unscripted joy as cousins shower fresh marigold petals and golden turmeric paste.",
    },
    {
      id: "img-4",
      title: "Sunset Serenade Pre-Wedding",
      category: "pre-wedding",
      imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=75",
      aspectRatio: "landscape",
      location: "Ganga Ghats, Bihar",
      caption: "Golden hour reflection on the holy river as two hearts step toward forever.",
    },
    {
      id: "img-5",
      title: "Graceful Biodata Portrait",
      category: "matrimonial",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=75",
      aspectRatio: "portrait",
      location: "Prasad Studio, Badi Khanjarpur",
      caption: "Clean, flattering studio portrait highlighting natural grace, poise, and warmth.",
    },
    {
      id: "img-6",
      title: "Intricate Henna Narratives",
      category: "haldi-mehndi",
      imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=75",
      aspectRatio: "square",
      location: "Bride's Residence",
      caption: "Dark henna lines detailing the groom's hidden initials alongside paisley peacocks.",
    },
    {
      id: "img-7",
      title: "Baraat Rhythm & Fireworks",
      category: "candid",
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=75",
      aspectRatio: "landscape",
      location: "Baraat Procession",
      caption: "Dhol beats booming through the night, high energy dancing, and illuminated smiles.",
    },
    {
      id: "img-8",
      title: "The Seven Sacred Vows",
      category: "wedding",
      imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=75",
      aspectRatio: "portrait",
      location: "Vedic Mandap",
      caption: "Hand in hand around the Agni Kund, exchanging promises of lifelong companionship.",
    },
    {
      id: "img-9",
      title: "Stealing Glances During Kanyadaan",
      category: "candid",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=75",
      aspectRatio: "portrait",
      location: "Main Stage",
      caption: "An honest, unposed reaction caught at 85mm that speaks volumes of devotion.",
    },
    {
      id: "img-10",
      title: "Silver Jubilee Celebration Gala",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=75",
      aspectRatio: "landscape",
      location: "City Banquet Hall",
      caption: "Grand anniversary event with ambient warm chandeliers and generational family portraits.",
    },
    {
      id: "img-11",
      title: "Groom's Executive Matrimonial Look",
      category: "matrimonial",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=75",
      aspectRatio: "portrait",
      location: "Studio Portrait Stage",
      caption: "Confident, dignified posture tailored for formal marriage biodata and matrimony portals.",
    },
    {
      id: "img-12",
      title: "Tears, Hugs & The Vidaai",
      category: "wedding",
      imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85",
      thumbnailUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=75",
      aspectRatio: "landscape",
      location: "Departure Gateway",
      caption: "The bittersweet threshold: parents' warm embrace, gentle tears, and endless blessings.",
    },
  ],
  weddingFilms: [
    {
      id: "film-1",
      title: "Rohan & Ananya — An Eternal Symphony",
      couple: "Rohan & Ananya",
      duration: "4:32",
      thumbnail: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      youtubeId: "dQw4w9WgXcQ", // standard placeholder embed, easily replaced
      category: "Teaser Film",
    },
    {
      id: "film-2",
      title: "Vikram & Shreya — Where Ganga Meets Devotion",
      couple: "Vikram & Shreya",
      duration: "7:18",
      thumbnail: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
      youtubeId: "LXb3EKWsInQ",
      category: "Cinematic Highlight",
    },
    {
      id: "film-3",
      title: "Aman & Pooja — The Royal Baraat Odyssey",
      couple: "Aman & Pooja",
      duration: "5:45",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      youtubeId: "fJ9rUzIMcZQ",
      category: "Full Story Film",
    },
  ],
  weddingStoryStages: [
    {
      stage: "Chapter 01",
      stageHi: "अध्याय ०१",
      title: "The Sacred Getting Ready",
      titleHi: "श्रृंगार व अंतर्मन की तैयारी",
      description:
        "The gentle clinking of bangles, the fragrance of fresh jasmine gajra, and quiet anticipation before the spotlight.",
      descriptionHi: "चूड़ियों की खनक, गजरे की महक और दिल में उमड़ती नई शुरुआत की मीठी धड़कनें।",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
      quote: "Every bride holds a universe of grace in her eyes.",
    },
    {
      stage: "Chapter 02",
      stageHi: "अध्याय ०२",
      title: "The Golden Haldi Ritual",
      titleHi: "हल्दी व सतरंगी उल्लास",
      description:
        "Yellow marigold showers, mischievous cousins, and grandmother's blessings rubbed into fragrant golden turmeric.",
      descriptionHi: "गेंदे के फूलों की बारिश और दादी-नानी के प्यार से सनी पीली हल्दी का रंग।",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
      quote: "Laughter is the brightest color of an Indian wedding.",
    },
    {
      stage: "Chapter 03",
      stageHi: "अध्याय ०३",
      title: "The Grand Baraat & Swagat",
      titleHi: "शानदार बारात व जयमाला",
      description:
        "Roaring brass bands, triumphant horse arrival, and the breathtaking moment their eyes meet across the stage.",
      descriptionHi: "धमाकेदार ढोल-नगाड़े, झूमते बाराती और स्टेज पर एक-दूजे को माला पहनाने का जादुई पल।",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      quote: "When two families merge into one thunderous celebration.",
    },
    {
      stage: "Chapter 04",
      stageHi: "अध्याय ०४",
      title: "The Sacred Pheras",
      titleHi: "पवित्र सात फेरे व सात वचन",
      description:
        "Circling the holy Agni Kund under starlit canopies, bound by ancient Sanskrit hymns and lifelong vows.",
      descriptionHi: "अग्नि को साक्षी मानकर लिए गए सात पवित्र वचन, जो दो आत्माओं को एक धागे में पिरोते हैं।",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85",
      quote: "Seven steps. Seven lifetimes of shared dreams.",
    },
    {
      stage: "Chapter 05",
      stageHi: "अध्याय ०५",
      title: "The Emotional Vidaai",
      titleHi: "भावुक विदाई व नव-जीवन",
      description:
        "Tearful embraces with parents, showers of rice, and a gentle step into a brand new chapter of love.",
      descriptionHi: "माता-पिता के नम नयनों से मिले अनमोल आशीर्वाद और नए आशियाने की ओर पहला कदम।",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85",
      quote: "Love doesn't say goodbye; it multiplies into two homes.",
    },
  ],
  beforeAfter: {
    beforeImage:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=60&sat=-40&con=0", // desaturated / flat raw look
    afterImage:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=90", // rich gold tones
    title: "The Art of Master Color Retouching",
    subtitle: "From camera sensor RAW to high-fashion heirloom artwork. Drag the slider to witness our bespoke color grade.",
    rawLabel: "Direct Sensor RAW (Unprocessed)",
    editedLabel: "Signature Royal Grade (Final)",
  },
  packages: [
    {
      id: "silver",
      name: "Silver Heritage",
      tagline: "Essential wedding ritual coverage for intimate ceremonies.",
      startingPrice: "₹35,000",
      showStartingPrice: true,
      isPopular: false,
      features: [
        "1 Senior Traditional Photographer",
        "1 Full HD Videographer",
        "Coverage of Main Wedding Day (10 Hours)",
        "250+ Edited Master High-Res Photos",
        "Traditional Full-Length Video (USB Drive)",
        "Complimentary 20-Page Hardbound Photo Book",
      ],
      deliverables: ["Delivered in 21 Days", "High-Speed Cloud Gallery", "1 Hardbound Album"],
    },
    {
      id: "gold",
      name: "Gold Royal Suite",
      tagline: "Our most requested package for complete multi-day celebration.",
      startingPrice: "₹75,000",
      showStartingPrice: true,
      isPopular: true,
      features: [
        "1 Master Candid Photographer + 1 Traditional Photographer",
        "1 Cinematic Film Cinematographer + 1 Traditional Videographer",
        "2 Days Coverage (Haldi, Mehndi, Sangeet & Main Wedding)",
        "Cinematic Wedding Teaser (60s Reel) + Highlight Film (5-7 mins)",
        "Drone Aerial Coverage for Baraat & Jaymala",
        "1 Premium Velvet Acrylic Photobook (40 Sheets / 80 Pages)",
        "Complimentary Pre-Wedding Shoot with 20 Edits",
      ],
      deliverables: ["Delivered in 15 Days", "Custom Wooden USB Box", "Master Photo Cloud Backup"],
    },
    {
      id: "platinum",
      name: "Platinum Maharaja",
      tagline: "Ultra-luxury cinematic saga with bespoke team of master artists.",
      startingPrice: "₹1,35,000",
      showStartingPrice: true,
      isPopular: false,
      features: [
        "Lead Director Bhaskendra Prasad on-site personally",
        "Full 5-Member Crew: 2 Candid, 1 Traditional, 2 Cinematic Cinematographers",
        "3 Full Days Coverage (All Pre-Wedding Ceremonies + Reception)",
        "Bespoke 4K Cinema Feature Film (45-60 min) with licensed music",
        "Drone 4K 60fps cinematic coverage with dual operators",
        "2 Grand Royal Canvas Wall Frames (24x36 inch)",
        "2 Grand Acrylic Albums for Bride & Groom families",
        "Live Multi-Cam LED Wall streaming setup included",
      ],
      deliverables: ["Priority 10-Day Rush Delivery", "Handcrafted Leather Box", "Raw Footage Hard Drive"],
    },
  ],
  processSteps: [
    {
      step: "01",
      titleEn: "Initial Inquiry & Date Check",
      titleHi: "संपर्क व तारीख की पुष्टि",
      descEn: "Drop a WhatsApp message or submit your wedding date to verify slot availability.",
      descHi: "व्हाट्सएप या फॉर्म द्वारा तारीख बताएं और उपलब्धता की तुरंत जानकारी पाएं।",
      icon: "CalendarCheck",
    },
    {
      step: "02",
      titleEn: "Studio Meeting & Vision Alignment",
      titleHi: "मुलाकात व परामर्श",
      descEn: "Visit our Badi Khanjarpur studio for chai, browse real printed albums, and align on your vision.",
      descHi: "स्टूडियो पधारें, एल्बम सैंपल्स देखें और अपनी पसंद के अनुसार पैकेज तय करें।",
      icon: "Users",
    },
    {
      step: "03",
      titleEn: "Booking & Lock Your Date",
      titleHi: "बुकिंग व स्लॉट कन्फर्मेशन",
      descEn: "Lock your dates with transparent terms and an official booking receipt.",
      descHi: "पारदर्शी शर्तों व रसीद के साथ अपनी शादी की तारीख पक्की करें।",
      icon: "ShieldCheck",
    },
    {
      step: "04",
      titleEn: "The Grand Shoot",
      titleHi: "भव्य व सजीव शूटिंग",
      descEn: "Our discreet, professional crew arrives equipped with 4K cameras, gimbals, and dual backups.",
      descHi: "आधुनिक 4K कैमरा, गिम्बल व ड्रोन के साथ हमारी टीम हर रस्म को सजीव बनाती है।",
      icon: "Camera",
    },
    {
      step: "05",
      titleEn: "Precision Editing & Color Grading",
      titleHi: "एडिटिंग व कलर ग्रेडिंग",
      descEn: "Each photograph and cinema scene is carefully retouched, skin-toned, and soundtrack-synced.",
      descHi: "हर तस्वीर का नेचुरल स्किन रीटच और वीडियो का सिनेमाई कलर ग्रेडिंग।",
      icon: "Sparkles",
    },
    {
      step: "06",
      titleEn: "Heirloom Delivery",
      titleHi: "एल्बम व फ़िल्म्स डिलीवरी",
      descEn: "Receive your online high-res gallery, custom crystal USB, and luxurious velvet photobooks.",
      descHi: "सुंदर वेलवेट एल्बम, हाई-स्पीड क्लाउड लिंक व पेनड्राइव की सुरक्षित डिलीवरी।",
      icon: "PackageCheck",
    },
  ],
  testimonials: [
    {
      id: "t-1",
      coupleName: "Aditya & Swati Sinha",
      weddingType: "Grand Bihari Wedding",
      location: "Bhagalpur",
      quote:
        "Bhaskendra ji and his team treated us like family. Watching our wedding teaser made our parents cry happy tears. The colors, the candid smiles, and the video quality exceeded all our expectations!",
      quoteHi:
        "भास्केंद्र जी और उनकी टीम ने हमें परिवार जैसा सम्मान दिया। हमारा वेडिंग टीज़र देखकर माता-पिता की आंखों में खुशी के आंसू आ गए। हर तस्वीर लाजवाब है!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80",
      weddingDate: "December 2024",
    },
    {
      id: "t-2",
      coupleName: "Praveen & Riya Sharma",
      weddingType: "Pre-Wedding & Wedding Saga",
      location: "Badi Khanjarpur / Patna",
      quote:
        "From the sunset pre-wedding shoot by the river to the chaotic joyful Baraat, every single emotion was captured. The luxury acrylic album is stunning. Truly the best studio in town!",
      quoteHi:
        "प्री-वेडिंग से लेकर बारात तक, हर एक लम्हे को खूबसूरती से कैमरे में कैद किया। एक्रेलिक एल्बम की फिनिशिंग कमाल की है!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=400&q=80",
      weddingDate: "February 2025",
    },
    {
      id: "t-3",
      coupleName: "Dr. Manish & Dr. Neha",
      weddingType: "Traditional Mandap Wedding",
      location: "Bhagalpur",
      quote:
        "Their patience during the long night pheras and Vedic rituals was commendable. The matrimonial photos we took here earlier were also so tasteful. Highly recommended!",
      quoteHi:
        "पूरी रात की लंबी रस्मों में भी टीम की ऊर्जा और लगन देखने लायक थी। यहां लिए गए मैट्रिमोनियल पोर्ट्रेट्स भी बेहद शालीन थे!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80",
      weddingDate: "November 2024",
    },
  ],
  instagramPosts: [
    {
      id: "ig-1",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
      likes: "1,240",
      caption: "The queen on her sacred throne. Royal bridal moments at #BhaskendraPhotography ✨",
      link: "https://instagram.com/bhaskendra.photography",
    },
    {
      id: "ig-2",
      imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
      likes: "890",
      caption: "Turmeric glow and heartfelt giggles! The Haldi vibe is unmatched 💛",
      link: "https://instagram.com/bhaskendra.photography",
    },
    {
      id: "ig-3",
      imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
      likes: "2,150",
      caption: "A bond forged in sacred fire. Sneak peek from yesterday's royal wedding 💍",
      link: "https://instagram.com/bhaskendra.photography",
    },
    {
      id: "ig-4",
      imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
      likes: "1,670",
      caption: "Golden hour whispers along the riverbanks. Pre-wedding perfection 🌅",
      link: "https://instagram.com/bhaskendra.photography",
    },
  ],
  studioServicesCategories: [
    {
      id: "cat-photography",
      titleEn: "Wedding, Pre-Wedding & Matrimonial Photography",
      titleHi: "वेडिंग, प्री-वेडिंग व मैट्रिमोनियल फोटोग्राफी",
      iconName: "Camera",
      summaryEn: "Artistic portraiture, candid wedding rituals, and formal matrimony portfolios.",
      summaryHi: "शादी की रस्में, कपल शूट्स और शादी के रिश्ते के लिए विशिष्ट पोर्ट्रेट्स।",
      items: [
        {
          nameEn: "Matrimonial Portfolio Shoot",
          nameHi: "मैट्रिमोनियल बायोडाटा फ़ोटो",
          descEn: "Professional studio session with guidance on posture and expression for marriage biodata.",
          startingPrice: "₹499",
          popular: true,
        },
        {
          nameEn: "Candid Wedding Photography",
          nameHi: "कैंडिड वेडिंग फोटोग्राफी",
          descEn: "Artistic unposed storytelling with high-end prime lenses.",
          startingPrice: "₹18,000 / day",
          popular: true,
        },
        {
          nameEn: "Pre-Wedding Cinematic Shoot",
          nameHi: "प्री-वेडिंग शूट",
          descEn: "Outdoor romantic couple session with drone clips & photo edits.",
          startingPrice: "₹12,000",
        },
        {
          nameEn: "Traditional Stage & Mandap Photos",
          nameHi: "पारंपरिक स्टेज व मंडप फ़ोटो",
          descEn: "Comprehensive coverage of all family relatives and formal rituals.",
          startingPrice: "₹8,000 / event",
        },
      ],
    },
    {
      id: "cat-videography",
      titleEn: "Videography & Cinematic Video",
      titleHi: "वीडियोग्राफी व सिनेमैटिक वीडियो",
      iconName: "Video",
      summaryEn: "High-definition 4K video recording, drone shots, teasers, and full ritual archives.",
      summaryHi: "4K वीडियो, ड्रोन कैमरा, टीज़र और संपूर्ण रस्मों की रिकॉर्डिंग।",
      items: [
        {
          nameEn: "4K Cinematic Wedding Film",
          nameHi: "4K सिनेमाई वेडिंग फ़िल्म",
          descEn: "Gimbal stabilized footage, custom color grading, and licensed soundtrack.",
          startingPrice: "₹25,000",
          popular: true,
        },
        {
          nameEn: "Drone 4K Aerial Coverage",
          nameHi: "ड्रोन 4K एरियल कवरेज",
          descEn: "Licensed pilot capturing grand venue architecture, baraat, and fireworks.",
          startingPrice: "₹6,000 / session",
          popular: true,
        },
        {
          nameEn: "Traditional Full Video (HD/4K)",
          nameHi: "ट्रेडिशनल वीडियो रिकॉर्डिंग",
          descEn: "Complete unedited and edited archival video delivered on USB.",
          startingPrice: "₹9,000 / day",
        },
        {
          nameEn: "60-Second Instagram Teasers",
          nameHi: "इंस्टाग्राम रील व टीज़र",
          descEn: "Quick vertical & horizontal teasers delivered within 48 hours.",
          startingPrice: "₹3,500",
        },
      ],
    },
    {
      id: "cat-events",
      titleEn: "Event Management & Event Coverage",
      titleHi: "इवेंट मैनेजमेंट व कवरेज",
      iconName: "Calendar",
      summaryEn: "Complete photo and video solutions for birthdays, anniversaries, and corporate events.",
      summaryHi: "जन्मदिन, मुंडन, वर्षगांठ और कॉर्पोरेट आयोजनों का संपूर्ण प्रबंधन।",
      items: [
        {
          nameEn: "Birthday & Anniversary Coverage",
          nameHi: "जन्मदिन व वर्षगांठ कवरेज",
          descEn: "Cake cutting, candid guests, family groups, and quick photo delivery.",
          startingPrice: "₹4,500",
          popular: true,
        },
        {
          nameEn: "Upanayana (Janeu) & Mundan Coverage",
          nameHi: "जनेऊ व मुंडन संस्कार कवरेज",
          descEn: "Dedicated traditional photo and video for auspicious family sacraments.",
          startingPrice: "₹6,500",
        },
        {
          nameEn: "Live LED Wall Screening Setup",
          nameHi: "लाइव LED वॉल सेटअप",
          descEn: "Live camera mix broadcasted directly to venue LED screens.",
          startingPrice: "₹8,000",
        },
      ],
    },
    {
      id: "cat-frames",
      titleEn: "Photo Framing Shop",
      titleHi: "फ़ोटो फ़्रेमिंग शॉप (कस्टम फ़्रेम्स व कैनवास)",
      iconName: "Frame",
      summaryEn: "Custom wall frames, Italian moulding, acrylic blocks, collage frames, and canvas wraps.",
      summaryHi: "इटैलियन मोल्डिंग, एक्रेलिक फ़्रेम, कोलाज और कैनवास प्रिंट्स की विशाल वैरायटी।",
      items: [
        {
          nameEn: "Royal Italian Wooden Frames",
          nameHi: "रॉयल इटैलियन वुडन फ़्रेम",
          descEn: "Rich textured gold, teak, and antique gold frames for portraits.",
          startingPrice: "₹450 onwards",
          popular: true,
        },
        {
          nameEn: "High-Gloss Acrylic Wall Frames",
          nameHi: "ऐक्रेलिक ग्लास फ़्रेम",
          descEn: "Ultra-modern borderless frameless acrylic with floating mounts.",
          startingPrice: "₹1,200 onwards",
          popular: true,
        },
        {
          nameEn: "Artist Canvas Gallery Wraps",
          nameHi: "कैनवास वॉल आर्ट प्रिंट्स",
          descEn: "Archival cotton canvas stretched over seasoned pine wood frames.",
          startingPrice: "₹950 onwards",
        },
        {
          nameEn: "Custom Family Collage Frames",
          nameHi: "फैमिली कोलाज फ़्रेम्स",
          descEn: "Multi-photo layout designs with personalized names and wedding dates.",
          startingPrice: "₹750 onwards",
        },
      ],
    },
    {
      id: "cat-printing",
      titleEn: "Photo Printing, Albums & Lamination",
      titleHi: "फ़ोटो प्रिंटिंग, एल्बम्स व लेमिनेशन",
      iconName: "Printer",
      summaryEn: "Lab quality archival photo prints, velvet finish photobooks, and thermal lamination.",
      summaryHi: "लैब क्वालिटी फोटो प्रिंट, प्रीमियम वेडिंग एल्बम और थर्मल लेमिनेशन।",
      items: [
        {
          nameEn: "Velvet Matte Wedding Albums",
          nameHi: "प्रीमियम वेलवेट वेडिंग एल्बम",
          descEn: "Waterproof, tearproof featherweight sheets in padded velvet box.",
          startingPrice: "₹4,500 onwards",
          popular: true,
        },
        {
          nameEn: "High Gloss Lab Photo Prints",
          nameHi: "हाई ग्लॉस लैब प्रिंट्स",
          descEn: "Fuji/Kodak archival photo paper in 4x6, 5x7, 8x12, 12x18 and custom sizes.",
          startingPrice: "₹15 / print",
        },
        {
          nameEn: "Gloss / Matte Thermal Lamination",
          nameHi: "थर्मल लेमिनेशन",
          descEn: "Protective hot roller lamination for photos and official documents.",
          startingPrice: "₹20 onwards",
        },
      ],
    },
    {
      id: "cat-cafe",
      titleEn: "Online Cafe & Digital Utility Services",
      titleHi: "ऑनलाइन कैफ़े व सरकारी फॉर्म सुविधाएं",
      iconName: "Monitor",
      summaryEn: "Instant printouts, Xerox, online exam forms, passport photos, and digital services.",
      summaryHi: "ज़ेरॉक्स, प्रिंटआउट, पासपोर्ट साइज फ़ोटो, सरकारी व प्रतियोगी परीक्षाओं के ऑनलाइन फॉर्म।",
      items: [
        {
          nameEn: "Instant Passport & Visa Photos (8 / 16 / 32 Pcs)",
          nameHi: "इंस्टेंट पासपोर्ट फ़ोटो (5 मिनट में)",
          descEn: "White/blue background as per government & embassy specifications.",
          startingPrice: "₹50 (8 pcs)",
          popular: true,
        },
        {
          nameEn: "Color & B/W High-Speed Laser Xerox / Printout",
          nameHi: "ज़ेरॉक्स व लेज़र प्रिंटआउट",
          descEn: "Single & double side heavy GSM paper prints from WhatsApp/email/pen drive.",
          startingPrice: "₹2 / page",
          popular: true,
        },
        {
          nameEn: "Online Government Form Filling & Applications",
          nameHi: "ऑनलाइन फॉर्म व सरकारी आवेदन",
          descEn: "BPSC, SSC, Railway, Banking, Scholarship, Admission, and Job applications.",
          startingPrice: "₹50 / form",
          popular: true,
        },
        {
          nameEn: "Document Scanning, PDF Conversion & Lamination",
          nameHi: "डॉक्यूमेंट स्कैनिंग व PDF",
          descEn: "High-resolution 600 DPI scanning of certificates, land records, and marksheets.",
          startingPrice: "₹10 / doc",
        },
      ],
    },
  ],
  onlineCafeServices: [
    { name: "Instant Passport Photos (8 Pcs)", nameHi: "पासपोर्ट फ़ोटो (8 पीस)", category: "photo", estimatedTime: "5 mins", startingRate: "₹50" },
    { name: "Passport Photos (16 Pcs Pack)", nameHi: "पासपोर्ट फ़ोटो (16 पीस)", category: "photo", estimatedTime: "8 mins", startingRate: "₹80" },
    { name: "High-Speed B/W Xerox (A4)", nameHi: "ज़ेरॉक्स ब्लैक & व्हाइट", category: "print", estimatedTime: "Instant", startingRate: "₹2 / pg" },
    { name: "High-Res Color Printout (A4)", nameHi: "कलर प्रिंटआउट A4", category: "print", estimatedTime: "Instant", startingRate: "₹10 / pg" },
    { name: "Online Job & Exam Application", nameHi: "प्रतियोगी परीक्षा फॉर्म", category: "forms", estimatedTime: "15-20 mins", startingRate: "₹50-100" },
    { name: "College & School Admission Form", nameHi: "कॉलेज / स्कूल एडमिशन फॉर्म", category: "forms", estimatedTime: "15 mins", startingRate: "₹60" },
    { name: "High-Resolution Document Scan (PDF)", nameHi: "डॉक्यूमेंट स्कैनिंग (PDF)", category: "utility", estimatedTime: "2 mins", startingRate: "₹10 / doc" },
    { name: "A4 Hot Roller Thermal Lamination", nameHi: "थर्मल लेमिनेशन A4", category: "utility", estimatedTime: "3 mins", startingRate: "₹20" },
    { name: "PVC Aadhaar / ID Card Printing", nameHi: "PVC स्मार्ट कार्ड प्रिंट", category: "utility", estimatedTime: "10 mins", startingRate: "₹60" },
    { name: "Electricity & Utility Bill Payment", nameHi: "बिजली व यूटिलिटी बिल भुगतान", category: "forms", estimatedTime: "Instant", startingRate: "₹10 charge" },
    { name: "Resume & Biodata Creation & Print", nameHi: "बायोडाटा / रिज़्यूमे टाइपिंग", category: "forms", estimatedTime: "20 mins", startingRate: "₹100" },
    { name: "PAN Card Application & Correction", nameHi: "पैन कार्ड नया / संशोधन", category: "forms", estimatedTime: "15 mins", startingRate: "₹150" },
  ],
  rateCard: [
    {
      category: "Studio Portrait & Matrimonial",
      items: [
        { service: "Matrimonial Studio Shoot (2 Looks + 3 Edits)", rate: "₹499", unit: "per session" },
        { service: "Passport Photo Set (8 Photos + Digital Copy)", rate: "₹50", unit: "per set" },
        { service: "Visa Photo Specification (USA/UK/Schengen 4 Pcs)", rate: "₹100", unit: "per set" },
        { service: "Family Studio Portrait (8x12 Print Included)", rate: "₹650", unit: "per shoot" },
      ],
    },
    {
      category: "Frames & Canvas Printing",
      items: [
        { service: "Classic Glass Frame (8x12 Inch)", rate: "₹350", unit: "per piece" },
        { service: "Royal Italian Carved Frame (12x18 Inch)", rate: "₹750", unit: "per piece" },
        { service: "Borderless High-Gloss Acrylic Frame (16x24 Inch)", rate: "₹1,800", unit: "per piece" },
        { service: "Gallery Canvas Wrap (20x30 Inch)", rate: "₹2,200", unit: "per piece" },
        { service: "9-Photo Collage Frame (12x18 Inch)", rate: "₹850", unit: "per piece" },
      ],
    },
    {
      category: "Photobooks & Lab Prints",
      items: [
        { service: "Royal Velvet Photobook (30 Sheets / 60 Pages)", rate: "₹4,500", unit: "per album" },
        { service: "Acrylic Glass Cover Luxury Album (80 Pages)", rate: "₹7,500", unit: "per album" },
        { service: "Lab Gloss Photo Print (4x6 Inch)", rate: "₹10", unit: "per print" },
        { service: "Lab Gloss Photo Print (8x12 Inch)", rate: "₹60", unit: "per print" },
        { service: "Lab Gloss Photo Print (12x18 Inch)", rate: "₹150", unit: "per print" },
      ],
    },
    {
      category: "Online Cafe & Document Services",
      items: [
        { service: "Laser B/W Photocopy / Print", rate: "₹2", unit: "per side" },
        { service: "Full Color Inkjet / Laser Print (A4)", rate: "₹10", unit: "per page" },
        { service: "Thermal Hot Lamination (A4)", rate: "₹20", unit: "per sheet" },
        { service: "PVC Card Smart ID Print", rate: "₹60", unit: "per card" },
        { service: "Online Exam / Job Form Submission", rate: "₹50 - ₹100", unit: "per form" },
      ],
    },
  ],
  faqs: [
    {
      questionEn: "How early should we book our wedding dates with Bhaskendra Photography?",
      questionHi: "शादी की तारीख की बुकिंग कितने समय पहले करवानी चाहिए?",
      answerEn:
        "During prime wedding seasons (November to February and April to July), auspicious dates fill up very quickly. We recommend booking at least 2 to 4 months in advance to lock your date and guarantee our lead team.",
      answerHi:
        "शुभ लग्न के दिनों (नवंबर-फरवरी और अप्रैल-जुलाई) में तारीखें बहुत जल्दी बुक हो जाती हैं। हमारा सुझाव है कि कम से कम 2 से 4 महीने पहले अपनी तारीख लॉक करवा लें।",
      category: "Booking",
    },
    {
      questionEn: "What is Matrimonial Photography and what should I wear?",
      questionHi: "मैट्रिमोनियल फोटोग्राफी क्या है और इसमें क्या पहनना चाहिए?",
      answerEn:
        "Matrimonial photography is a specialized portrait session designed for marriage biodatas and matrimonial profiles. We suggest bringing one traditional attire (e.g. Kurta or Saree) and one semi-formal attire with clean, solid, pastel or jewel tones. We handle lighting and natural posture coaching.",
      answerHi:
        "यह शादी के बायोडाटा और प्रोफाइल के लिए विशेष फोटो सत्र है। आप एक पारंपरिक (कुर्ता या साड़ी) और एक फॉर्मल पोशाक ला सकते हैं। हम चेहरे की चमक और बैठने-खड़े होने के सहज अंदाज़ का पूरा मार्गदर्शन करते हैं।",
      category: "Services",
    },
    {
      questionEn: "Do you travel outside Badi Khanjarpur / Bhagalpur for destination weddings?",
      questionHi: "क्या आप भागलपुर से बाहर डेस्टिनेशन वेडिंग के लिए भी उपलब्ध हैं?",
      answerEn:
        "Yes! Our team regularly travels across Bihar, Jharkhand, West Bengal, and across India for destination weddings and pre-wedding shoots. Travel and local accommodation are simply added to the package at actuals.",
      answerHi:
        "जी हाँ! हमारी टीम पूरे बिहार, झारखंड, पश्चिम बंगाल और देशभर में डेस्टिनेशन वेडिंग्स और प्री-वेडिंग शूट्स के लिए यात्रा करती है।",
      category: "Travel",
    },
    {
      questionEn: "How long does it take to deliver wedding photos and cinematic films?",
      questionHi: "शादी की फोटो और वीडियो कितने दिनों में मिल जाती है?",
      answerEn:
        "We deliver 20-30 sneak peek photos within 48-72 hours so you can share on social media. The complete high-resolution curated gallery and teaser video are delivered in 14 to 21 days, and printed luxury albums in 3 to 4 weeks after your photo selection.",
      answerHi:
        "48-72 घंटों में 20-30 चुनिंदा फ़ोटो सोशल मीडिया के लिए मिल जाते हैं। संपूर्ण एडिटेड फ़ोटो और वीडियो 14 से 21 दिनों में और चुने हुए एल्बम 3-4 हफ्तों में तैयार हो जाते हैं।",
      category: "Delivery",
    },
    {
      questionEn: "Can I get passport photos and Xerox done immediately without prior appointment?",
      questionHi: "क्या पासपोर्ट फ़ोटो और ज़ेरॉक्स के लिए पहले से अपॉइंटमेंट लेना पड़ता है?",
      answerEn:
        "No appointment is required! Just walk into our studio at Badi Khanjarpur anytime between 9:00 AM and 9:30 PM. Passport photos are handed over in 5 minutes, and online cafe services like Xerox, scanning, and form submissions are handled instantly.",
      answerHi:
        "बिल्कुल नहीं! आप सुबह 9:00 से रात 9:30 के बीच कभी भी बड़ी खंजरपुर स्थित स्टूडियो पधार सकते हैं। 5 मिनट में पासपोर्ट फोटो और तुरंत ज़ेरॉक्स की सुविधा उपलब्ध है।",
      category: "Studio",
    },
    {
      questionEn: "Can I bring my own photos on a phone or pen drive for framing?",
      questionHi: "क्या मैं अपने मोबाइल या पेनड्राइव से फोटो लाकर फ़्रेम करवा सकता हूँ?",
      answerEn:
        "Yes! You can share your photos via WhatsApp or bring a pen drive. We offer professional resolution upscaling, color correction, and provide hundreds of frame moulds (wood, Italian, acrylic, canvas) to choose from in our shop.",
      answerHi:
        "हाँ, आप व्हाट्सएप या पेनड्राइव में फोटो ला सकते हैं। हम उसकी क्वालिटी बेहतर कर के मनपसंद इटैलियन या वुडन फ्रेम में तैयार कर देते हैं।",
      category: "Framing",
    },
  ],
  bookedDates: [
    "2026-11-20",
    "2026-11-21",
    "2026-11-25",
    "2026-11-28",
    "2026-12-04",
    "2026-12-08",
    "2026-12-11",
    "2026-12-14",
    "2026-12-15",
    "2027-01-18",
    "2027-01-22",
    "2027-02-05",
    "2027-02-14",
    "2027-02-18",
  ],
};

