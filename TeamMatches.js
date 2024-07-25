import React, { useEffect, useState } from 'react';
import "./Team.css";
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import LatestMatches from './LatestMatches';
import RecentMatch from './RecentMatch';

export default function TeamMatches() {
    const {id} = useParams();
    const [teamData,setTeamData]=useState([]);
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
        fetchTeamMatches();
    }, [id]);

    const fetchTeamMatches = async() =>{
        setLoading(true);
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`);
        const data = await response.json();
        console.log(data);
        setTeamData(data);
        setLoading(false);
    }

  return (
    <div className='match-div'>
        {loading ? (<Loader/>):(
            <div className='team-matches'>
                {teamData.team_banner_url && (
                        <img src={teamData.team_banner_url} alt='team banner' className='team-banner' />
                )}
                {teamData.latest_match_details && (
                        <LatestMatches latestMatch={teamData.latest_match_details} />
                )}
                <div className='recent-matches-container'>
                    {teamData.recent_matches?.map((match)=>(
                        <RecentMatch match={match} key={match.id} />
                    ))}
                </div>
            </div>
        )}
    </div>
  );
}
