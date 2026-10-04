let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if(contrastToggle) {
    document.body.classList += " dark-theme"
  }
  document.body.classList.remove(" dark-theme")
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('modal__overlay--success')
  loading.classList += " modal__overlay--visible"

  emailjs
    .sendForm(
      'service_tztdfxd',
      'template_ndph29r',
      event.target,
      'RJ7rgu5o463iMnrb_'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "the email service is temporarily unavailable. Please contact me directly on alexmalandro93@gmail.com"
      );
    })
  }
  
  let isModalOpen = false;
function toggleModal() {
  if(isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = !isModalOpen;
  document.body.classList += " modal--open";
}