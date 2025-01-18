import React from 'react'
import Navbar from '../components/Navbar/Navbar.Component';

const DefaultLayoutHoc =
  (ParentComponent) =>
  ({ ...Props }) => {
    return (
      <>
        <Navbar />
        <ParentComponent {...Props} />
        <div>Footer</div>
      </>
    );
  };

export default DefaultLayoutHoc
