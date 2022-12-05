const pug = require('pug');
const fs = require('fs-extra');
const sass = require('sass');
const browserify = require('browserify');

const workData = require('./src/data/work-data.js');
const socialLinks = require('./src/data/social-links.js');
const personalInfo = require('./src/data/personal-info.js');
const skills = require('./src/data/skills');

fs.mkdirSync('./public', {recursive: true});

const sassResult = sass.compile('./src/scss/stylesheet.scss');
fs.writeFileSync(
  './public/stylesheet.css', 
  sassResult.css
);

fs.writeFileSync(
  './public/index.html', 
  pug.renderFile('./src/pug/index.pug', {
    workData: workData,
    socialLinks: socialLinks,
    personalInfo: personalInfo,
    skills: skills
  })
);

const b = browserify();
b.add('./src/js/main.js');
b.bundle((err, buf) => {
  if (err) throw err;
  let result = buf.toString();
  fs.writeFileSync(
    './public/main.js', 
    result
  );
})

fs.copySync('./src/fonts', './public/fonts');
fs.copySync('./src/img', './public/img');

// process.exit();