import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form action="" className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://thumbs.dreamstime.com/b/panorama-view-sea-colorful-sky-cloud-bright-full-moon-seascape-to-night-serenity-nature-background-outdoor-131503361.jpg" alt="" />
                    <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
                <label>Username</label>
               <input type="text" placeholder="Arpit"/>
                <label>Email</label>
               <input type="email" placeholder="arpitmishra482004@gmail.com"/>
                <label>Password</label>
               <input type="password"/>

               <button className="settingsSubmit">Update</button>
            </form>
            </div>
            <Sidebar/>
        </div>
    );
}

export default Settings;
