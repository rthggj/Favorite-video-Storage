import React from "react";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useState, useEffect } from "react";

export default function AddVideo() {
  const formik = useFormik({
    initialValues: {
      VideoId: 0,
      Title: "",
      Url: "",
      Likes: 0,
      Dislikes: 0,
      Views: 0,
    },
    onSubmit: (values) => {
      axios({
        method: "post",
        url: "http://127.0.0.1:5000/addvideo",
        data: values,
      });
      alert("video added");
    },
  });
  return (
    <div>
      <h1>AddVideo</h1>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>VideoId</dt>
          <dd>
            <input
              type="number"
              name="VideoId"
              onChange={formik.handleChange}
            ></input>
          </dd>
          <dt>Title</dt>
          <dd>
            <input
              type="text"
              name="Title"
              onChange={formik.handleChange}
            ></input>
          </dd>
          <dt>Url</dt>
          <dd>
            <input
              type="text"
              name="Url"
              onChange={formik.handleChange}
            ></input>
          </dd>
          <dt>Likes</dt>
          <dd>
            <input
              type="number"
              name="Likes"
              onChange={formik.handleChange}
            ></input>
          </dd>
          <dt>Dislikes</dt>
          <dd>
            <input
              type="number"
              name="Dislikes"
              onChange={formik.handleChange}
            ></input>
          </dd>
          <dt>Views</dt>
          <dd>
            <input
              type="number"
              name="Views"
              onChange={formik.handleChange}
            ></input>
          </dd>
        </dl>
        <button type="submit">add</button>
      </form>
    </div>
  );
}
