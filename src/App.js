import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Post from './pages/Post';
import styles from "./pages/pages.module.css"

function App() {

  return (
    <div className={styles.app}>

      <h1 className={styles.header}>React Forum</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
