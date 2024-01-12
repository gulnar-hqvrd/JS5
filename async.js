async function fetchData(url) {
  try {
    let response = await fetch(url);

    if (response.ok) {
      let jsonData = await response.json();
      return jsonData;
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Hazirdir");
  }
}

fetchData("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
