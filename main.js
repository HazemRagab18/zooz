let goTop = document.getElementById('gotop')

window.onscroll = function() {
  if(document.documentElement.scrollTop > 700) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
}
goTop.onclick = function() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  } 
  )
}