import React from 'react'

export default function LatestMatches(props) {
    const {latestMatch}=props;
    console.log("Latest Match Data:", latestMatch);
  return (
    <div className='latest-div'>
        <div className='result-div'>
            <h2 className='heading1'>{latestMatch.competing_team}</h2>
            <p className='date'>{latestMatch.date}</p>
            <p className='venue'>{latestMatch.venue}</p>
            <p>{latestMatch.result}</p>
        </div>
        <div className='image-div'>
            <img className='compiting-image' src={latestMatch.competing_team_logo} alt='competing team logo'></img>
        </div>
        <div className='opposite-div'>
            <p className='first-innings'>First Innings</p>
            <p>{latestMatch.first_innings}</p>
            <p className='second-innings'>Second Innings</p>
            <p>{latestMatch.second_innings}</p>
            <p className='man-of-the-match'>Man of the Match</p>
            <p>{latestMatch.man_of_the_match}</p>
            <p className='umpiers'>Umpiers</p>
            <p>{latestMatch.umpires}</p>
        </div>
    </div>
  )
}
