import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./sidebar.css"

export default function Sidebar() {
  const [cats,setCats] = useState([]);
  useEffect(()=>{
    const getCats = async()=>{
      const res = await axios.get("/categories")
      setCats(res.data)
    };
    getCats()
  },[]);
  return <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className="sideBarImg"
                  src="https://cdn.theatlantic.com/media/mt/science/cat_caviar.jpg" 
                  alt=""
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Odio voluptate eaque maiores ducimus sit, tenetur deleniti ea, 
                  pariatur, laborum laboriosam aperiam molestiae aliquam dolor inventore odit!
                  Nam temporibus earum totam!
                </p>
            </div>
            <div className="sidebarItem">
              <span className="sidebarTitle">CATEGORIES</span>
              <ul className="sidebarList">
                {cats.map((c)=>(
                  <Link to={`/?cat=${c.name}`} className="link">
                <li className="sidebarListItem">{c.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="sidebarItem">
              <span className="sidebarTitle">FOLLOW US</span>
              <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-f"></i>
                <i className="sidebarIcon fab fa-instagram"></i>
                <i className="sidebarIcon fab fa-twitter"></i>
              </div>
            </div>
  </div>;
}
