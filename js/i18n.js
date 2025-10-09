const i18n = {
  currentLang:'en',
  translations:{},

  async loadLanguage(newLang){
  try{
    const response = await fetch(`../i18n/${newLang}.json`);
    const data = await response.json();
    this.translations = data;
    this.currentLang = newLang;
    this.updateTexts();
    localStorage.setItem('lang',newLang);
  }
  catch(err){
    console.error('Failed to load language file:', err);
  }
},    

updateTexts(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(this.translations[key]){
      el.textContent = this.translations[key];
    }
  });
},

init(){
  const savedLang = localStorage.getItem('lang')||this.currentLang;
  this.loadLanguage(savedLang);
}
};

i18n.init();
document.querySelector('.js-switch-zh').addEventListener('click',()=>{
  console.log('Switch to Chinese');
  i18n.loadLanguage('zh');
})

document.querySelector('.js-switch-en').addEventListener('click',()=>{
  console.log('Switch to English');
  i18n.loadLanguage('en');
})





