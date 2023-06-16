var slideIndex = 0;
        var slides = document.getElementsByTagName("img");
        var prev = document.querySelector(".prev");
        var next = document.querySelector(".next");
        
        showSlide(slideIndex);
        
        prev.addEventListener("click", function() {
            slideIndex--;
            if (slideIndex < 0) {
                slideIndex = slides.length - 1;
            }
            showSlide(slideIndex);
        });
        
        next.addEventListener("click", function() {
            slideIndex++;
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }
            showSlide(slideIndex);
        });
        
        function showSlide(index) {
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[index].style.display = "block";
        }