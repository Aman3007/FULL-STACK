import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
function Home2() {
  const [authorized, setAuthorized] = useState(false);
const { user, token } = useLocation().state|| {};
const navigate = useNavigate();

useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("https://full-stack-j0as.onrender.com/api/users/myhome", {
          withCredentials: true,
        });

        if (res.status === 200) {
          setAuthorized(true);
      
        }
      } catch (err) {
        alert("You are not logged in!");
        navigate("/");
      }
    };

    checkAuth();
  }, []);


  const handlesubmit = async () => {
     try {
      const res = await axios.post("https://full-stack-j0as.onrender.com/api/users/logout", {}, {
        withCredentials: true,
      });

      if (res.status === 200 && res.data.message === "Logged out successfully") {
        navigate("/");
      }
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Failed to logout. Try again.");
    }
  }

     const handleClick = () => {
    navigate("/secrets",{ state: { user, token } });  
  };

  if (!authorized) return null;

  return (
    <>
<div className="userinfo">
<h2>User-Info</h2>
  <div class="card1">
  <label class="avatar"></label>
  <label class="info">
    <span class="info-1">{user.name}</span>
    <span class="info-2"> {user.email}</span>
  </label>
  <div class="content-1"><p>"You can trust us with your secrets, no need to worry."</p></div>
  <div class="content-2">
    <a onClick={handleClick}>Add Your's</a>
  </div>
</div>

  <button className="logout" onClick={handlesubmit} >
Log-out
  </button>

</div>
    </>
   
  );
}

export default Home2;
