// Scripting for Typing animation starts
const text = document.querySelector(".second_text");
    
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Empowering Coders to Reach New Heights";
            }, 0);
            setTimeout(() => {
                text.textContent = "Building a community of coders";
            }, 10000);                                   // 1s = 1000 millisecond
            setTimeout(() => {
                text.textContent = "Organizing different workshops and coding contest";
            }, 20000);
            setTimeout(() => {
                text.textContent = "Preparing students for placements";
            }, 30000);
            setTimeout(() => {
                text.textContent = "Catering Internship opportunities";
            }, 40000);
            setTimeout(() => {
                text.textContent = "Integrating different skillsets within students";
            }, 50000);
        }
        
        textLoad();
        setInterval(textLoad,60000);           // define the next iterate of the loop interval
// Scripting for Typing animation ends




let g = document.getElementsByClassName("nav_icon");

g[0].addEventListener("click", function() {
      let image=document.getElementById("img_setting");
      let second_nav=document.getElementById("second_div_id");

      if (image.src.match("./Images/icons/Menu.jpg")){
        image.src = "./Images/icons/x-mark.png";
        second_nav.style.display="block";
        second_nav.style.position="absolute"
      }
      else{
        image.src = "./Images/icons/Menu.jpg";
        second_nav.style.display="none";
      }
});