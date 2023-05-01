import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        <div>
          <p>My</p>
          <p>Secret</p>
          <p>Phonebook</p>
        </div>
        <span className={css.flower}>&#10048;</span>
      </h1>
    </div>
  );
}
