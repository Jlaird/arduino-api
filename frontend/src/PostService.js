import axios from "axios";

const url = 'http://34.231.137.187/api/posts';

class PostService {
  //Get Posts
  static getPosts() {
    return new Promise(async (resolve, rejects) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(posts => ({
            ...posts,
            createdAt: new Date(posts.createdAt)
          }))
        );
      } catch(err) {
        rejects(err);
      }
    })
  }

  // Create Post
  static insertPost(text) {
    return axios.post(url, {
      text
    })
  }
}

export default PostService;
