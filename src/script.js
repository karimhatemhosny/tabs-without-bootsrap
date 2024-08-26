let tabs = document.querySelectorAll('.tab')
let textBoxes = document.querySelectorAll('.textbox')
let activeTextbox = document.querySelector('.textbox.active')
function showDetails(tab){
  let text = tab.getAttribute('data-text')
  activeTextbox.innerText = text
  tabs.forEach(tab => {
    tab.classList.remove('active')
  })
  tab.classList.add('active')
}