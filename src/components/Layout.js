import React from 'react'
import Header from './Header';
// import Time from './Time';

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Time /> */}
      <Header />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
