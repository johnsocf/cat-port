import {injectGlobal} from 'styled-components';
import {myrtle} from './variables'

/* eslint-disable */
injectGlobal `
  @import url('https://fonts.googleapis.com/css?family=Anonymous+Pro');
  
  body {
    font-family: 'Anonymous Pro', monospace;
    font-size: 30px;
    color: ${myrtle};
  }
  
  h1, h2, h3 {
    font-weight: normal;
    margin: 0px;
  }
  
`
