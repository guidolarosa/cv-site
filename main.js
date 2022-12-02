const pug = require('pug');
const fs = require('fs');

const workData = [
  {
    company: 'Coyote Web Studio',
    title: 'Frontend Developer • UI / UX Developer',
    period: '2020 - Present',
    detail: [
      'I created Coyote Web Studio once I started collaborating with other people on my freelance projects. I needed to present the work I\'ve been doing in a way that reflected the collaborative and flexible dynamic we offer to our clients.',
      'We work mainly with Entrecasa Studio, a design studio who has clients mainly related to the Web3 landscape, like API3, Hardhat, DXDao, Swapr, etc.'
    ]
  },
  {
    company: 'Altimetrik',
    title: 'Frontend Developer',
    period: 'Jul 2021 - Sep 2021',
    detail: [
      'Working with Altimetrik was a short experience. I was assigned to work with the company Ancestry doing React work, but I ended up using a poorly designed website builder and 0 code all the time I was there. Management acknowledged the problem but there was nothing they could do. I resigned.'
    ]
  },
  {
    company: 'Cognizant / Softvision',
    title: 'Frontend Developer',
    period: 'Nov 2021 - jul 2021',
    detail: [
      'I worked with a large international team of developers and engineers. This gave me a world-class level experience in a industry giant such as Cognizant, and working with a highly reputable client, EY.'
    ]
  },
  {
    company: 'AdCap / Banza',
    title: 'Frontend Developer',
    period: 'Dec 2019 - Jul 2020',
    detail: [
      'AdCap is a financial and investment company that has offices in Argentina, USA, Mexico, Colombia and Perú'
    ]
  },
  {
    company: 'Branding Agatiello',
    title: 'Frontend Developer',
    period: 'Dec 2019 - Jul 2020',
    detail: [
      'I offered my frontend development services to Branding Agatiello and we started a fruitful collaboration making marketing websites for the Agency\'s clients'
    ]
  },

]

fs.writeFileSync(
  'index.html', 
  pug.renderFile('./src/pug/index.pug', {
    workData: workData
  })
);