import './style/style.sass'
import one from '/assets/puzzle.svg'

const hunnet = document.getElementById("one");
hunnet.src = one
const fifty = document.getElementById("two")
fifty.src = one

function makeMarquee(){
    const title = 'Summer Musc Festival -- August 9-15, Los Angeles'


    const marqueeText = new Array(50).fill(title).join('--')
    
    const titletext = document.getElementById("marq")
    
    titletext.innerText = marqueeText
    
}
makeMarquee()



const circles = document.querySelectorAll('.circle');
const squiggles =  document.querySelectorAll('.squiggle');

squiggles.forEach((squiggle, index) => {
         //keyframes
    squiggle.animate([
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(90deg)'},
        {transform: 'rotate(0deg)'}
    ], {
        //time options
        delay: 300 * index,
        duration: 9000,
        iterations: Infinity
    })
})


circles.forEach((circle, index) => {
        circle.animate([
        //keyframes
        { transform: 'scale(1)' },
        { transform: 'scale(1.1)' },
        { transform: 'scale(1)' }
    ], {
        //time options
        delay: 200 * index,
        duration: 1000,
        iterations: Infinity
    });

})
// detect when scrolling into viewport
// when it does, add a class of 'in-viewport' 
// when it exits we want to remove it again

inView('.section')
    .on('enter', section => {
        section.classList.add('in-viewport')
    })
    .on('exit', section => {
        section.classList.remove('in-viewport')
    });

    //setting the class to add ONLY once ity has scrolled 0.2 of the section viewport
    inView.threshold(0.2)


    // grab all sections and loop through them
    // in each section we want to grab the artists and shapes
    // for both of these we want to add a transition delay
    //make sure shapes only fade in after artist

    const sections = document.querySelectorAll('.section')

    sections.forEach((section, index) => {
        // using queryselectorall on our 'section' to only find elements within that section vs the entire dom
            const artists = section.querySelectorAll('.lineup li')
            const shapes = section.querySelectorAll('.shape')

            artists.forEach((artist, index) => {
                artist.style.transitionDelay = index * 100 + 'ms'
            })

            shapes.forEach((shape, index) => {
                //setting our delay up to only start once all artist have faded in using length property 
                const delay = (artists.length + index) * 100
                shape.style.transitionDelay = delay + 'ms'
            })
    })

    // whenever we click js scroll link we want to run a function 
    // lets stop the link from jumping straight to the section (its default behavior)
    // find href attr and then grab that element
    //then scroll to it using scrollIntoView

 const scrollLinks = document.querySelectorAll('.js-scroll')   

 scrollLinks.forEach(link => {


    link.addEventListener('click',  (event) => {
        // using event key we get access to a snapshot of what happens when the link is clicked

        event.preventDefault()
        const href = link.getAttribute('href')

        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        })

   
    })
 })