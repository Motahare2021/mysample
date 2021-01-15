export function ApiConnector(url, method, body) {
  return fetch(url, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: method === "POST" || "PUT" ? JSON.stringify(body) : null
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
}

export default ApiConnector;
