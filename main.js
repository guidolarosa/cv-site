const pug = require('pug');
const fs = require('fs-extra');
const sass = require('sass');
const browserify = require('browserify');
const minify = require('@node-minify/core')
const cleanCSS = require('@node-minify/clean-css')

const workData = require('./src/data/work-data.js');
const socialLinks = require('./src/data/social-links.js');
const personalInfo = require('./src/data/personal-info.js');
const skills = require('./src/data/skills');
const languages = require('./src/data/languages');
const education = require('./src/data/education');

fs.mkdirSync('./public', {recursive: true});

const sassResult = sass.compile('./src/scss/stylesheet.scss');
fs.writeFileSync(
  './public/stylesheet.css', 
  sassResult.css,
);

const renderPug = (pageName) => {
  fs.writeFileSync(
    './public/' + pageName + '.html', 
    pug.renderFile('./src/pug/' + pageName + '.pug', {
      workData: workData,
      socialLinks: socialLinks,
      personalInfo: personalInfo,
      skills: skills,
      languages: languages,
      education: education
    })
  );
}

minify({
  compressor: cleanCSS,
  input: './public/stylesheet.css',
  output: './public/stylesheet.css',
  callback: () => {}
})

renderPug('index');
renderPug('cover-letter');

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