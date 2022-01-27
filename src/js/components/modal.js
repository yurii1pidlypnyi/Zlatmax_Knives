let openModal = [...document.querySelectorAll('.modal__open')];
let exitModal = [...document.querySelectorAll('.modal__exit')];

if(openModal.length){
  openModal.forEach(item => {
    item.addEventListener('click', ()=>{
      document.querySelector(`[data-modal="${item.dataset.modalblock}"]`).classList.add('active');
      body.classList.toggle('lock')
    })
  });
}

if(exitModal.length){
  exitModal.forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector(`[data-modal="${item.dataset.exitmodal}"]`).classList.remove('active')
      body.classList.toggle('lock')
    })
  });
}