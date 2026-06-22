const items =
document.querySelectorAll(".nav-item");

const indicator =
document.querySelector(".indicator");

function moveIndicator(item){

    indicator.style.width =
    item.offsetWidth + "px";

    indicator.style.left =
    item.offsetLeft + "px";
}

moveIndicator(
document.querySelector(".active")
);

items.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        moveIndicator(item);
    });

    item.addEventListener("click",()=>{

        items.forEach(i=>
        i.classList.remove("active"));

        item.classList.add("active");

        moveIndicator(item);
    });

});

document
.querySelector(".nav-menu")
.addEventListener("mouseleave",()=>{

    moveIndicator(
    document.querySelector(".active")
    );
});

const skills=document.querySelectorAll(".skill");

skills.forEach(skill=>{

skill.addEventListener("click",()=>{

skill.style.transform="scale(1.1)";

setTimeout(()=>{

skill.style.transform="scale(1)";

},200);

});

});

document

.getElementById("projectBtn")

.addEventListener("click",()=>{

document

.getElementById("projects")

.scrollIntoView({

behavior:"smooth"

});

});

document

.getElementById("contactBtn")

.addEventListener("click",()=>{

document

.getElementById("contact")

.scrollIntoView({

behavior:"smooth"

});

});

const sections=

document.querySelectorAll("section");

const observer=

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

sections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


const cards=document.querySelectorAll('.glass-item');

cards.forEach(card=>{

card.addEventListener('mouseenter',()=>{

card.style.transform='translateY(-10px) scale(1.05)';

});

card.addEventListener('mouseleave',()=>{

card.style.transform='translateY(0) scale(1)';

});

});

const words = [
"Full Stack Developer",
"Web Developer",
"Problem Solver"
];

let i = 0;

setInterval(() => {

document.querySelector(".typing").textContent =
words[i];

i = (i + 1) % words.length;

},2000);


