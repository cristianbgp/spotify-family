import fetch from "isomorphic-unfetch";

const fetcher = url => fetch(url).then(r => r.json());

export default fetcher;
