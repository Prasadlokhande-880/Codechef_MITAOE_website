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
