
document.addEventListener('scroll',()=>{
let navbar = document.querySelector('#navbar')
let sezioni = document.querySelector('#testoNav')
let sezioni2 = document.querySelector('#testoNav2')
let sezioni3 = document.querySelector('#testoNav3')


if (window.pageYOffset>120){
    navbar.classList.add('bg-light','shadow')
    sezioni.classList.add('text-dark') 
    sezioni2.classList.add('text-dark') 
    sezioni3.classList.add('text-dark') 
} else {
     navbar.classList.remove('bg-light','shadow')  
     sezioni.classList.remove('text-white')  
     sezioni2.classList.remove('text-white')  
     sezioni3.classList.remove('text-white')  
}
console.log(window.pageYOffset)
})
