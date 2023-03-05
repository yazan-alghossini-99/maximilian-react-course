import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Too Short!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

function RegistrationForm() {
  const formik = useFormik({
    initialValues: { username: '', email: '' },
    validationSchema: RegistrationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" type="text" onChange={formik.handleChange} value={formik.values.username} />
      {formik.errors.username ? <div>{formik.errors.username}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
