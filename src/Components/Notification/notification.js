import "./notification.css"

const Notification =() =>{
    return(
        <div className="main-div">
            <h1 className="heading1">Notifications</h1>
            <div className="information bg-primary mb-5">
                <i class="fa-regular fa-circle-check"></i>
                <p className="information-message">Information Message</p>
            </div>
            <div className="information bg-success mb-5">
                <i class="fa-regular fa-circle-check"></i>
                <p className="information-message">Success Message</p>
            </div>
            <div className="information bg-warning mb-5">
                <i class="fa-regular fa-bell"></i>
                <p className="information-message">Warning Message</p>
            </div>
            <div className="information bg-danger mb-5">
                <i class="fa-solid fa-circle-exclamation"></i>
                <p className="information-message">Error Message</p>
            </div>
        </div>
    )
}


export default Notification;