const body = document.body;
if(localStorage.getItem('theme')==='dark'){
  body.classList.add('dark-mode');
}
document.querySelector('.js-switch-theme').addEventListener('click',()=>{
  console.log('Switch theme');
  body.classList.toggle('dark-mode');//toggle 检查类是否存在，存在则删除，不存在则添加
  localStorage.setItem('theme','dark');
})