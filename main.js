
const toggle = document.querySelector('.toggle')
const sidebar = document.querySelector('.sidebarid')
const toggleclose = document.querySelector('.toggleclose');

toggle.addEventListener('click', ()=>{
  toggle.classList.toggle('active')
  sidebar.classList.toggle('activesidebar')
})
