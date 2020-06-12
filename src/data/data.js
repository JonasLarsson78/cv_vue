export const data = {
  personalData: {
    name: 'Jonas Larsson',
    title: 'Webbutvecklare',
    image: 'https://jonas78dev-5798.restdb.io/media/5e6688809ce53e0400013216/',
    contacts: [
      { type: 'webpage', value: 'jlarsson.nu' },
      { type: 'email', value: 'jl.7804@gmail.com' },
      { type: 'phone', value: '0706444922' },

      { type: 'location', value: 'Helsingborg' },
      {
        type: 'linkedin',
        value: 'linkedin.com/in/jonlarsson',
      },
      { type: 'github', value: 'github.com/JonasLarsson78' },
    ],
  },
  sections: [
    {
      title: 'Karriärprofil',
      content:
        'Sen när jag var barn har jag alltid velat bli webbutvecklare. Nu tror jag att jag är det. Har just nu tagit examen på en tvåårig YH i Helsingborg som gjort att jag nu är Frontend utvecklare. Min kompetens är JavaScript, React.js och Vue.js men även lite Backend med Node.js och Express.js. Ser nu framemot att få jobba med min kompetens i ert företag för att kunna utvecklas både som person och få mer erfarenheter.',
      icon: 'usertie',
    },
    {
      title: 'Utbildning',
      icon: 'graduation',
      items: [
        {
          title: 'Frontend Utvecklare YH',
          authority: 'EC Utbildning',
          authorityWebSite:
            'https://www.ecutbildning.se/utbildningar/frontend-utvecklare/',
          rightSide: '2018 - 2020',
          certificate:
            'https://jonas78dev-5798.restdb.io/media/5edfd2ae498ad76800019dd8',
          descriptionTags: [
            'React.js',
            'JavaScript',
            'Git',
            'HTML',
            'CSS',
            'UX-Design',
            'Node.js',
            'Agila-metoder',
            'Examensarbete',
            'LIA1',
            'LIA2',
          ],
        },
        {
          title: 'Webbdesign',
          authority: 'Helsingborgs kommun',
          rightSide: '2000 - 2001',
        },
        {
          title: 'Elektronik Data',
          authority: 'Rönnowskaskolan',
          rightSide: '1997 - 1999',
        },
      ],
    },
    {
      title: 'Arbetslivserfarenhet',
      icon: 'archive',
      items: [
        {
          title: 'Frontend Utvecklare',
          company: 'Sogeti Skåne Helsingborg',
          description: 'Praktik(LIA2)',
          companyWebSite: 'https://sogeti.se',
          companyMeta: '',
          datesBetween: '2020.03 - 2020.05',
          descriptionTags: [
            'Vue.js',
            'Jira',
            'JavaScript',
            'Azure DevOps',
            'Node.js',
            'Git',
          ],
        },
        {
          title: 'Frontend Utvecklare',
          company: 'Sogeti Skåne Helsingborg',
          description: 'Praktik(LIA1)',
          companyWebSite: 'https://sogeti.se',
          companyMeta: '',
          datesBetween: '2019.09 - 2019.12',
          descriptionTags: [
            'React.js',
            'JavaScript',
            'Matrial UI',
            'Axios',
            'ArcGis',
            'Azure DevOps',
          ],
        },
        {
          title: 'Budbilsförare',
          company: 'Schenker Åker AB',
          description: 'Arbetamed att köra ut paket.',
          companyWebSite: 'https://www.dbschenker.com/se-sv',
          companyMeta: '',
          datesBetween: '2017.03 - 2017.12',
          descriptionTags: ['Pakethantering', 'Köra bil', 'GPS'],
        },
        {
          title: 'Egenföretagare',
          company: 'Lemé Frisörgrossist AB',
          description: 'Frisörgrossist',
          datesBetween: '2009 - 2016',
          descriptionTags: [
            'Hårfärg',
            'Saxar',
            'Schampo',
            'Hårfön',
            'Klippmaskiner',
            'mm',
          ],
        },
        {
          title: 'Budbilsförare',
          company: 'Hemmalivs AB',
          description: 'Matkassar online.',
          datesBetween: '2007 - 2008',
          descriptionTags: ['Matkassar', 'Budbil'],
        },
      ],
    },
    {
      title: 'Referenser',
      groups: [
        {
          sectionHeader: 'Sogeti',
          description: 'LIA 1',
          items: [
            {
              name: 'Inayat Majad',
              title: 'Webbutvecklare',
              url: 'https://www.sogeti.se',
              linkedin: 'https://www.linkedin.com/in/majad-in',
              email: 'majad.inayat@sogeti.se',
            },
          ],
        },
        {
          sectionHeader: 'Sogeti',
          description: 'LIA 2',
          items: [
            {
              name: 'Alexander Persson',
              title: 'Fullstack utvecklare',
              url: 'https://www.sogeti.se',
              linkedin: 'https://www.linkedin.com/in/alexanderpersson',
              email: 'alexander.persson@sogeti.se',
              text:
                '"Jonas Larsson är en jordnära utvecklare som dels är grym på css och javascript. Han har under de senaste 12 veckorna varit på praktik i mitt team där han fått lära sig lite vue.js, mongodb samt google functions. Han har varit involverad i att utveckla authentication i appen vi bygger - vilket han löst på ett snyggt sätt."',
            },
          ],
        },
      ],
    },
    {
      title: 'Språk',
      icon: 'language',
      items: ['Svenska', 'Engelska'],
    },
    {
      type: 'tag-list',
      title: 'Färdigheter',
      icon: 'rocket',
      items: [
        'HTML',
        'React.js',
        'Git',
        'Context API',
        'JavaScript',
        'CSS',
        'CMS',
        'Node.js',
        'Express.js',
        'UX-Design',
        'Agil / Scrum',
        'Vue.js',
        'Vuex',
        'Firebase',
        'Mongo DB',
      ],
    },
    {
      title: 'Hobbys & Intressen',
      icon: 'cubes',
      items: ['Teknik', 'Film/Serier', 'Trädgård', 'Familj/Vänner'],
    },
  ],
};
