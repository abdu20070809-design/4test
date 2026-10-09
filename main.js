

// let str = 'Hello \\ World!';


// console.log(str.startsWith('Hello'));
// console.log(str.endsWith('World'));
// console.log(str.includes('ello '));
// console.log(str.indexOf('l'));
// console.log(str.lastIndexOfindexOf('l'));


// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());


let input = document.querySelector('#inputEl');
let btn = document.querySelector('#btnEl');
let box = document.querySelector('#boxEl');

function task(){
    const taskTest = input.value.trim();

    if (taskTest === "") {
        return
    }

    const li = document.createElement('li');

    li.textContent = taskTest

    box.appendChild(li)

    input.value = "";

    let delBtn = document.createElement('Button');

delBtn.textContent = 'Удалть';

delBtn.addEventListener('click', function() {
    li.remove()
})
li.appendChild(delBtn)
}


btn.addEventListener('click', task)

    input.addEventListener('keydown', function (acc) {
        if (acc.key === 'Enter') {
            task()
        }
    })
