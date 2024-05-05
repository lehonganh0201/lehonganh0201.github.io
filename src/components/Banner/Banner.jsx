

import './Banner.scss'
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-items">
          <div className="banner-content">
            <h1>Save your data storage here.</h1>
            <p className='desc banner-desc'>
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </p>
            <button className="button button-banner">Learn more</button>
          </div>
          <div className="banner-img">
            <img src={"https://s3-alpha-sig.figma.com/img/b141/5dac/039cbccbb3a55ae069a3291f512521c8?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYbVe4o2obS9HEguxT9h0Aik7-3uqYR7wre-~Y30B97~JQSAO-fL9gsh6CZZ8P86HDc6gFfhuIIiyMjATUmtUjeV9qVc1KpAJe9yC4ZxqxCGqxy8e2nQrp4RrpcYOqGQ2cLAc53j6V6Mms3WYlhMOblff1YFfVf-BoT~2b~wxF4I0IZ~EmH6WnuYSFh~bcgjBRb7LkN9txm3xa3O3NblGsXIYpFwMhL8HZFCYRDSJqubZgT1wGXP4MYvP7J~nF46iCCIATW~UNhGOmFilfBWCuQ4uxk5kfhDaztUymFBzGmOZMTXTvXiBhjxaFsBWp1xfVsb2zUQR~bWEfqBPWywnw__"} alt="this-is-banner-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
