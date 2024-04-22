const totalBars = document.querySelectorAll('.menu-bar');
totalBars.forEach((menubar) => {
    menubar.addEventListener("click", () => {
        menubar.classList.toggle("active");
        if (menubar.classList.contains("active")) { showSidebar() }
        else { hideSidebar() }
    });
});

const sidebar_items = document.querySelectorAll('.sidebar');
sidebar_items .forEach(item => {
    item.addEventListener("click", () => {
        totalBars.forEach((menubar) => {
            menubar.classList.remove("active");
        });
    });
});

const jobs = document.querySelectorAll(".job");
jobs.forEach((job) => {
    job.addEventListener("click", () => {
        job.classList.toggle("active");
    });
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}