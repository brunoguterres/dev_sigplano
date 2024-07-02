document.querySelector(".side-panel-toggle").addEventListener("click", () => {
    document.querySelector(".wrapper").classList.toggle("side-panel-open");
});

document.querySelectorAll(".tab-link").forEach(button => {
    button.addEventListener("click", () => {
        const sidePanel = button.closest(".side-panel");
        sidePanel.querySelectorAll(".tab-link").forEach(btn => btn.classList.remove("active"));
        sidePanel.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

        button.classList.add("active");
        sidePanel.querySelector(`#${button.dataset.tab}`).classList.add("active");
    });
});
