import PocketBase from "pocketbase";

let api = {
    url: import.meta.env.VITE_PB_URL,
};

const client = new PocketBase(`${api.url}`);
client.autoCancellation(false);

export default client;
