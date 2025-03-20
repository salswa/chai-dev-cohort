const url = 'https://api.freeapi.app/api/v1/public/quotes/quote/random'; // API URL for random quote
const options = {method: 'GET', headers: {accept: 'application/json'}}; // Request API options

/**
 * Fetch random quote from configured api
 */
async function fetchQuote() {
  try{
    const response = await fetch(url, options);
    const data = await response.json();
    const quote = data.data.content;
    const author = data.data.author || 'Anonymous';
    document.getElementById('quote').textContent = `"${quote}"`;
    document.getElementById('author').textContent = `- ${author}`;
    document.body.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  } catch (error) {
      console.error(error);
  }
}

/**
 * Utility function to get current quote data
 */
function getQuote() {
  const quoteText = document.getElementById('quote').textContent;
  const quoteAuthor = document.getElementById('author').textContent;
  const quote = `${quoteText} ${quoteAuthor}`
  return quote;
}

/**
 * Copy quote
 */
function copyToClipboard() {
  const quote = getQuote();
  navigator.clipboard.writeText(quote);
}

/**
 * Share quote on Twitter
 */
function shareOnTwitter() {
  const quote = getQuote();
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
  window.open(twitterUrl, '_blank');
}

/**
 * Export html to image 
 * source: https://medium.com/@tajammalmaqbool11/how-to-convert-your-html-dom-element-into-an-image-using-javascript-677d275294d8 
 */

function exportQuote() {
  var node = document.querySelector('.container');
  htmlToImage.toPng(node)
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'quote.png';
    link.href = dataUrl;
    link.click();
  })
  .catch(function (error) {
    console.error('Oops, something went wrong!', error);
  });
}

fetchQuote();