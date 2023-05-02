import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Enter username"
        />
      </label>
      <label className={css.label}>
        Email
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          placeholder="Enter password"
          pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]|\W).{6,}$/"
          title="Password should contain at least 6 characters, including at least 1 number, at least 1 letter and at least 1 capital letter or special character"
        />
      </label>
      <button className={css.btn} type="submit">
        Register
      </button>
    </form>
  );
};
