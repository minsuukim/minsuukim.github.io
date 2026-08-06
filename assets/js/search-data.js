// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and navigation menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "(*) denote for equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-i-received-an-internship-offer-from-prof-yoshua-bengio-at-mila-quebec-ai-institute",
          title: 'I received an internship offer from Prof. Yoshua Bengio at Mila – Quebec...',
          description: "",
          section: "News",},{id: "news-i-received-the-qualcomm-innovative-fellowship-award",
          title: 'I received the Qualcomm Innovative Fellowship Award.',
          description: "",
          section: "News",},{id: "news-i-received-a-postdoctoral-offer-from-prof-yoshua-bengio-at-mila-quebec-ai-institute",
          title: 'I received a postdoctoral offer from Prof. Yoshua Bengio at Mila – Quebec...',
          description: "",
          section: "News",},{id: "news-four-main-track-papers-and-six-workshop-papers-were-accepted-to-neurips-2024",
          title: 'Four main-track papers and six workshop papers were accepted to NeurIPS 2024!',
          description: "",
          section: "News",},{id: "news-four-papers-adaptive-teachers-rxnflow-mofflow-and-red-teaming-were-accepted-to-iclr-2025",
          title: 'Four papers—Adaptive Teachers, RxnFlow, MOFFlow, and Red-Teaming—were accepted to ICLR 2025!',
          description: "",
          section: "News",},{id: "news-our-paper-gfacs-was-accepted-to-aistats-2025",
          title: 'Our paper, GFACS, was accepted to AISTATS 2025.',
          description: "",
          section: "News",},{id: "news-i-received-my-ph-d-from-kaist-with-the-kaist-presidential-best-ph-d-thesis-award",
          title: 'I received my Ph.D. from KAIST with the KAIST Presidential Best Ph.D. Thesis...',
          description: "",
          section: "News",},{id: "news-i-was-selected-for-the-jang-yeong-sil-fellowship-award",
          title: 'I was selected for the Jang Yeong SIL Fellowship Award.',
          description: "",
          section: "News",},{id: "news-two-papers-delta-cs-and-ods-were-accepted-to-icml-2025",
          title: 'Two papers—Delta-CS and ODS—were accepted to ICML 2025!',
          description: "",
          section: "News",},{id: "news-four-papers-sgds-tba-egm-and-abcd-were-accepted-to-neurips-2025",
          title: 'Four papers—SGDS, TBA, EGM, and ABCD—were accepted to NeurIPS 2025!',
          description: "",
          section: "News",},{id: "news-two-papers-lvi-and-dav-were-accepted-to-iclr-2026",
          title: 'Two papers—LVI and DAV—were accepted to ICLR 2026!',
          description: "",
          section: "News",},{id: "news-two-papers-active-attacks-and-s3gfn-were-accepted-to-icml-2026",
          title: 'Two papers—Active Attacks and S3GFN—were accepted to ICML 2026!',
          description: "",
          section: "News",},{id: "news-our-paper-self-evolving-curriculum-for-llm-reasoning-was-accepted-to-colm-2026",
          title: 'Our paper, Self-Evolving Curriculum for LLM Reasoning, was accepted to COLM 2026!',
          description: "",
          section: "News",},{id: "news-i-joined-microsoft-frontier-tuning-as-a-senior-research-scientist",
          title: 'I joined Microsoft Frontier Tuning as a Senior Research Scientist.',
          description: "",
          section: "News",},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/minsu-kim-5693061a5", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=VvyLuhAAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
