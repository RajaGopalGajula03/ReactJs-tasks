import "./box.css";

const BoxPage = () =>{
    return(
        <div className="main-div">
            <h1 className="heading">Boxes</h1>
            <div className="box-div">
                <div className="small"><p>Small</p></div>
                <div className="medium">Medium</div>
                <div className="large">Large</div>
            </div>
        </div>
    )
}

export default BoxPage;