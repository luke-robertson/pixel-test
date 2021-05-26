var randomWords = require('random-words');
var fs = require('fs');

const genFile = (name) => {
  const fileText = `
  import { storiesOf } from '@storybook/react';
  import * as React from 'react';
  import App from '../App';

  storiesOf('App ${name}', module)
    .add('main app ${name}', () => <App />)
  
  `;
  return fileText;
};

const run = () => {

  const names = randomWords(1000);

  for (const name of names) {
    fs.writeFileSync(`./src/stories/${name}.stories.tsx`, genFile(name), function (err, data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    });
  }
  
};

run();
