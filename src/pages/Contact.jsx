import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contact = () => {
  return (
    <div className="container mt-5 main-layout">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Contact Us</h2>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  message: '',
                }}
                onSubmit={(values, actions) => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }}
                validate={(values) => {
                  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                  const errors = {};
                  if (!values.name) {
                    errors.name = 'Name Required';
                  }
                  if (!values.email || !emailRegex.test(values.email)) {
                    errors.email = 'Valid Email Required';
                  }
                  if (!values.message) {
                    errors.message = 'Message Required';
                  }
                  return errors;
                }}
              >
                {() => (
                  <Form>
                    <div className="form-group">
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                      <label htmlFor="name">Name:</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <Field
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message:</label>
                      <Field
                        component="textarea"
                        className="form-control"
                        name="message"
                        id="message"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Send
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
