// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { response } from "express";

// export default function VideosHome() {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     axios({
//       method: "get",
//       url: "http://127.0.0.1:5000/videos",
//     }).then((response) => {
//       setVideos(response.data);
//     });
//   }, []);
//   return (
//     <div>
//       <h1>VideosHome</h1>
//       <div>
//         {videos.map((video) => (
//           <div>
//             <div>
//               <h3>{video.Titel}</h3>
//             </div>
//             <div>
//               <iframe src={video.Url} width="300" height="200"></iframe>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function VideosHome() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:5000/videos",
    }).then((response) => {
      setVideos(response.data);
    });
  }, []);

  return (
    <div>
      <h1>VideosHome</h1>
      <div>
        {videos.map((video) => (
          <div key={video.VideoId}>
            <div>
              <h3>{video.Title}</h3>
            </div>
            <div>
              <iframe src={video.Url} width="300" height="200"></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
