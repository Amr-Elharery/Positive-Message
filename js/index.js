// Variables

const btn = document.getElementById("btn");
const output = document.getElementById("output");

let messages = [
    "Be Happy.",
    "You Are Good Enough.",
    "Keep Going.",
    "Nothing can bring you happiness but yourself.",
    "Never regret anything that made you smile.",
    "Life is too short to spend it at war with yourself.",
    "Life is short. Smile while you still have teeth.",
    "Trust the next chapter because you are the author.",
    "Some days you just have to create your own sunshine.",
    `Bad vibes don't go with my outfit.`,
    "Peace begins with a smile.",
    "Happiness is the highest form of health.",
    "Turn your wounds into wisdom",
    `Try to be a rainbow in someone else's cloud.`
]


console.log(btn);
console.log(output);
console.log(messages);
console.log(messages.length);

// Event
btn.addEventListener("click", ()=>{
    let message = messages[Math.floor(Math.random()*messages.length)];
    let span = document.createElement("span");
    
    span.append(document.createTextNode("Your Message: "));
    span.style = "font-size:20px; color: #2196f3;"

    output.innerHTML = '';
    output.append(span, message);

})