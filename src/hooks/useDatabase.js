import db from "../api/firebase";
import { useEffect, useState } from "react";

export default function useGetPosts(collectionName) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState();
  const postsRef = db.collection(collectionName);

  const findPost = (query) => {
    //https://stackoverflow.com/a/56815787/13307617 partial
    postsRef
      .where("content", ">=", query)
      .where("content", "<=", query + "~")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(`doc matching ${query}`, data);
      });
  };

  const submitPost = async (post) => {
    const date = new Date();
    await postsRef.add({
      createdAt: date.toUTCString(),
      content: post.content,
      user: post.userName,
      avatarUrl: post.avatar,
    });
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = postsRef
      .orderBy("createdAt", "asc")
      .onSnapshot((querySnapshot) => {
        const _posts = [];
        querySnapshot.forEach((doc) => {
          _posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPosts(_posts);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  return { posts, loading, findPost, submitPost };
}
