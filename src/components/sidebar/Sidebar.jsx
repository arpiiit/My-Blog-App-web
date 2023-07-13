import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
           <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img className="sidebarImg" src="https://shayariholic.com/wp-content/uploads/2022/09/23a004a7bcb2b615117ea32410b8d764.jpg" alt="" />
            <p>I am a front-end web Developer. I also make the website more & more interactive with web animation. A respobsive desin makes our website accessible to all uers, regadless of their device.</p>
           </div>
           <div className="sidebarItem">
           <span className="sidebarTitle">PROJECTS</span>
           <ul className="sidebarList">
            <a href="https://arpiiit.github.io/My-personal-profile/"><li className="sidebarListItem">Portfolio Profile</li></a>
            <a href="https://arpiiit.github.io/E-commerse-Shopping-Website-/"><li className="sidebarListItem">Shopping Website</li></a>
            <a href="https://arpiiit.github.io/photoweb/"><li className="sidebarListItem">Photoweb</li></a>
            <a href="https://github.com/arpiiit/MicroSoft-clonehttps://www.linkedin.com/feed/update/urn:li:activity:7027997340057645057/"><li className="sidebarListItem">Microsoft Clone</li></a>
            <a href="https://arpiiit.github.io/weather-app/"><li className="sidebarListItem">Weather App</li></a>
            <a href=""><li className="sidebarListItem">My Blog App</li></a>
      
           </ul>
           </div>
           <div className="sidebarItem">
           <span className="sidebarTitle">Follow Us</span>
           <div className="sidebarSocial">

           <a href="https://www.linkedin.com/in/arpit-mishra-7a4588202/">
          <i className="topIcon fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100050830013888">
          <i className="topIcon fa-brands fa-facebook"></i>{" "}
        </a>
        <a href="https://www.instagram.com/_arpiit.mishra_/">
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </a>
            
           </div>
           </div>
        </div>
    );
}

export default Sidebar;
