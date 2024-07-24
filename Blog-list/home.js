import "./router.css";

// import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {

  const blogList =[
    {
      id:uuidv4(),
      title:'My first post',
      description:'A high quality solution beautifully designed for startups',
      publishedDate:'08-02-2022'
    },
    {
      id:uuidv4(),
      title:'My second post',
      description:'A high quality solution beautifully designed for startups and Bussiness schools.',
      publishedDate:'03-01-2022'
    },
    {
      id:uuidv4(),
      title:'My third post',
      description:'A high quality solution beautifully designed for startups',
      publishedDate:'01-02-2022'
    },
    {
      id:uuidv4(),
      title:'My fourth post',
      description:'A high quality solution beautifully designed for startups and Bussiness schools.',
      publishedDate:'12-24-2022'
    },
    {
      id:uuidv4(),
      title:'My fifth post',
      description:'A high quality solution beautifully designed for startups',
      publishedDate:'11-10-2022'
    }
  ]

  const formatDate =(dateString)=>
  {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default',{month:'short'});
    let daySuffix;

    if(day===1 || day === 21 || day === 31)
    {
      daySuffix = 'st';
    }
    else if(day === 2 || day === 22)
    {
      daySuffix = "nd";
    }
    else if(day === 3 || day === 23)
    {
      daySuffix = 'rd';
    }
    else
    {
      daySuffix = 'th';
    }
    return `${month} ${day}${daySuffix}`;
  }

  return (
    <div className="blog-div">
        <div className="user-div">
          <img className="user-image" src="https://assets.ccbp.in/frontend/react-js/profile-img.png" alt="profile"></img>
          <h2 className="user-heading">Wade Warren</h2>
          <p className="user-text">Software Developer at UK</p>
        </div>
        <div className="blog-list-div">
          {blogList.map((blog)=>(
            <div className="blogs-div" key={blog.id}>
              <div className="title-div">
              <h2>{blog.title}</h2>
              <p>{formatDate(blog.publishedDate)}</p>
            </div>
            <p className="description-text">{blog.description}</p>
            <hr></hr>

            </div>
          ))}
        </div>
        
    </div>
  )
}
