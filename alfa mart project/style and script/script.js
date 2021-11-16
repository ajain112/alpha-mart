const showMenu = (toogleId, navId)=>{
    const toggle = document.getElementById(toogleId),
    nav= document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('nav-link'),
    navMenu= document.getElementById('nav-menu')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset


    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId=current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*='+ sectionId +']').classList.add('active')
        }
        else{
            document.querySelector('.nav-menu a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}

window.onscroll=()=>{
    const nav = document.getElementById('header')
    if(this.scrollY >=200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

const sizes = document.querySelectorAll('.size-s')
const colors = document.querySelectorAll('.sneaker-color')
const sneaker = document.querySelectorAll('.sneaker-img')

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'))
    this.classList.add('active')
}

function changeColor(){
    let primary = this.getAttribute('primary')
    let color = this.getAttribute('color')
    let sneakerColor = document.querySelector('.sneaker-img[color="${color}"]')

    colors.forEach(c => c.classList.remove('active'))
    this.classList.add('active')

    document.documentElement.style.setProperty('--primary',primary)
    sneaker.forEach(s => s.classList.remove('shows'))
    sneakerColor.classList.add('shows')
    
}
sizes.forEach(size => size.addEventListener('click',changeSize))
colors.forEach(c => c.addEventListener('click',changeColor))


const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('log-up')


signUp.addEventListener('click', ()=>{
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    loginIn.classList.add('none')
    loginUp.classList.add('block')
})

signIn.addEventListener('click', ()=>{
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    loginIn.classList.add('block')
    loginUp.classList.add('none')
})