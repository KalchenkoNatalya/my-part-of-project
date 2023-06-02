const refs = {
  form: document.querySelector(".catalog-search-form"),
  input: document.querySelector(".catalog-search-input"),
  clearInputBtn: document.querySelector(".catalog-cross-delete-btn"),
};
console.log(refs.form);
console.log(refs.input);
console.log(refs.clearInputBtn);

refs.input.addEventListener("input", onInputCross);
function onInputCross(e) {
  refs.clearInputBtn.classList.remove("catalog-cross-delete-btn-hide");
  const inputValue = e.target.value.trim();
  console.log(inputValue);
  
}

refs.clearInputBtn.addEventListener("click", onClickClearBtn);
function onClickClearBtn(e) {
  e.preventDefault();
  console.log("клікнули по хрестику");
  refs.form.reset();
      refs.clearInputBtn.classList.add("catalog-cross-delete-btn-hide");
}
