import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID ea16d2d3f22d5aa6438dda7d0696dc1b97e1d169f4e5d49aa667712ef46416cf"
  }
});
