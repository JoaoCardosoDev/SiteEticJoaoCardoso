
const Img1 = document.getElementById("Img1");
const buttonArrows = document.getElementById("buttonArrows");
const copyCarousel = document.getElementById("copyCarousel")
const titleChanger = document.getElementById("titleChanger")

let isImage1 = true;

buttonArrows.addEventListener("click", function() {
    if (isImage1) {
        Img1.src = "ViewScreenTotal2.png";
        copyCarousel.innerHTML = "Discover TechCrafters, a premier web development agency; our <em>innovative approach</em> blends technological prowess and creative solutions, redefining online presence through meticulously crafted projects that showcase the synergy between design and the <em>art of coding</em>.";
        titleChanger.innerText = "Designer Developer";
    } else {
        Img1.src = "ViewScreenTotal.png";
        copyCarousel.innerHTML = "<em>Proudly crafted</em> the online presence for Senteurs d'Ailleurs, a premier perfume and cosmetic brand. Designed a captivating platform that seamlessly blends <em>elegance</em> and <em>innovation</em>, reflecting the brand's commitment to sophistication. <em>Visit the project to find more!</em>";
        titleChanger.innerText = "Senteurs D’Ailleurs"
    }

    isImage1 = !isImage1;
});


function placeholderAlert() {
    alert("Olá Bruno, isto é um placeholder 😎");   
}

















































function placeholderAlert2() {
    alert("Olá Bruno, isto também é um placeholder 😓");   
}