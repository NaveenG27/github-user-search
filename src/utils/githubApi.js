import axios from "axios";

export const fetchGitHubUser = async (username) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    return { found: true, data: res.data };
  } catch (err) {
    return { found: false, data: null };
  }
};
