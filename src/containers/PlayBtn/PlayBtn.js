import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';

export default function PlayBtn({hover, ...rest}) {
  return (
  <Motion style={{offset: spring(hover?0:363)}}>
    {({offset}) =>
      <svg width='109' height='121' viewBox='0 0 109 121' xmlns='http://www.w3.org/2000/svg'  {...rest}>
        <g id='Page-1' fill='none' fillRule='evenodd'>
          <polygon
            strokeDasharray={363}
            strokeDashoffset={offset}
            id='Triangle'
            stroke='#1D1749'
            points='108 60.5 1 120 1 1'/>
        </g>
      </svg>
    }
  </Motion>
  );
}

