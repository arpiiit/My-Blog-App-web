import "./write.css";
const Write = () => {
    return (
        <div className='write'>
            <img className="writeImg" src="https://thumbs.dreamstime.com/b/panorama-view-sea-colorful-sky-cloud-bright-full-moon-seascape-to-night-serenity-nature-background-outdoor-131503361.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                    </label>

                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your stroy........" type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
}

export default Write;
