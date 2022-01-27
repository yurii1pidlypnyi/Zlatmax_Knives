let checkBoxItems = [...document.querySelectorAll('.checkbox__element')];

if(checkBoxItems.length){
  checkBoxItems.forEach(item=>{
    item.addEventListener('click',()=>{
      item.classList.toggle('active');
      let checkBox = item.querySelector('.checkbox__button')
      if(checkBox.checked){
        checkBox.checked = false
      }else {
        checkBox.checked = true;
      }
    })
  })
}