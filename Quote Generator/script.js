

const api_url="https://api.quotable.io/random";

const quote=document.getElementById("quote");
const author=document.getElementById("author");



async function getquote(url){
    const response=await fetch(url);
    var data=await response.json();
    
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}
getquote(api_url);


document.addEventListener('DOMContentLoaded', function() {
    const dateContainer = document.getElementById('date-container');

    // Get today's date
const today = new Date();

    // Get the day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = daysOfWeek[today.getDay()];

    // Get the date in the format 'Month Day, Year'
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthsOfYear[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();

    // Combine day and date into a string
    const dateString = `${day}, ${month} ${date}, ${year}`;

    // Display the date
    dateContainer.textContent = dateString;
});
