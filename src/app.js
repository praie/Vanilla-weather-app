function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector(".Search-form-input");
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = searchInputElement.value;
}

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", search);
