import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import styles from "./pages.module.css"

const Post = () => {
  const {id} = useParams();

  const [postData, setpostData] = useState(null);

  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(json => setpostData(json))
  }, []);

  const [commentsData, setcommentsData] = useState(null);

  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(response => response.json())
    .then(json => setcommentsData(json))
  }, []);

  return (
    <div className={styles.postDiv}>
      <nav>
        <Link to="/">
          <button className={`${styles.button} ${styles.hover}`}>Tillbaka</button>
        </Link>
      </nav>

    {postData ? <>
      <div className={styles.postDiv2}>
        <h3 className={styles.title2}>{postData.title}</h3>
        <p className={styles.postBody}>{postData.body}</p>
      </div>
    </> : <h3>Loading...</h3>}

    <div>
      <h3 className={styles.commentTitle}>Kommentarer</h3>
      {commentsData ? <>
        {commentsData.map((comment) => (comment.postId == id ? (<>
        <div className={styles.commentsDiv}>
          <p>{comment.body}</p>
          <p>{comment.name}</p>
          <p>{comment.email}</p>
        </div>
        </>): null))}
      </> : null}
 
    </div>
  </div>

  )
}

export default Post