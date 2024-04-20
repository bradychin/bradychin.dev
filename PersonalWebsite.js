const jobs = document.querySelectorAll(".job");
jobs.forEach((job) => {
    job.addEventListener("click", () => {
        job.classList.toggle("active");
    })
})

const menu_item = document.querySelectorAll(".menu");
menu_item.forEach((menu) => {
    menu.addEventListener("click", () => {
        menu.classList.toggle("active");
        if (menu.classList.contains("active")) { showSidebar() }
        else { hideSidebar() }
    });
});

const sidebar_items = document.querySelectorAll('.sidebar') 

sidebar_items .forEach(item => {
    item.addEventListener("click", () => {
        menu_item.forEach((menu) => {
            menu.classList.remove("active");
        });
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