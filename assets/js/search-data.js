// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "(*) denote for equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "CV up-to-date for 2025.07.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-llm-시대의-베이지안-머신러닝과-gflownet",
      
        title: "LLM 시대의 베이지안 머신러닝과 GFlowNet",
      
      description: "How will Bayesian machine learning evolve in the era of LLMs? Discover how GFlowNet may hold the key to unlocking its full potential.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/distill/";
        
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
          section: "News",},{id: "news-4-papers-are-accepted-at-iclr-2025",
          title: '4 papers are accepted at ICLR 2025!',
          description: "",
          section: "News",},{id: "news-a-paper-is-accepted-at-aistats-2025",
          title: 'A paper is accepted at AISTATS 2025',
          description: "",
          section: "News",},{id: "news-i-got-ph-d-degree-with-the-kaist-presidential-best-ph-d-thesis-award",
          title: 'I got Ph.D degree with the KAIST presidential best Ph.D. thesis award.',
          description: "",
          section: "News",},{id: "news-i-ve-selected-jang-yeong-sil-fellowship-award",
          title: 'I’ve selected Jang Yeong SIL Fellowship Award.',
          description: "",
          section: "News",},{id: "news-2-papers-are-accepted-at-icml-2025",
          title: '2 papers are accepted at ICML 2025!',
          description: "",
          section: "News",},{id: "news-4-papers-are-accepted-at-neurips-2025",
          title: '4 papers are accepted at NeurIPS 2025!',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%6E%73%75.%6B%69%6D@%6D%69%6C%61.%71%75%65%62%65%63", "_blank");
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
