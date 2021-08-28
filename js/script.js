/*  
Project Name: Blurry Loading Gallery
Description: This is the Blurry Loading Gallery with a progress bar. In this project, I have used Unsplash images which are free to use. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
*/

const loading = document.querySelectorAll('.loading')
const photoInner = document.querySelectorAll('.photo-inner')
const photoLink = document.querySelectorAll('.photo-popup')

let load = 0
let init = setInterval(blurring, 20)

function blurring() {
    load++

    // Loading Count
    if(load > 99) {
        clearInterval(init)
    }

    // Counting in-progress
    loading.forEach(function(loadProgress) {
        loadProgress.innerText = `${load}%`
        loadProgress.style.opacity = scale(load, 0, 100, 1, 0)
    })

    // Image in-progress
    photoInner.forEach(function(loadItem) {
        loadItem.style.filter = `blur(${scale(load, 0, 100, 35, 0)}px)`
    })
}

// Javascript - map a range of numbers to another range of numbers :: Stackoverflow Reference 
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}