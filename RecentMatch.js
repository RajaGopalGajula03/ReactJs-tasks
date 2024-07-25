import React from 'react'

export default function RecentMatch(props) {
    const{match}=props;
    console.log("recent match details",match);
  return (
    <div className='recentmatch-div col-4 d-flex '>
        <div className='recent-match d-flex row flex-wrap'>
            <img className="team-logo" alt="team logo" src={match.competing_team_logo}></img>
            <p className='team-name'>{match.competing_team}</p>
            <p className='match-result'>{match.result}</p>
            <p className={`match-status ${match.match_status.toLowerCase()}`}>
                {match.match_status}
            </p>
        </div>
    </div>
  )
}
