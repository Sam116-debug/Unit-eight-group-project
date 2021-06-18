$("button").click(function() {
let perosna =  $(".perosna").val();
let colors =  $(".colors").val();

 if (perosna === "Smart" && colors === "Pink"){
   
     $("h2").text("Congrats! You are Blossom! The leader of the group, you are very smart and wise. You always try to do the right thing and people often come to you for advice and making plans. You are aware that everyone has their own opinions and compromise is key ");
 }else if (perosna === "Kind" && colors === "Blue"){
     $("h2").text("Congrats! You are Bubbles! You are full of joy, laughter and you have a special bond with animals and your a people-perosn. Even though you are afraid of most things, you aren't afriad to show emotions and can conquer any fear when you your mind to it.");
 }else if (perosna === "Tough" && colors === "Green"){
     $("h2").text("Congrats! You are Buuttercup! You have a tough personality because you aren't afraid to fight for what you want. Many people come to you for strenght and courage. Even though you are stubborn and hide your feelings from others except from your loved ones know, which is all that matters to you.");
 }
    
});