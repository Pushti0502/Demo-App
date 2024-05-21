import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useUserStore from './store';

const Registration: React.FC = () => {
  const { addUser } = useUserStore();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center', maxWidth: '400px', margin: '0 auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
        <h1>Registration</h1>
        <Formik
          initialValues={{ name: '', email: '' }}
          validationSchema={ Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              addUser({
                id: Date.now(),  
                name: values.name,
                email: values.email,
              });
              setSubmitting(false);
              resetForm();
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ marginBottom: '1rem', width: '100%' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                <Field name="name" type="text" style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '5px' }} />
                <ErrorMessage name="name" render={(msg) => <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>{msg}</div>} />
              </div>
              <div style={{ marginBottom: '1rem', width: '100%' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                <Field name="email" type="email" style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '5px' }} />
                <ErrorMessage name="email" render={(msg) => <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>{msg}</div>} />
              </div>
              <div>
                <button type="submit" disabled={isSubmitting} style={{ backgroundColor: '#007bff', color: 'white', padding: '0.5rem 1rem', fontSize: '1rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
