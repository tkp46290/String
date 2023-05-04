let string = document.querySelector("#string");
let main = document.querySelector("#main");

let palindrome = document.querySelector("#palindrome");
let reverse = document.querySelector("#reverse");
let occurences = document.querySelector("#occurences");
let vowels = document.querySelector("#vowels");
let consonants = document.querySelector("#consonants");
let sort = document.querySelector("#sort");

// input.addEventListener('input', () => {
//   console.log(input.value);
// });

let div = document.createElement("div");
div.className = "container";
let para = document.createElement("p");

para.className = "para";
div.appendChild(para);
main.append(div);

palindrome.addEventListener("click", () => {
  let str = string.value;
  let res = str.split("").reverse().join("");
  if (res === str) {
    para.innerText = "Palindrome";
  } else {
    para.innerText = "Not Palindrome";
  }
});

vowels.addEventListener("click", () => {
  let str = string.value;
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return (para.innerText = `vowels:${count}`);
});

consonants.addEventListener("click", () => {
  let str = string.value;
  str = str.toLowerCase();
  let count = 0;
  let consocount = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    } else if (char >= "a" && char <= "z") {
      consocount++;
    }
  }
  return (para.innerText = `consonants: ${consocount}`);
});

sort.addEventListener("click", () => {
  let str = string.value;
  let res = str.split("").sort().join("");
  return (para.innerText = `sorted: ${res}`);
});



reverse.addEventListener('click',()=>{

  return (para.innerText = `reversed: ${string.value.split("").reverse().join("")}`);
})

occurences.addEventListener("click",()=>{

let str=string.value;
str=str.replace(/\s+/g, "");
const freq={};
for(let i=0;i<str.length;i++){
  let char=str[i];
  if(freq[char]){
    freq[char]++;
  }
  else{
    freq[char]=1;
  }
}
return para.innerText=`ocuurences: ${ JSON.stringify(freq)}`

})