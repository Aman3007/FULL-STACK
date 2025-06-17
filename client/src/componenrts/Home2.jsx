import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home2() {
const { user, token } = useLocation().state|| {};

  if (!user) return <p>No user info available.</p>;
const navigate = useNavigate();

  const handleClick = () => {
    navigate("/secrets",{ state: { user, token } });  
  };
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
</div>




    </>
   
  );
}

export default Home2;