
const toggle = document.querySelector('.toggle')
const toggleClose = document.querySelector('.toggle-close')
const sidebar = document.querySelector('.sidebarid')

//menu icon open
toggle.addEventListener('click', ()=>{
  toggle.classList.toggle('active')
  sidebar.classList.toggle('activesidebar')
})

//menu icon close
toggleClose.addEventListener('click', ()=>{
  sidebar.classList.toggle('activesidebar')
})
