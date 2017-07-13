import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MainView1 } from './views/mainView';
// require('./css/styles.css');
import './css/styles.css';


 // import greeting from './views/test';
 //
 // console.log(greeting);

ReactDOM.render(
          <MainView1/>,
          document.getElementById("appView")
);
