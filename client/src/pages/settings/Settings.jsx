import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return <div className="settings">
      <div className="settingsWrapper">
          <div className="settingsTitle">
              <span className="settingsUpdateTitle">Account Settings</span>
              <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form className="settingsForm">
              <label>Profile Picture</label>
              <div className="settingsPP">
                  <img src="https://wallpaper.dog/large/20450668.jpg" alt="" />
                  <label htmlFor="fileInput">
                  <i className="settingsPPIcon fas fa-house-user"></i>
                  </label>
                  <input type="file" id="fileInput" style={{display:"none"}} />
              </div>
              <label>Username</label>
              <input type="text" placeholder="Petko" />
              <label>Email</label>
              <input type="email" placeholder="example@mail.com" />
              <label>Password</label>
              <input type="password" />
              <button className="settingsSubmit">Update</button>
          </form>
      </div>
      <Sidebar/>
  </div>;
}
