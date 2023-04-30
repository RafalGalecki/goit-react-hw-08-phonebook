import { ReactSVG } from 'react-svg';
import css from './Home.module.css'

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 className={css.title}>
        <p>My</p>
        <p>Secret</p>
        <p>Phonebook</p>
        <p>&#10048;</p>
      </h1>
    </div>
  );
}
