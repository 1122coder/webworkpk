const inputNameTag=document.querySelector("input[name='name']");
const form =document.querySelector("form");
const inputEmailTag= document.querySelector("input[name='email']");
const inputPhoneTag= document.querySelector("input[name='phone']");
const inputtextareaTag= document.querySelector("textarea[name='text-area']");


const pattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$ /


const inputerrors =(ele) => {
    ele.classList.add("invalid")
    ele.nextElementSibling.classList.remove("hidden");
}

const validatedinput= (ele)=>{
    ele.classList.remove("invalid")
    ele.nextElementSibling.classList.add("hidden");
}

const inputvalidate= () =>{
    if(!inputNameTag.value){
        inputerrors(inputNameTag);
        
    }else {
        validatedinput(inputNameTag);
       
    }
    if(!inputEmailTag.value){
        inputerrors(inputEmailTag);
        
    }else {
        validatedinput(inputEmailTag);
        
    }

    if(!inputPhoneTag.value){
        inputerrors(inputPhoneTag);
        
    }else {
        validatedinput(inputPhoneTag);
        
    }
    
    if(!inputtextareaTag.value){
        inputerrors(inputtextareaTag);
        
    }else {
        validatedinput(inputtextareaTag);
        
    }

}


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    inputvalidate();
});


inputNameTag.addEventListener("input", ()=>{
    inputvalidate();
});

inputEmailTag.addEventListener("input", ()=>{
    inputvalidate();
});

inputPhoneTag.addEventListener("input", ()=>{
    inputvalidate();
});