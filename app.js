const form = document.querySelector("#searchForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  //   console.log(res.data);
  //   console.log(res.data[0].show.image.medium);
  const img = document.createElement("img");
  img.src = res.data[0].show.image.medium;
  document.body.appendChild(img);
});
