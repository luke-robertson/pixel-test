
  import { storiesOf } from '@storybook/react';
  import * as React from 'react';
  import App from '../App';

  storiesOf('App eager', module)
    .add('main app eager', () => <App />)
  
  