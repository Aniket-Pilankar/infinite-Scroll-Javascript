let divContent = document.getElementById('divContent');
let listEnd = document.getElementById('listEnd');
let itemCount = 0;
let appending = false
window.addEventListener('DOMContentLoader',loadDiv)


function loadDiv(){
    addItems();
}

function addItems(){

    appending = true

    for(let i = 1;i<=25;i++){
        let items = generateDataDiv(['Masai Student', itemCount].join(' '))
        divContent.append(items);
        itemCount++;
        
    }

    appending = false
}

const generateDataDiv = (message) => {
    let item = document.createElement('div');
    item.setAttribute('class','item')
    item.textContent = message;
    return item;
}


let options = {
    root:null,
    rootMargin:'0px',
    threshold: 1.0
}

let callback = (entries , observer) => {
    entries.forEach(element => {
        if(element.target.id === 'listEnd'){
            if(element.isIntersecting && !appending){
                appending = true;
                setTimeout(() => {
                    addItems()
                }, 1000);
            }
        }
    });

}
let observer = new IntersectionObserver(callback, options);
observer.observe(listEnd)