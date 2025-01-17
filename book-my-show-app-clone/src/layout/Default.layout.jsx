import React from 'react'

const DefaultLayoutHoc =
  (ParentComponent) =>
  ({ ...Props }) => {
    return (
      <>
        {/* <NavbarComponents /> */}
        <ParentComponent {...Props} />
        <div>Footer</div>
      </>
    );
  };

export default DefaultLayoutHoc
