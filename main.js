const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Typewriter
const dynamicText = document.querySelector('.info')
const words = ['Mechanical Engineer', 'A.I. Engineer', 'Hockey Player']
let wordIndex = 0
let charIndex = 1
let isDeleting = false

const typeEffect = () => {
    const currentWord = words[wordIndex]
    const currentChar = currentWord.substring(0, charIndex)
    dynamicText.textContent = currentChar
    dynamicText.classList.add('stop-blinking')
    
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type next character
        charIndex++
        setTimeout(typeEffect, 100)
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--
        setTimeout(typeEffect, 50)
    } else {
        // If word is deleted, switch to the next word
        isDeleting = !isDeleting
        dynamicText.classList.remove('stop-blinking')
        wordIndex = !isDeleting ? (wordIndex+1) % words.length : wordIndex
        setTimeout(typeEffect, 1300)
    }
}
typeEffect()