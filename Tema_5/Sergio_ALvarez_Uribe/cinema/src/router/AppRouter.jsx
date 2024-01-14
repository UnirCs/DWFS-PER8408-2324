import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
 
export const AppRouter = () =>{
  return(
    <BrowserRouter>
        <div>
            <Routes>
                <Route exact path="/" element={<movies></movies>}></Route>
                <Route exact path="*" element={<not_found></not_found>}></Route>
            </Routes>
        </div>    
    </BrowserRouter>
    
    
  
  )
};