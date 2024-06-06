import comkub from "./assets/comkub.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="bg-zinc-900 w-full h-12 flex flex-row justify-between sticky top-0 drop-shadow-custom z-50">
        <div className="flex-start flex items-center">
          <Link to="/">
            <img
              className="comkub mt-2 mr-9 ml-12 pl-8 h-8 transition-transform duration-150 hover:transform hover:scale-110"
              src={comkub}
            />
          </Link>
          <Link to="/article_container" className="article_container">
            <img
              className="article-img ml-8 mr-10 h-8 transition-transform duration-150 hover:transform hover:scale-110 filter invert"
              src="https://icons.veryicon.com/png/o/miscellaneous/shaanxi-left-column-icon/article-management-3.png"
            />
          </Link>
          <Link to="/review" className="review">
            <img
              className="review-img mt-1.2 h-14 transition-transform duration-150 hover:transform hover:scale-110 filter invert"
              src="https://cdn-icons-png.flaticon.com/512/2701/2701190.png"
            />
          </Link>
        </div>

        <div className="flex-end flex items-center">
          {/* <div className="darkmode-section h-8 justify-self-end mr-10">
            <button className="darkmode-btn h-8 w-8 rounded-full border-0 bg-white transition-transform duration-150 hover:transform hover:scale-110 ">
              <img
                className="darkmode-icon h-8"
                src="https://www.svgrepo.com/show/315691/dark-mode.svg"
              />
            </button>
          </div> */}
          <div className="account-section pr-8 h-12 justify-self-end">
            <Link to="/SignInSide">
              <button className="account-btn h-10 w-10 mt-1 rounded-full border border-black bg-white text-center transition-transform duration-150 flex justify-center items-center hover:transform hover:bg-cyan-300/75">
                <img
                  className="account-icon h-6"
                  src="https://www.svgrepo.com/show/456992/account.svg"
                />
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
