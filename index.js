document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    const premiumJobBoxes = document.querySelectorAll('.premium-job-box');
    let currentIndex = 0;

    function showCurrentJob() {
        premiumJobBoxes.forEach((box, index) => {
            box.classList.toggle('active', index === currentIndex);
        });
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === premiumJobBoxes.length - 1;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showCurrentJob();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < premiumJobBoxes.length - 1) {
            currentIndex++;
            showCurrentJob();
        }
    });

    showCurrentJob();
});




document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    const premiumJobBoxes = document.querySelectorAll('.premium-job-box');
    let currentIndex = 0;

  

    function updateJobDetails() {
        const currentJob = jobDescriptions[currentIndex];

        document.getElementById('role-description').innerHTML = currentJob.role.map(desc => `<li>${desc}</li>`).join('');
        document.getElementById('who-you-are-description').innerHTML = currentJob.whoYouAre.map(desc => `<li>${desc}</li>`).join('');
        document.getElementById('insights-description').innerHTML = currentJob.insights.map(desc => `<li>${desc}</li>`).join('');
        document.getElementById('company-description').innerHTML = currentJob.company.map(desc => `<li>${desc}</li>`).join('');
        document.getElementById('ottas-take-description').innerHTML = currentJob.ottasTake.map(desc => `<li>${desc}</li>`).join('');
    }

    function showCurrentJob() {
        premiumJobBoxes.forEach((box, index) => {
            box.classList.toggle('active', index === currentIndex);
        });
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === premiumJobBoxes.length - 1;
        updateJobDetails();
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showCurrentJob();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < premiumJobBoxes.length - 1) {
            currentIndex++;
            showCurrentJob();
        }
    });

    showCurrentJob();
});
