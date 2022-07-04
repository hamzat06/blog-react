import axios from "axios";

export function fetchPosts() {
  axios
    .get("https://techcrunch.com/wp-json/wp/v2/posts?page=1&per_page=7")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      alert(err);
    });
  // .finally(() => setFetching(false))
}
