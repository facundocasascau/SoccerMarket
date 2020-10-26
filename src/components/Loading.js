import React from 'react';
import Ball from './multimedia/ball.svg';
import './css/loading.css';

function Loading() {
  return (
    <div>
      <img className="rotate-scale-down loadingIcon" src={Ball} />
    </div>
    );
}


export default Loading;