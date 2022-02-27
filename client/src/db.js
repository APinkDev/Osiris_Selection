import axios from "axios";

const direction = axios.create({
  baseURL: "http://localhost:3001",
});

export default direction
