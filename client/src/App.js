import { BrowserRouter as Router } from 'react-router-dom';
import styles from './GlobalStyle.module.css';
import Routes from './routes/Routes';
import ScrollToTop from './components/scroll/ScrollToTop';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
