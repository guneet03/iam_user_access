document.addEventListener("DOMContentLoaded", function () {
    const confirmLinks = document.querySelectorAll("a[data-confirm]");

    confirmLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const confirmMsg = link.getAttribute("data-confirm");
            if (!confirm(confirmMsg)) {
                e.preventDefault();
            }
        });
    });
});
