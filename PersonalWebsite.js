const jobs = document.querySelectorAll(".job");

jobs.forEach((job) => {
    job.addEventListener("click", () => {
        job.classList.toggle("active");
    })
})