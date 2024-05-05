import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-box">
          <div>
          <div className="footer-left">
            <div className="logo">
              <div className="rec1"></div>
              <div className="rec2"></div>
            </div>
            <h3>DataWareHouse</h3>
          </div>

            <p>Warehouse Society, 234 Bahagia Ave Street PRBW 29281</p>
            <p>info@warehouse.project 1-232-3434 (Main)</p>
          </div>
          <div className="footer-right">
            <ul className="footer-list">About
              <li className="footer-item">Profile</li>
              <li className="footer-item">Features</li>
              <li className="footer-item">Careers</li>
              <li className="footer-item">DW News</li>
            </ul>

            <ul className="footer-list">Help
              <li className="footer-item">Support</li>
              <li className="footer-item">Sign up</li>
              <li className="footer-item">Guide</li>
              <li className="footer-item">Reports</li>
              <li className="footer-item">Q&A</li>
            </ul>

            <ul className="footer-list">
              Social Media
            </ul>


          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
