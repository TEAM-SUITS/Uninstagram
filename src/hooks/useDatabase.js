import db from "../api/firebase";
import { useEffect, useState } from "react";

export default function useDatabase(collectionName) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState();
  const postsRef = db.collection(collectionName);
  const findPost = async (query) => {
    //https://stackoverflow.com/a/56815787/13307617 partial search
    const result = await postsRef
      .where("content", ">=", query)
      .where("content", "<=", query + "~")
      .get();

    return result.docs.map((doc) => doc.data());
  };

  const submitPost = async (post) => {
    const date = new Date();
    await postsRef.add({
      createdAt: date,
      content: post.content,
      user: post.userName,
      avatarUrl: post.avatar,
    });
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = postsRef
      .orderBy("createdAt")
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
