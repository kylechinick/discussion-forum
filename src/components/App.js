import React from 'react';
import Header from './Header';
import PostControl from './PostControl';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className='contentStyle'>
        <PostControl />
        <footer>
          <div className='footer-hr'></div>

          <p>This site was designed and built by THC. Sorta.</p>
          <p className='micro-font'>Copyright 2022</p>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
