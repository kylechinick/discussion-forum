import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: 'rgb(237, 112, 45)',
    paddingLeft: '.5rem',
  };
  return (
    <React.Fragment>
      <div style={headerStyle}>
        <h1>DoodleNews</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;
