var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.add("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") 
        {
            panel.style.display = "none";
        } 
        else 
        {
            panel.style.display = "block";
        }
    });
}