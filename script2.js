btns=document.querySelectorAll(".read_more");
for(btn of btns){
    switch(btn.getAttribute("id")){
        case "one1":
            let content = document.getElementById("a");
            let readMoreBtn = document.getElementById("one1");
            let readLessBtn = document.getElementById("A");
            
            let fullText =
            "A professional networking platform that allows individuals and organizations to connect, share, and grow their professional presence online. It enables users to create and maintain profiles showcasing their career experiences, education, skills, and accomplishments.";
            
            let shortText = "A professional networking platform";
            
            readMoreBtn.addEventListener("click", () => {
            content.innerHTML = fullText; 
            readMoreBtn.style.display = "none"; 
            readLessBtn.style.display = "inline-block"; 
            });
            
            readLessBtn.addEventListener("click", () => {
            content.innerHTML = shortText; 
            readMoreBtn.style.display = "inline-block"; 
            readLessBtn.style.display = "none"; 
            });
            break;

            
            case "two2":
                let content2 = document.getElementById("b");
                let readMoreBtn2 = document.getElementById("two2");
                let readLessBtn2 = document.getElementById("B");
                
                let fullText2 =
                "A professional networking platform that allows individuals and organizations to connect, share, and grow their professional presence online. It enables users to create and maintain profiles showcasing their career experiences, education, skills, and accomplishments.";
                
                let shortText2 = "A professional networking platform";
                
                readMoreBtn2.addEventListener("click", () => {
                content2.innerHTML = fullText2; 
                readMoreBtn2.style.display = "none"; 
                readLessBtn2.style.display = "inline-block"; 
                });
                
                readLessBtn2.addEventListener("click", () => {
                content2.innerHTML = shortText2; 
                readMoreBtn2.style.display = "inline-block"; 
                readLessBtn2.style.display = "none"; 
                });
                break;

                case "three3":
                let content3 = document.getElementById("c");
                let readMoreBtn3 = document.getElementById("three3");
                let readLessBtn3 = document.getElementById("C");
                
                let fullText3 =
                "A professional networking platform that allows individuals and organizations to connect, share, and grow their professional presence online. It enables users to create and maintain profiles showcasing their career experiences, education, skills, and accomplishments.";
                
                let shortText3 = "A professional networking platform";
                
                readMoreBtn3.addEventListener("click", () => {
                content3.innerHTML = fullText3; 
                readMoreBtn3.style.display = "none"; 
                readLessBtn3.style.display = "inline-block"; 
                });
                
                readLessBtn3.addEventListener("click", () => {
                content3.innerHTML = shortText3; 
                readMoreBtn3.style.display = "inline-block"; 
                readLessBtn3.style.display = "none"; 
                });
                break;

                case "four4":
                let content4 = document.getElementById("d");
                let readMoreBtn4 = document.getElementById("four4");
                let readLessBtn4 = document.getElementById("D");
                
                let fullText4 =
                "A professional networking platform that allows individuals and organizations to connect, share, and grow their professional presence online. It enables users to create and maintain profiles showcasing their career experiences, education, skills, and accomplishments.";
                
                let shortText4 = "A professional networking platform";
                
                readMoreBtn4.addEventListener("click", () => {
                content4.innerHTML = fullText4; 
                readMoreBtn4.style.display = "none"; 
                readLessBtn4.style.display = "inline-block"; 
                });
                
                readLessBtn4.addEventListener("click", () => {
                content4.innerHTML = shortText4; 
                readMoreBtn4.style.display = "inline-block"; 
                readLessBtn4.style.display = "none"; 
                });
                break;

                case "five5":
                let content5 = document.getElementById("e");
                let readMoreBtn5 = document.getElementById("five5");
                let readLessBtn5 = document.getElementById("E");
                
                let fullText5 =
                "A professional networking platform that allows individuals and organizations to connect, share, and grow their professional presence online. It enables users to create and maintain profiles showcasing their career experiences, education, skills, and accomplishments.";
                
                let shortText5 = "A professional networking platform";
                
                readMoreBtn5.addEventListener("click", () => {
                content5.innerHTML = fullText5; 
                readMoreBtn5.style.display = "none"; 
                readLessBtn5.style.display = "inline-block"; 
                });
                
                readLessBtn5.addEventListener("click", () => {
                content5.innerHTML = shortText5; 
                readMoreBtn5.style.display = "inline-block"; 
                readLessBtn5.style.display = "none"; 
                });
                break;

            }

}

document.getElementById("scroll-left").addEventListener("click", function () {
    document.querySelector(".row").scrollBy({ left: -300, behavior: "smooth" });
});

document.getElementById("scroll-right").addEventListener("click", function () {
    document.querySelector(".row").scrollBy({ left: 300, behavior: "smooth" });
});


