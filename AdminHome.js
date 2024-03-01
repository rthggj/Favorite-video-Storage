// import React from 'react';
// import { useState,useEffect } from 'react';
// import axios, { Axios } from 'axios';
// import {Link} from "react-router-dom";
// import { response } from 'express';

// export default function AdminHome() {
//     const[videos,setVideos]=useState([]);
//     function Loadvideos(){
//         axios({
//             method:"get",
//             url:"http://127.0.0.1:5000/videos"
//         })
//         .then(response=>{
//             setVideos(response.data);
//         })
//     }
//     useEffect(()=>{
//         Loadvideos();
//     },[]);
//   return (
//     <div>
//     <h1>AdminHome</h1>
//     <table>
//     <thead>
//     <tr>
//     <th>Titel</th>
//     <th>preview</th>
//     <th>Action</th>
//     </tr>
//     </thead>
//     <tbody>
//     {
//         videos.map(video=>
//             <tr key={video.VideoId}>
//             <td>{video.Title}</td>
//             <td>
//             <iframe src={video.Url} width="300" height="300"></iframe>
//             </td>
            
//             </tr>
//             )
//     }
//     </tbody>
//     </table>
//     </div>
//   )
// }
import React from 'react'

export default function AdminHome() {
  return (
    <div>AdminHome</div>
  )
}
