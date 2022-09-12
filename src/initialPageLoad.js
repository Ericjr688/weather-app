const content = document.querySelector('#content');

function loadPage(){
  const sections = ['summary', 'detail', 'description'];
  sections.forEach(section => {
    let element = document.createElement('div');
    element.classList.add(section);
    element.style.visibility = 'hidden';
    content.appendChild(element);
  })

}


export { loadPage };


