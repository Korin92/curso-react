const ENDPOINT = 'https://deno-api-users-login.herokuapp.com';

export default function getFavs({ id, jwt }) {
  return fetch(`${ENDPOINT}/favs`, {
    method: "GET",
    headers: {
      "Authorization": jwt,
      "Content-Type": "application/json",
    }

  })
    .then((res) => {
      if (!res.ok) throw new Error("Response is not ok");
      return res.json();
    })
    .then((res) => {
      const { favs } = res;
      return favs;
    });
}
