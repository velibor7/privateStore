import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";

import "./NewItem.css";

const NewItem = () => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        price: "",
        category: "",
      }}
      onSubmit={(values) => {
        console.log(values);
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
            category: values.category,
          }),
        })
          .then((res) => {
            console.log(res.json());
            history.push("/");
          })
          .catch((err) => console.log(err));
      }}
    >
      <Form className="new-item__form">
        <label htmlFor="title">Title</label>
        <Field id="title" type="text" name="title" />

        <label htmlFor="description">Description</label>
        <Field
          as="textarea"
          id="description"
          type="text"
          name="description"
          rows="10"
        />

        <label htmlFor="title">Price</label>
        <Field id="price" type="text" name="price" />
        <label htmlFor="category">Choose a category:</label>
        <Field name="category" as="select" id="category">
          <option value="other" defaultValue>
            Other
          </option>
          <option value="paragliding">Paragliding</option>
          <option value="skydiving">Skydiving</option>
        </Field>
        <button type="submit" className="new-item__sub-btn">
          Add item
        </button>
      </Form>
    </Formik>
  );
};

export default NewItem;
