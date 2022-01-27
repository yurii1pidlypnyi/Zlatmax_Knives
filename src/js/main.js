document.addEventListener('click',(element)=>{
  // -----------------------------Closing selects------------------------------
  if(document.querySelector('.select__body.active')){
    if(element.target.className != 'select__field'){
      [...document.querySelectorAll('.select__body.active')].forEach(item =>{
        slideUp(item.querySelector('.select__values'));
        item.classList.remove('active');
      })
    } else {
      let arraySelects = [...document.querySelectorAll('.select__body.active')];
      if(arraySelects.length > 1){
        arraySelects.splice(arraySelects.indexOf(element.target.parentElement),1)
        slideUp(arraySelects[0].querySelector('.select__values'));
        arraySelects[0].classList.remove('active');
      }
    }
  }
  //-----------------------------------------------------------------------------
  // -----------------------------Closing modals--------------------------------
  if(document.querySelector('.modal__window.active')){
    if(element.target.parentElement.className == 'modal__window active'){
      element.target.parentElement.classList.remove('active');
      body.classList.toggle('lock')
    }
  }
  //-----------------------------------------------------------------------------
})