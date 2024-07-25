import React from 'react';
import "./Team.css";

export default function TeamsList(props) {
    const {team} = props;
  return (
    <div className='team-container' key={team.id}>
        <img src={team.team_image_url} alt='teamImage' className='team-image'></img>
        <p className='team-name1'>{team.name}</p>
    </div>
  );
}
