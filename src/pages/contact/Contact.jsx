
import "./contact.css";

const Contact = () => {
    return (
        <div className='contact'>
            <pan className="contactTitle">
                Contact
            </pan>
            <form className="contactForm">
                <label>Email</label>
                <input className="contactInput" type="text" placeholder="Enter Your email..."/>
                <label>Full Name</label>
                <input className="contactInput" type="text" placeholder="Enter Your Full Name..."/>
                <label>Contact Number</label>
                <input className="contactInput" type="number" placeholder="Enter Your number..."/>
                <label>Location</label>
                <input className="contactInput" type="text" placeholder="Enter Your Location..."/>
                <button className="contactButton">
                    contact
                </button>
            </form>
            <div className="topLeft">
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
    );
}

export default Contact;
