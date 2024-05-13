const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    let x=0;
    let y = topics.length;

    for (x=0; x<y; x++){ //for as long as x is < the largest value in array, display the value of x for the array and iterate
    console.log(topics[x])
    }
}

function selectTopic() {    
    //old code for displaying static values in the array via console.log
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!")
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!")
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!")
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!")
    } else {
        console.log("Please try again!")
    }
}

console.log('Here are the topics we learned through Preowrk:')
listTopics()
console.log('Which topic should we study first?')
selectTopic()

//Test code for arrays
/*const shapes = ["Triangle", "Square", "Pentagon", "Circle"]

let x = 0; //x will be our current position in the array
let y = shapes.length //y will be our maximum value in the array

for (start; condition; iterate through loop)
for(x=0; x<y; x++) {
    console.log(shapes[x]) //print the current value for the position in the array
} */
