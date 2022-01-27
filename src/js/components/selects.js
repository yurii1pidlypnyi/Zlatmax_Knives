//Select
let selectItems = [...document.querySelectorAll('.select')];
if(selectItems){
  selectItems.forEach(item => {
    item.before(createSelect(item));
    })
  let selectBody = [...document.querySelectorAll('.select__body')];
  selectBody.forEach(item => {
    item.addEventListener('click', () => {
      let selectList = item.querySelector('.select__values');
      slideToggle(selectList);
      item.classList.toggle('active');
      selectList.classList.toggle('active');

      if(item.classList.contains('active')){
        selectList.querySelector('.select__options').scrollTop = 0;
      }
    })

    let options = [...item.querySelectorAll('.select__option')]
    changeOption(item, options);
  })
}
//----------------------Create shell for select
function createSelect(item){
  let selectBody = document.createElement('div');
  selectBody.classList.add('select__body');
  
  let selectField = document.createElement('button');
  selectField.classList.add('select__field');
  selectField.type = 'button';
  
  let selectValues = document.createElement('div');
  selectValues.classList.add('select__values');
  selectValues.hidden = true;

  let selectOptions = document.createElement('div');
  selectOptions.classList.add('select__options');

  selectBody.append(selectField);
  selectBody.append(selectValues);
  selectValues.append(selectOptions);

  [...item.options].forEach(item => {
    let selectOption = document.createElement('button');
    selectOption.type = 'button';
    selectOption.textContent = item.label;
    selectOption.classList.add('select__option');
    selectOptions.append(selectOption);
    if(item.classList.contains('placeholder')){
      selectField.textContent = item.label;
      selectOption.classList.add('select__placeholder');
      selectField.style.color = '#9A9CA5';
    }
  }
  );
  return selectBody
}
//----------------------Change value
function changeOption(select,options){
options.forEach(item => {
  item.addEventListener('click', () => {
    select.querySelector('.select__field').textContent = item.textContent;
    select.querySelector('.select__field').style.color = '#1E212C';
    if(item.classList.contains('select__placeholder')){
      select.querySelector('.select__field').textContent = item.textContent;
      select.querySelector('.select__field').style.color = '#9A9CA5';
    }
    select.nextElementSibling.value = item.textContent
    if(!(select.nextElementSibling.value == item.textContent)){
      select.nextElementSibling.value = 0;
    }
  })
})
}