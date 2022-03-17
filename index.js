let useResult=document.querySelector("#result");
let useFilter=document.querySelector("#user-filter");
const listItem=[];



const getValue= ()=>{
    fetch("https://randomuser.me/api/?results=50")
    .then((response)=>response.json())
    .then((data)=>{
        useResult.innerHTML='';
        data.results.forEach(user => {
            const li= document.createElement("li");
            listItem.push(li);
    
            li.innerHTML=`
               <img src=${user.picture.large} alt=${user.name.first}>
    
               <div class="user-info">
                 <h4>${user.name.first} ${user.name.last}</h4>
                 <p>${user.location.city} ${user.location.country}</p>
                 <p>${user.email}</p>
               </div>
            
            `
            useResult.appendChild(li);
        });
    })      
}
getValue()

const userInfo=(input)=>{
    listItem.forEach(element => {
        if(element.innerText.toLowerCase().includes(input.toLowerCase())){
            element.classList.remove("hide");
        }else{
            element.classList.add("hide");
        }
    });
}
useFilter.addEventListener("input", (e)=>{
    userInfo(e.target.value)

})