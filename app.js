<script>
    document.querySelectorAll("li").forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "#dbe9ff";
        });
        item.addEventListener("mouseout", () => {
            item.style.backgroundColor = "#eef3f9";
        });
    });
</script>
