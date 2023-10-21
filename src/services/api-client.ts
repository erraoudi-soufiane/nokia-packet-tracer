import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/",
  params: {
    key: "8210842d856b44fe9b5fa15c6ea29fe0",
  },
});
