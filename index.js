const btnE1=document.getElementById("btn");
const quoteE1=document.getElementById("quote");
const authorE1=document.getElementById("author");

 const apiurl="http://api.quotable.io/random";

 async function getQuote(){
    try {
        btnE1.innerText="Loading...";
        btnE1.disabled=true;
        quoteE1.innerText="Updating....";
        authorE1.innerText="Updating....";
        const response=  await fetch(apiurl);
        const data= await response.json();
        const quoteContent=data.content;
        const quoteAuthor=data.author;
        quoteE1.innerText=quoteContent;
        authorE1.innerText="~"+quoteAuthor;
        btnE1.innerText="GET A QUOTE";
        btnE1.disabled=false;
        console.log(data);
    } catch (error) {
      console.log(error);
      quoteE1.innerText="An error happened try again later..."
      authorE1.innerText="An error happened"
    }
   
}
getQuote()

btnE1.addEventListener("click",getQuote);