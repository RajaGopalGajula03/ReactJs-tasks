import "./technology.css";

const Technology =()=>{
    return(
        <div className="main-div">
            <div className="technology-div">
                <h1 className="heading1">Learn 4.0 Technologies</h1>
                <p className="p1">Get trained by alumni of IITs and top companies like Amazon,Microsoft,Intel,<br></br>Nvidia, Qualcomm, etc. Learn directly from professionals Involved in Product<br></br> Development.</p>
                <div className="card-div1">
                    <div className="data-scientist">
                        <h2 className="heading2">Data Scientist</h2>
                        <p className="p2">Data scientists gather and analyze large<br></br> sets of structured and unstructured data</p>
                        <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7S4evtb-ILw89TFCznzWhoqmcTq06Bx5s1g&s" alt="data scientist"></img>
                    </div>
                    <div className="iot-developer">
                        <h2 className="heading2">IOT Developer </h2>
                        <p className="p2">IoT Developers are prfessional who can<br></br>develop, manage, and monitor IOT devices.</p>
                        <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wGeDyIqZWNqiY3-_nS7e44kBcr6wDQqA9Q&s" alt="iot"></img>
                    </div>
                </div>
                <div className="card-div2">
                    <div className="vr-developer">
                        <h2 className="heading2">VR Developer</h2>
                        <p className="p2">A VR developer creates completely new<br></br> digital environment that people can see</p>
                        <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW-XJ0xpLTOUwSAAdD-NRXECW79K6K8SGdRA&s" alt="data scientist"></img>
                    </div>
                    <div className="ml-engineer">
                        <h2 className="heading2">ML Engineer </h2>
                        <p className="p2">Machine learning engineers feed data into <br></br>models defined by data scientists</p>
                        <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvujvhDLu1dWT7eNTg5ZYPemkPO_ghukIJpw&s" alt="iot"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology;