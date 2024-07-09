function setLightMode() {
  document.body.setAttribute("data-bs-theme", "light");
  document.getElementById("sun").classList.add("visually-hidden");
  document.getElementById("moon").classList.remove("visually-hidden");
}
function setDarkMode() {
  document.body.setAttribute("data-bs-theme", "dark");
  document.getElementById("sun").classList.remove("visually-hidden");
  document.getElementById("moon").classList.add("visually-hidden");
}
var x = [];
function generateQuote() {
  var quotes = ["I'm not a doctor, but I play one on TV."];
  var x = [];
  const min = 0;
  const max = 100;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  x.push(randomNumber);
  for (i = 0; i <= x.length; i++) {
    if(x.length<1||x.length==100){
      x=[0];
    }
    else{
    if (x[i] == randomNumber) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      x.push(randomNumber);
      console.log(x);
    }}
  }

  // const quote = document.getElementById('quote');
  // quote.innerHTML = randomNumber;
}
