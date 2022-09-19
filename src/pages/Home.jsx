import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import styles from "./pages.module.css"

const Home = () => {

  const [data, setData] = useState(null);

  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(json => setData(json))
  }, []);

  const navigate = useNavigate();

  let onNavigate = (page) => {
    console.log(data)

    navigate(page)
  }

  return(
    <div className={styles.postDiv}>
      <h2>Inlägg</h2>
      {data ? <>
        {data.map((post) => (<h3 className={`${styles.titles} ${styles.hover}`} onClick={() => {onNavigate(`/post/${post.id}`)}}>{post.title}</h3>))}
      </> : <h3>Loading...</h3>}
    </div>
  )

}

export default Home