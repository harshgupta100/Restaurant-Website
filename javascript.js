let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let food3s = document.getElementById('food3');
let food4s = document.getElementById('food4');
let food5s = document.getElementById('food5');
let foods = document.getElementById('food');

food1s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food1.png')";
})

food2s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food.jpg')";
})
food3s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food22.jpg')";
})
food4s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food23.jpg')";
})
food5s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food24.jpg')";
})