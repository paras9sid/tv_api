const form = document.querySelector("#searchForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("Submitted!");
  console.log(form.elements.query.value);
});
