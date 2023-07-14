// Retrieve the current URL
const currentUrl = window.location.href;

// Retrieve the last visit time from local storage
chrome.storage.local.get(currentUrl, (result) => {
  const lastVisitTime = result[currentUrl];

 const articleTitleElement = document.querySelector('.article-title h1');
 const practiceTitleElement = document.querySelector('.problems_header_content__title__L2cB2 h3')
 const problemSolvedElement = document.querySelector('table .unstackable');
 console.log(problemSolvedElement)

 if (articleTitleElement) {
   // Create a new title with last visit time
   const originalTitle = articleTitleElement.innerText;

   // Create a span element for the last visit time
   const lastVisitElement = document.createElement('span');
   articleTitleElement.appendChild(document.createElement('br'));
   lastVisitElement.innerText = `    Last Visited: ${lastVisitTime || 'First Visit'}`;
   lastVisitElement.style.fontSize = '14px';
   lastVisitElement.style.color = 'red';

   // Append the last visit element to the article title
   articleTitleElement.appendChild(lastVisitElement);

   // Update the article title
//    articleTitleElement.innerText = newTitle;
 }
 if(practiceTitleElement){
  const lastVisitElement = document.createElement('span');
  practiceTitleElement.appendChild(document.createElement('br'));
  lastVisitElement.innerText = `    Last Visited: ${lastVisitTime || 'First Visit'}`;
  lastVisitElement.style.fontSize = '12px';
  lastVisitElement.style.color = 'red';

  // Append the last visit element to the article title
  practiceTitleElement.appendChild(lastVisitElement);
  if(problemSolvedElement){

    const correctIconElement = document.createElement('img')
    correctIconElement.src = 'https://i.postimg.cc/Hxr3cVNg/correct.png'
    correctIconElement.style.width = '20px'
    correctIconElement.style.height = '20px'
    correctIconElement.style.marginLeft = '10px'

    const solvedText = document.createElement('span')
    solvedText.innerText = 'Solved'

    practiceTitleElement.appendChild(solvedText)
    practiceTitleElement.appendChild(correctIconElement)

  }
 }
  // Update the last visit time in local storage
  const currentTime = new Date().toLocaleString();
  chrome.storage.local.set({ [currentUrl]: currentTime });
});

document.addEventListener('keydown', (event) => {
  // Check if Ctrl + ' key is pressed
  if (event.ctrlKey && event.key === "'") {
    const compileButton = document.querySelector('.problems_compile_button__Lfluz');
    compileButton.click();
  }

  // Check if Ctrl key is pressed and Enter key is pressed without any modifiers
  if (event.ctrlKey && event.key === 'Enter' && !event.shiftKey && !event.altKey && !event.metaKey) {
    // console.log('world');
    const submitButton = document.querySelector('.problems_submit_button__6QoNQ')
    submitButton.click()
  }
});
