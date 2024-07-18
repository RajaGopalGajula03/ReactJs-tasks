import "./playstore.css";

const PlayStoreList = ({ app }) => {
    return (
        <li className="tab-item-container">
            <div className="card p-2 card-container">
                <img className="appImage" src={app.imgUrl} alt={app.appName} />
                <div>
                    <h1 className="appName">{app.appName}</h1>
                </div>
            </div>
        </li>
    );
};

export default PlayStoreList;
