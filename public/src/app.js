//list classes

const ft = new Fetch();
const ui = new UI();

//add event listeners

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
const msg = document.querySelector(".msg");

button.addEventListener("click", e =>{
  e.preventDefault();
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
    //call a UI method//
    ui.populateUI(data);
    //call saveToLS
    ui.saveToLS(data);
  }).catch(e => {
    msg.textContent = "Please search for a valid city (e.g 'New York')";
});;
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
  changeBackground();
  
});

//Register Service Worker
function changeBackground() {
    
  let date = new Date();
  let hours = date.getHours();
  
  if(hours >= 18 || hours <= 5) {
    document.body.style.backgroundColor ="#003366";
    document.body.style.backgroundImage ="url('src/images/dark-background.jpg')";
 } else{
    document.body.style.backgroundColor = "#daf0ff";
    document.body.style.backgroundImage ="url('src/images/light-background.jpg')";
 }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(function() {
    console.log('sw registered');
  });
}
