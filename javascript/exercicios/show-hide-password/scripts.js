document.getElementById("showpwd").addEventListener("click", function () {
  document.getElementById("pwd").type =
    this.checked === true ? "text" : "password";
});
