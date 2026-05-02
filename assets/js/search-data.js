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
        },{id: "news-i-ve-received-an-internship-offer-from-professor-yoshua-bengio-at-mila-quebec-ai-institute",
          title: 'I’ve received an internship offer from Professor Yoshua Bengio at Mila – Quebec...',
          description: "",
          section: "News",},{id: "news-i-ve-received-qualcomm-innovative-fellowship-award",
          title: 'I’ve received Qualcomm Innovative Fellowship Award.',
          description: "",
          section: "News",},{id: "news-i-ve-received-an-postdoc-offer-from-professor-yoshua-bengio-at-mila-quebec-ai-institute",
          title: 'I’ve received an postdoc offer from Professor Yoshua Bengio at Mila – Quebec...',
          description: "",
          section: "News",},{id: "news-4-main-track-papers-and-6-workshop-papers-are-accepted-at-neurips-2024",
          title: '4 main track papers and 6 workshop papers are accepted at NeurIPS 2024!...',
          description: "",
          section: "News",},{id: "news-4-papers-adaptive-teachers-rxnflow-mofflow-and-red-teaming-are-accepted-at-iclr-2025",
          title: '4 papers (Adaptive Teachers, RxnFlow, MOFFlow, and red-teaming) are accepted at ICLR 2025!...',
          description: "",
          section: "News",},{id: "news-a-paper-gfacs-is-accepted-at-aistats-2025",
          title: 'A paper (GFACS) is accepted at AISTATS 2025.',
          description: "",
          section: "News",},{id: "news-i-got-ph-d-degree-with-the-kaist-presidential-best-ph-d-thesis-award",
          title: 'I got Ph.D degree with the KAIST presidential best Ph.D. thesis award.',
          description: "",
          section: "News",},{id: "news-i-ve-selected-jang-yeong-sil-fellowship-award",
          title: 'I’ve selected Jang Yeong SIL Fellowship Award.',
          description: "",
          section: "News",},{id: "news-2-papers-delta-cs-and-ods-are-accepted-at-icml-2025",
          title: '2 papers (Delta-CS and ODS) are accepted at ICML 2025!',
          description: "",
          section: "News",},{id: "news-4-papers-sgds-tba-egm-and-abcd-are-accepted-at-neurips-2025",
          title: '4 papers (SGDS, TBA, EGM, and ABCD) are accepted at NeurIPS 2025!',
          description: "",
          section: "News",},{id: "news-2-papers-lvi-and-dav-are-accepted-at-iclr-2026",
          title: '2 papers (LVI and DAV) are accepted at ICLR 2026!',
          description: "",
          section: "News",},{id: "news-2-papers-active-attacks-and-s3gfn-are-accepted-at-icml-2026",
          title: '2 papers (Active Attacks and S3GFN) are accepted at ICML 2026!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%6E%73%75%6B%69%6D.%61%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
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
