let tagsEl = document.getElementById("tags");
let textarea = document.querySelector("textarea")


textarea.focus()


textarea.addEventListener('keyup', (e) =>
{
    createTags(e.target.value)

    if(e.key === 'Enter')
    setTimeout(() => {
        e.target.value = ''
        randomSelect()
    }, 10);

})


function createTags (input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.innerText = tag
    tagEl.classList.add('tag')
    
    tagsEl.appendChild(tagEl)
    
  });
}

function randomSelect() {

//highlighting and unhighlighting
const times = 22
const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)
    setTimeout(() => {
        unhighlightTag(randomTag)
    }, 100);
    
}, 100);


 //stopping and picking one to land on
 //clearInterval will stop the on/off 
setTimeout(() => {
    clearInterval(interval)
        const randomTag = pickRandomTag()
        highlightTag(randomTag) 
}, 100*times);




}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}
