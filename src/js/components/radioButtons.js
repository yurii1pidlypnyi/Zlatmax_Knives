let radioItems = [...document.querySelectorAll('.radio__element')];

if(radioItems.length){
  radioItems.forEach(item=>{
    item.addEventListener('click',()=>{
      let collection = [...document.querySelectorAll(`[data-radiothema="${item.dataset.radiothema}"]`)];
      
      collection.forEach(element =>{
      element.classList.remove('active');
      })
  
      item.classList.add('active');
      item.querySelector('.radio__button').checked = true;
    })
  })
}