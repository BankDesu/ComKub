import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import comkub from "./assets/comkub.png";

const apiPATH = import.meta.env.VITE_API_PATH;

function Nav() {
  const [isHovered, setIsHovered] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const confirmDelete = async () => {
    setShowSuccessDialog(true);

    try {
        await axios.get(`${apiPATH}/auth/delete`, {
            withCredentials: true,
        });

        if (response.status === 200) {
            navigate("/SignInSide");
            console.log("Account Deleted");
        } else {
            console.error("Failed to delete user. Server responded with status:", response.status);
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 500) {
                console.error("Internal Server Error. Please try again later.");
            } else {
                console.error("Error logging out:", error.message);
            }
        } else {
            console.error("Unexpected error logging out:", error);
        }
    }

    setShowConfirmDialog(false);
};

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${apiPATH}/auth/check`, {
          withCredentials: true,
        });
        console.log("Response data:", response.data); 
        setUsername(response.data.username); 
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await axios.get(`${apiPATH}/auth/logout`, {
        withCredentials: true,
      });
      setUsername(""); // Clear the username on logout
      navigate("/SignInSide"); // Navigate to the login page after logout
      console.log("Logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleAccountClick = () => {
    if (!username) {
      navigate("/SignInSide");
    }
  };

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const delete_acc = () => {
    setShowConfirmDialog(true);
  };

  const cancelDelete = () => {
    setShowConfirmDialog(false);
  };

  const closeSuccessDialog = () => {
    setShowSuccessDialog(false);
  };

  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

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
          <Link to="/recommend" className="review">
            <img
              className="review-img mt-1.2 h-14 transition-transform duration-150 hover:transform hover:scale-110 filter invert"
              src="https://cdn-icons-png.flaticon.com/512/2701/2701190.png"
            />
          </Link>
        </div>

        <div className="flex-end flex items-center">
          <div
            className="account-section pr-8 h-12 justify-self-end"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              onClick={handleAccountClick}
              className="account-btn h-10 w-10 mt-1 rounded-full border border-black bg-white text-center transition-transform duration-150 flex justify-center items-center hover:transform hover:bg-slate-200 hover:invert hover:scale-105"
            >
              <img
                className="account-icon h-6"
                src="https://www.svgrepo.com/show/456992/account.svg"
              />
            </button>
            {isHovered && (
              <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-48">
                <p className="mb-2 text-black">{username}</p>
                <button
                  onClick={logout}
                  className="bg-zinc-500 text-white px-4 py-2 border-2 rounded w-full hover:text-black hover:bg-white hover:border-zinc-500"
                >
                  Logout
                </button>
                <button
                  onClick={delete_acc}
                  className="mt-6 bg-white text-red-600 border-2 border-red-600 px-4 py-2 rounded w-full hover:text-white hover:bg-red-600 hover:border-white"
                >
                  Delete Account
                </button>
                {showConfirmDialog && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-md">
                      <p>Are you sure you want to delete your account?</p>
                      <div className="mt-4 flex justify-around">
                        <button
                          onClick={confirmDelete}
                          className="mr-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={cancelDelete}
                          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {showSuccessDialog && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded shadow-md text-center">
                      <p>Account deleted successfully!</p>
                      <button
                        onClick={closeSuccessDialog}
                        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                      >
                        OK
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
