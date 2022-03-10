import './styles.scss';
import Quiz from './Quiz';
import Help from './Help';

export default function App() {
  const d = new Date();

  return (
    <div className="App">
      <h1>QUIZ</h1>
      <Quiz />
      <footer>
        <p>
          &copy; {d.getFullYear() + ' '}
          <a href="https://remybeumier.be" target="_blank" rel="noreferrer">
            Rémy Beumier
          </a>
        </p>
      </footer>
      <Help />
    </div>
  );
}
