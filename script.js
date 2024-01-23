document.addEventListener('DOMContentLoaded', function () {
    function searchJobs() {
        // Get user input 
        const industry = document.getElementById('industry').value;
        const location = document.getElementById('location').value;
        const jobRole = document.getElementById('job-role').value;

        // You can use this data to make API calls or filter static job data
        // For simplicity, I'll use static job data again
        const jobs = [
            { title: 'Web Developer', company: 'Tech Co', location: 'Remote' },
            { title: 'UX Designer', company: 'Design Studio', location: 'New York' },
            { title: 'Data Analyst', company: 'Data Corp', location: 'San Francisco' },
        ];

        const jobListings = document.getElementById('job-listings');

        // Clear previous job listings
        jobListings.innerHTML = '';

        // Render filtered job listings
        jobs.forEach(job => {
            if (
                job.title.toLowerCase().includes(jobRole.toLowerCase()) &&
                job.company.toLowerCase().includes(industry.toLowerCase()) &&
                job.location.toLowerCase().includes(location.toLowerCase())
            ) {
                const jobElement = document.createElement('div');
                jobElement.classList.add('job');
                jobElement.innerHTML = `
                    <h2>${job.title}</h2>
                    <p><strong>Company:</strong> ${job.company}</p>
                    <p><strong>Location:</strong> ${job.location}</p>
                `;
                jobListings.appendChild(jobElement);
            }
        });
    }

    // Expose the searchJobs function for the button click
    window.searchJobs = searchJobs;
});
