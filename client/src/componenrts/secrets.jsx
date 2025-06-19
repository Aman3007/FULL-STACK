 import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

function Secrets() {
const { user, token } = useLocation().state|| {};
const [formData, setFormData] = useState({ secrets: ""});
 const [authorized, setAuthorized] = useState(false);
const [secretData, setSecretData] = useState(["Your secret"]);
const navigate = useNavigate();

useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("https://full-stack-j0as.onrender.com/api/users/mysecrets", {
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



       const handleChange=(event)=>{


const{name,value}=event.target;
         setFormData((prevvalue)=>{
            return{
                ...prevvalue,  
                [name]:value,
            }
 
        })
         }

const handleSubmit = async (e) => {
    e.preventDefault();
      

    try {
      const res = await axios.post("https://full-stack-j0as.onrender.com/api/users/mysecrets",{formData,user } );
      console.log(res.data.secrets)
     setSecretData(res.data.secrets);
      setFormData({ secrets: ""}); // Reset form
    
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong!"); 
    }
  };

 const handlelogout = async () => {
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




if (!authorized) return null;
  return (
    <>

    <div className="addsecrets">
    <div class="card-container">
  <div class="card">
  <div class="front-content">
    <p>Hover me</p>
  </div>
  <div class="content">
   {
   secretData.map((val) => {
  return <p>{val}</p>;
})
   }
    
  </div>
</div>
</div>
    <div class="secret-form-wrapper">
  <div class="secret-form">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="lock-icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277a1.993 1.993 0 0 1 .567-3.677A2.001 2.001 0 0 1 14 16a1.99 1.99 0 0 1-1 1.723z"
      />
    </svg>

    <form class="input-group" onSubmit={handleSubmit}>
      <textarea
        class="secret-input" 
        placeholder="Write your secret here..."
        name="secrets"  value={formData.secrets}  onChange={handleChange}   id="secrets"
      ></textarea>
      <button class="add-btn"  type="submit">Add</button>
    </form>
     <button className="logout" onClick={handlelogout} >
Log-out
  </button>
  </div>
</div>
</div>
    </>
   
  );
}

export default Secrets;  
