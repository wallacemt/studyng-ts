async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts");

  return response.json();
}
