import React from 'react';
import './Banner.scss'
const Banner = ({show}) => {
  return (
    <>
      <section className='container-center banner banner-sign-up'>
        {show && <>{show}</>}
      </section>
    </>
  );
};

export default Banner;