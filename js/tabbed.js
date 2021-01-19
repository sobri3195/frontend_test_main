function toppingCake(toppingName) {
  let i;
  const content = document.getElementsByClassName("content");

  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  document.getElementById(toppingName).style.display = "block";
}