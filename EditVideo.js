import React from "react";
import { Formik, useFormik } from "formik";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EditVideo() {
  const [video, setvideo] = useState([
    { VideoId: "", Title: "", Url: "", Likes: "", Dislikes: "", Views: "" },
  ]);
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      VideoId: video[0].VideoId,
      Title: video[0].Title,
      Url: video[0].Url,
      Likes: video[0].Likes,
      Dislikes: video[0].Dislikes,
      Views: video[0].Views,
    },
    onSubmit: (values) => {
      axios({
        method: "put",
        url: `http://127.0.0.1:5000/updatevideo/${params.id}`,
        data: values,
      });
      alert("video Updated");
    },
    enableReinitialize: true,
  });
  useEffect(() => {
    axios({
      method: "get",
      url: `http://127.0.0.1:5000/videos/${params.id}`,
    }).then((response) => {
      setvideo(response.data);
    });
  }, []);
  return (
    <div>
      <h1>EditVideo</h1>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>VideoId</dt>
          <dd>
            <input
              type="number"
              name="VideoId"
              onChange={formik.handleChange}
              value={formik.values.VideoId}
            ></input>
          </dd>
          <dt>Title</dt>
          <dd>
            <input
              type="text"
              name="Title"
              onChange={formik.handleChange}
              value={formik.values.Title}
            ></input>
          </dd>
          <dt>Url</dt>
          <dd>
            <input
              type="text"
              name="Url"
              onChange={formik.handleChange}
              value={formik.values.Url}
            ></input>
          </dd>
          <dt>Likes</dt>
          <dd>
            <input
              type="number"
              name="Likes"
              onChange={formik.handleChange}
              value={formik.values.Likes}
            ></input>
          </dd>
          <dt>Dislikes</dt>
          <dd>
            <input
              type="number"
              name="Dislikes"
              onChange={formik.handleChange}
              value={formik.values.Dislikes}
            ></input>
          </dd>
          <dt>Views</dt>
          <dd>
            <input
              type="number"
              name="Views"
              onChange={formik.handleChange}
              value={formik.values.Views}
            ></input>
          </dd>
        </dl>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}
