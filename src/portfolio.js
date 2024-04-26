const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Deiva Sivam',
  role: 'Front End Engineer',
  description:
    'Passionate Front-End Developer with a strong foundation in Computer Science. Committed to creating engaging and user-friendly web applications using React & Angular. Seeking challenging opportunities to contribute and expand my skills.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/deiva-sivam/',
    github: 'https://github.com/asdeiva',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Typing Speed Tester',
    description:
      'Implemented a multimode typing test website with the ability to save results for better analysis.',
    stack: ['Material UI', 'Javascript', 'React','Firebase'],
    sourceCode: 'https://github.com/asdeiva/type-speed-tester-react',
    livePreview: 'https://typingspeedtester-react.netlify.app/',
  },
  {
    name: 'Crypto-traker-react',
    description:
      'Developed and deployed a user-friendly Crypto Tracker Website for real-time cryptocurrency tracking and API integration.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/asdeiva/crypto-traker-react',
    livePreview: 'https://crypto-traker-react.netlify.app/',
  },
  {
    name: 'Migration Excursion',
    description:
      'The Migration Excursion travel dashboard, built using basic HTML and CSS, offers a user-friendly interface.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://migrationexcursion.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Angular',
  'Ionic',
  'React',
  'RxJx',
  'SCSS',
  'Angular Material',
  'Material UI',
  'Git',
  'CI/CD'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'asdeiva@gmail.com',
}

export { header, about, projects, skills, contact }
