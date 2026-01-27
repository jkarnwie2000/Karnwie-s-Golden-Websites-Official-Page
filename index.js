




function contact(event) {
    event.preventDefault();
    //emailjs
    //.sendForm (
    //    'service_56y7j1g',
    //    'template_87bdkhg',
    //    event.target,
    //    '476QBa57rXxhABYJa'        
    //).then(() => {
    //    console.log('this worked.')
    //})
}


const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');
loading.classList += " modal__overlay--visibel"

setTimeout(() => {    
    console.log('It worked 1.')
}, 1000);



