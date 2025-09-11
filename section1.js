<script>
    // Accordion functionality
    const acc = document.querySelectorAll(".accordion-item");
    acc.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // Continue button navigation
    document.getElementById("continueBtn").addEventListener("click", function () {
        window.location.href = "cantril-ladder.html"; // your next page
    });
</script>
