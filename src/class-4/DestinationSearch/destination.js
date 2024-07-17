import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./destination.css";





const DestinationSearch =()=>{
    const destinationsList =[
        {
            id:1,
            imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4wyf-kS8Cwsi4GOT-sCOzGbv0fjQPMo123w&s",
            name:"Melaka Mosque"
        },
        {
            id:2,
            imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP78gkXPapLx2LvwHjxpyRT3iYq8LPCBgzhA&s",
            name:"Shrubland"
        },
        {
            id:3,
            imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqzvH-_xPZX57JgzjMeQFGrL95vuwBidNAQ&s",
            name:"New York"
        },
        {
            id:4,
            imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJ1OhdYwF7AwvkuPLwYL1wWUuIVlv9fsEtw&s",
            name:"Escarpment"
        },
        {
            id:5,
            imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTaXIQE8yu9yUwyMcZBls8TyXRvuXYasCxhA&s",
            name:"Westminster Abbey"
        },
        {
            id:6,
            imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHlfe_pg-u_PKbJrvgFYiMyKK-XAYjQSa_bA&s",
            name:"South Downs National Park"
        },
    ]

    const [searchItem,setSeacrhItem]=useState("");

    const handleSearch =(event)=>{
        setSeacrhItem(event.target.value);
    }

    const filterDestinations= destinationsList.filter(destination =>
        destination.name.toLowerCase().includes(searchItem.toLocaleLowerCase())
    );
    return (
        <div className="main-div">
          <h1 className="heading1">Destination Search</h1>
          <div className="input-container">
                <input
                    className="input"
                    type="text"
                    placeholder="Search"
                    value={searchItem}
                    onChange={handleSearch}
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            </div>
          <div className="destinations">
            {filterDestinations.map(destination => (
              <div key={destination.id} className="destinationCard">
                <div className="content">
                  <img className="images" src={destination.imgUrl} alt={destination.name} />
                  <h3 className="heading3">{destination.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
}

export default DestinationSearch;