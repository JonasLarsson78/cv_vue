export default {
  personalData: {
    name: 'Jonas Larsson',
    title: 'Webbutvecklare',
    image: 'https://jonas78dev-5798.restdb.io/media/5e6688809ce53e0400013216/',
    contacts: [
      { type: 'webpage', value: 'jlarsson.nu' },
      { type: 'email', value: 'jl.7804@gmail.com' },
      { type: 'phone', value: '0706444922' },

      {
        type: 'location',
        value: {
          city: 'Helsingborg',
          address: 'Lägervägen',
          nr: '23A',
          zip: '25456',
          url: 'https://www.google.se/maps/place/',
        },
      },
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
        'Sen när jag var barn har jag alltid velat bli webbutvecklare. Nu är jag det. Jag tog examen på en tvåårig YH (Frontend utvecklare) i Helsingborg. Min kompetens är JavaScript, React.js och Vue.js men även lite Backend med Node.js och Express.js. Jobbar just nu på ett jämförelse företag som systemutvecklare där jag trivs mycket bra men har alltid ett öga öppet för nya utmaningar.',
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
            'https://ecutbildning.se/utbildningar/frontendutvecklare/?location=1697',
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
          title: 'System Utvecklare',
          company: 'Zmarta Group Ängelholm',
          description: 'Webbutvekling',
          companyWebSite: 'https://zmarta.se',
          companyMeta: '',
          datesBetween: '2020.03 - Nuvarande',
          descriptionTags: [
            'Vue.js',
            'Jira',
            'JavaScript',
            'GitLab',
            'Node.js',
            'Git',
          ],
        },
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
            'Hårfön',
            'Klippmaskiner',
          ],
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
