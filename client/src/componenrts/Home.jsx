// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
export const Home=()=>{
    //  const [data, setData] = useState([]);
 
  
// useEffect(() => {
//   axios
//     .get("http://localhost:5000/api/data")
//     .then((res) => {
//       setData(res.data.message);
//     })
//     .catch((err) => {
//       console.error("Error fetching data:", err);
//     });
// }, []);
     const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");  
  };


return(<>
<div className="middle-part">
  <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <h2 class="title">Privacy Guaranteed</h2>
            <p>Hover Me</p>
        </div>
        <div class="flip-card-back">
            <h2 class="title">Welcome to the Whishper</h2>
            <p> This is the place Where you share your secret without any fear of being judged by the other's</p>
       

<button onClick={handleClick}> <span>Register</span>
</button>

        
        </div>
    </div>
</div>
      {/* <p>{data[0]}</p> */}
       
</div>

</>)
}