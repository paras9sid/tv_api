const form = document.querySelector("#searchForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  //
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    // medium image error avoid of image
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium; // error after some iamges - Uncaught (in promise) TypeError: Cannot read properties of null (reading 'medium')
      document.body.append(img);
    }
  }
};
