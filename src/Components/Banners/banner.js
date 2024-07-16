import "./banner.css";
import Newdesign from "./newdesign";
import Insiders from "./insiders";

const Banner = () =>{
    return(
        <div className="main-div">
            <div className="latest">
                <div className="content">
                    <h2>The Seasons Latest</h2>
                    <p>Get the seasons all latest designs in a flick of your hand</p>
                    <button>Show More</button>
                </div>
                <div className="graphDesign">
                    <div className="graph1"></div>
                    <div className="graph2"></div>
                    <div className="graph3"></div>
                    <div className="graph4"></div>
                    <div className="graph5"></div>
                    <div className="graph6"></div>
                    <div className="graph7"></div>
                    <div className="graph8"></div>
                    <div className="graph9"></div>
                    <div className="graph10"></div>
                    <div className="graph11"></div>
                    <div className="graph12"></div>
                    <div className="graph13"></div>
                    <div className="graph14"></div>
                    <div className="graph15"></div>
                </div>
            </div>
            <div className="newdesign">
                <Newdesign />
                
            </div>
            <div className="insiders">
                <Insiders />
            </div>
        </div>
    )
}

export default Banner;