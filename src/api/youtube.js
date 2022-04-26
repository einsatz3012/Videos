import axios from "axios";

const KEY = "AIzaSyBizvMsPEYA25twe4Xp9_zyzIo3QxFdnPQ";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResult: 5,
        key: KEY,
    },
});
