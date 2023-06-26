// Retrieve the current URL
const currentUrl = window.location.href;

// Retrieve the last visit time from local storage
chrome.storage.local.get(currentUrl, (result) => {
  const lastVisitTime = result[currentUrl];

 const articleTitleElement = document.querySelector('.article-title h1');

 if (articleTitleElement) {
   // Create a new title with last visit time
   const originalTitle = articleTitleElement.innerText;

   // Create a span element for the last visit time
   const lastVisitElement = document.createElement('span');
   lastVisitElement.innerText = `    Last Visited: ${lastVisitTime || 'First Visit'}`;
   lastVisitElement.style.fontSize = '14px';
   lastVisitElement.style.color = 'red';

   // Append the last visit element to the article title
   articleTitleElement.appendChild(lastVisitElement);

   // Update the article title
//    articleTitleElement.innerText = newTitle;
 }
  // Update the last visit time in local storage
  const currentTime = new Date().toLocaleString();
  chrome.storage.local.set({ [currentUrl]: currentTime });
});
