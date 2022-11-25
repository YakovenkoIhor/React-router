// import { Formik, Form, Field, ErrorMessage} from 'formik';
import React, { useState } from 'react';

import { useFormik } from 'formik';

// import { useEffect, useState } from "react";

const Posts = () => {
  const formik = useFormik({

      initialValues: {
        title: '',
        textarea : '',
        body: '',
      },

      onSubmit: values => {
        // alert(JSON.stringify(values, null, 2));
      // const [posts, setPosts] = useState([])
        
        const tmp = fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: values.title,
            body: values.body,
            textarea: values.textarea,
            // userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((post) => console.log(post));
      },
    });
    console.log(formik);

    return (
      <form onSubmit={formik.handleSubmit}>

        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label htmlFor="textarea">Textarea</label>
        <input
          id="textarea"
          name="textarea"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.textarea}
        />

        <label htmlFor="body">Body</label>
        <input
          id="body"
          name="body"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.body}
        />
        <button type="submit">Submit</button>
      </form>
    );
    }
  export default Posts