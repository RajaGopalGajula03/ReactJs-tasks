import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeIpl from './HomeIpl';
import TeamMatches from './TeamMatches';
import NotFound from './notfound.js';
import "./Team.css";

export default function IPLComponent()
 {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeIpl />} />
        <Route path="/team-matches/:id" element={<TeamMatches />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
