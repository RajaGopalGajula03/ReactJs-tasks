import "./Social.css";

const SocialButtons = () =>{
    return(
        <div className="main-div">
            <h1 className="heading1">Social Buttons</h1>
            <div className="button-div">
                <button className="like btn btn-warning">Like</button>
                <button className="comment btn btn-secondary">Comment</button>
                <button className="share btn btn-primary">Share</button>
            </div>
        </div>
    )
}


export default SocialButtons;