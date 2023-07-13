import "./singlePost.css";

const SinglePost = () => {
    return (
        <div className="singlePost">
           <div className="singlePostWrapper">
            <img className="singlePostImg" src="https://thumbs.dreamstime.com/b/panorama-view-sea-colorful-sky-cloud-bright-full-moon-seascape-to-night-serenity-nature-background-outdoor-131503361.jpg" alt="" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet .
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor" >Author: <b>Arpit</b></span>
                <span className="singlePostAuthor" >1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ipsam aut. Quasi tempore iusto cumque quae, iure rem autem in nihil temporibus provident. Amet vero, vitae nesciunt quae nisi sapiente.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ipsam aut. Quasi tempore iusto cumque quae, iure rem autem in nihil temporibus provident. Amet vero, vitae nesciunt quae nisi sapiente.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ipsam aut. Quasi tempore iusto cumque quae, iure rem autem in nihil temporibus provident. Amet vero, vitae nesciunt quae nisi sapiente.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ipsam aut. Quasi tempore iusto cumque quae, iure rem autem in nihil temporibus provident. Amet vero, vitae nesciunt quae nisi sapiente.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ipsam aut. Quasi tempore iusto cumque quae, iure rem autem in nihil temporibus provident. Amet vero, vitae nesciunt quae nisi sapiente.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ipsam aut. Quasi tempore iusto cumque quae, iure rem autem in nihil temporibus provident. Amet vero, vitae nesciunt quae nisi sapiente.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ipsam aut. Quasi tempore iusto cumque quae, iure rem autem in nihil temporibus provident. Amet vero, vitae nesciunt quae nisi sapiente.
                
            </p>
           </div>
        </div>
    );
}

export default SinglePost;
