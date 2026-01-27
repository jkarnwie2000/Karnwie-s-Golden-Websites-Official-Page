
let contrastToggle = false

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
    document.body.classList += " dark-theme"
}
else {
    document.body.classList.remove("dark-theme")
}
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visibel"
    emailjs
    .sendForm(
        'service_56y7j1g',
        'template_87bdkhg',
         event.target,
        '476QBa57rXxhABYJa'        
    ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible"
        }).catch(() => {
    loading.classList.remove("modal__overlay--visible")
    alert("The service is temporarily unavailable. Pleases contact me by email at richjuliusgold2000@yahoo.com")
    })
}

let isModalOpen = false
function toggleModal() {
if (isModalOpen) {
    isModalOpen = false
    return document.body.classList.remove("modal--open")
}
isModalOpen = true
document.body.classList += " modal--open"
}

