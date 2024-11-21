
let quoteDetail=[
  {'quote':'Be yourself; everyone else is already taken.' , 'author':'Oscar Wilde'},
  {'quote':'Be who you are and say what you feel, because those who mind donot matter, and those who matter donot mind.' , 'author':'Bernard M. Baruch'},
  {'quote':'Be the change that you wish to see in the world.' , 'author':'Mahatma Gandhi'},
  {'quote':'If you tell the truth, you donot have to remember anything.' , 'author':'Mark Twain'},
  {'quote':'A friend is someone who knows all about you and still loves you.','author':'Elbert Hubbard'},
  {'quote':' Live as if you were to die tomorrow. Learn as if you were to live forever.' , 'author':'Mahatma Gandhi'},


]
//console.log(quoteDetail[Math.floor(Math.random() * quoteDetail.length +1)].quote)
function getRandom() {
 // document.getElementById('quote').innerHTML=quoteDetail[1].quote
 let nandomNumber=Math.floor(Math.random() * quoteDetail.length)
//console.log(quoteDetail.length)
console.log(nandomNumber)
    document.getElementById('quote').innerHTML=`${quoteDetail[nandomNumber].quote}`;
    document.getElementById('author').innerHTML=`${quoteDetail[nandomNumber].author}`;

  }

