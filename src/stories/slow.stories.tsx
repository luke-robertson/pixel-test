
  import { storiesOf } from '@storybook/react';
  import * as React from 'react';
  import App from '../App';

  storiesOf('App slow', module)
    .add('main app slow', () => <App />)
  
  