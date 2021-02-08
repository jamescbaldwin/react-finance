import React from 'react';

function Wrapper({ children }) {
  return (
      <div class="wrapper" className="wrapper">
        { children }
      </div>
  );
}

export default Wrapper;