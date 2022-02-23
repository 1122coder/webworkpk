
//animating social medial links in navbar

$('#wtsp').mouseover(function(){
    this.src = '/images/whatsapp-color.svg';
})

$('#wtsp').mouseout(function(){
    this.src = '/images/whatsapp.svg';
})


$('#fb').mouseover(function(){
    this.src = '/images/facebook-color.svg';
})

$('#fb').mouseout(function(){
    this.src = '/images/facebook.svg';
})

$('#insta').mouseover(function(){
    this.src = '/images/insta-color.svg';
})

$('#insta').mouseout(function(){
    this.src = '/images/insta.svg';
})

const contactpage= ()=>{
    window.location = "contact.html"
}


