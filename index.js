//     //  let boxes = document.querySelectorAll('.box');
 

// // // i will tell you a simple concept
// // //  if you want to generate a random number between a and b then you write
// // // a+r(b-a) 
// // // here you'l write r , its a random number between 0 and 1
// // // if r value is 0 then you'll get a or if r value is 1 then you'll get b
// // //  or if r value is between 0 and 1 then you will get a or if r value is 1 then you'll get a b
// // // or if r value is between 0 and 1 then you will get a random number whcich will lie in between a and b including a and b , if the random number is between 0 and 1


// // 0+Math.random()*255
// // // this will always generate random numbers from 0 to 255

// // //  but i want it to give me an integer thenn we use Math.ceil it give us a integer
// // Math.ceil(0+Math.random()*255)
// let boxes = document.querySelector('.container').children;

// for (let i = 0; i < boxes.length; i++) {
//     var box = boxes[i];
//     // generate random color (16777215 is white in decimal)
//     // the value from 0 to 16777215  to here if you generate a value and after this you use the toString() method  and convert it in hexadecimal,
//     // and you can give an argument radix in tostring() method which  if you take your mouse here, you will find that in the tostring() method , you can give an argument;
//     // which if you give 16 , it will convert into hexadecimal and you can generate the random color
//     var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

//     // generate random background color
//     var randomBackgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

//     // Assign random color and random bqackground color
//     box.style.color = randomColor;
//     box.style.backgroundColor = randomBackgroundColor;

//     // Set content to show color code
//     box.textContent = randomColor
// }
 


// console.log(boxes);
// function randomColor() {
//     let red = Math.random()*256;
//     let green = Math.random()*256;
//      let blue = Math.random()*256;
//      return `rgb(${red},${green},${blue})`;
// }

// Array.from(boxes).forEach((e)=>{
//     e.style.background = randomColor();
//     e.style.color = randomColor()
// })  


// let boxes =document.querySelector('.container').children;

// for (let i = 0; i < boxes.length; i++) {
//     let box = boxes[i];
//     var randomColor= "#" + Math.floor(Math.random()*16777215).toString(16);

//     var randombackgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

//     box.style.color = randomColor;
//     box.style.background = randombackgroundColor;
// box.textContent = randomColor
    // 



    let boxes = document.querySelector('.container').children;
    for (let i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

        var randomBackgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        box.style.backgroundColor = randomBackgroundColor;
        box.style.color = randomColor;

        box.textContent = randomColor
    }