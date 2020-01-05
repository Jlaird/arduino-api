import axios from "axios";

var url = '/api/posts';

class PostService {
  //Get Posts
  static getPosts(query, limit = 1) {
    return new Promise(async (resolve, rejects) => {
      try {
        const apiurl = (query)? `${url}?query=${query}&limit=${limit}` : url;
        /*eslint no-console: ["error", { allow: ["log", "error"] }] */
        console.log(url);
        const res = await axios.get(apiurl);
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
