import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import "./NewItem.css";

const NewItem = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
    },
    onSubmit: (values) => {
      fetch("http://localhost:5000/api/items", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          price: values.price,
        }),
      })
        .then((res) => {
          console.log(res.json());
          history.push("/");
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <form className="new-item__form" onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        type="text"
        name="description"
        rows="10"
        onChange={formik.handleChange}
        value={formik.values.description}
      />

      <label htmlFor="title">Price</label>
      <input
        id="price"
        type="text"
        name="price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <button type="submit" className="new-item__sub-btn">
        Add item
      </button>
    </form>
  );
};

export default NewItem;
