import { useNavigate } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  const nav = useNavigate();

  return (
    <>
      <header className="header">
        <div className="header-items">
          <div className="logo">
            <div className="rec1"></div>
            <div className="rec2"></div>
          </div>

          {localStorage.getItem("key") !== null ? (
            <div className="button-items">
              <button className="button" onClick={() => nav("/profile")}>Profile</button>
              <button className="button" onClick={() => {
                localStorage.clear();
                nav("/")
              }}>Logout</button>
            </div>
          ) : (
            <div className="button-items">
              <button className="button" onClick={()=>nav("/sign-in")}>Sign In</button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
