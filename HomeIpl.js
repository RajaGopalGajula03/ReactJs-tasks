import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import TeamsList from './TeamsList';
import "./Team.css";

export default function HomeIpl() {

    const[teams,setTeams] = useState([]);
    const[loading,setLoading]= useState(false);

    useEffect(()=>{
        fetchTeams();
    },[])

    const fetchTeams = async() =>{
        setLoading(true);
        const response = await fetch("https://apis.ccbp.in/ipl");
        const data = await response.json();
        setTeams(data.teams);
        console.log(data.teams);
        setLoading(false)
    }

  return (
    <div className='home-div'>
        <div className='ipl-div'>
        <div className='logo-div'>
            <img className='logo-image' src='https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png' alt='logo'></img>
            <h1 className='ipl-title'>IPL Dashboard</h1>
        </div>
        <div className='teams-div'>
            {loading? <Loader />:(
                teams.map((team)=>(
                <Link to={`/team-matches/${team.id}`} className='link-div col-4' key={team.id}>
                    <TeamsList team={team}/>
                </Link>
                ))
            )}
        </div>
    </div>
    </div>
  );
}
