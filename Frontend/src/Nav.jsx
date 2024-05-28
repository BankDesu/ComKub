import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import comkub from "./assets/comkub.png";

function Nav() {
  const navigate = useNavigate();

  const handleAccountClick = async () => {
    try {
      const response = await axios.get('/api/check-login', { withCredentials: true });
      if (response.data.loggedIn) {
        navigate('/account');
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
      navigate('/login'); // Default to login on error
    }
  };

  return (
    <>
      <nav>
        <div className="flex-start">
          <Link to="/">
            <img className="comkub" src={comkub} />
          </Link>
          <Link to="/article" className="article">
            <img
              className="article-img"
              src="https://icons.veryicon.com/png/o/miscellaneous/shaanxi-left-column-icon/article-management-3.png"
            />
          </Link>
          <Link to="/review" className="review">
            <img className="review-img" src="https://cdn-icons-png.flaticon.com/512/2701/2701190.png" />
          </Link>
        </div>

        <div className="flex-end">
          <div className="darkmode-section">
            <button className="darkmode-btn">
              <img className="darkmode-icon" src="https://www.svgrepo.com/show/315691/dark-mode.svg" />
            </button>
          </div>
          <div className="account-section">
            <button className="account-btn" onClick={handleAccountClick}>
              <img className="account-icon" src="https://www.svgrepo.com/show/456992/account.svg" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
