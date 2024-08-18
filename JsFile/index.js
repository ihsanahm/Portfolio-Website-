
//script for projects  
let currentIndex = 0;

function showSlide(index) {
    const carouselContainer = document.getElementById('carouselContainer');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000); // Automatically move to the next slide every 3 seconds


const projects = [
    {
        title: 'Project Name 1',
        description: 'A brief description of the project, technologies used, and your role in it.',
        imageUrl: 'link-to-project-image1.jpg',
        link: 'https://link-to-project1.com',
    },
    {
        title: 'Project Name 2',
        description: 'A brief description of the project, technologies used, and your role in it.',
        imageUrl: 'link-to-project-image2.jpg',
        link: 'https://link-to-project2.com',
    },
    {
        title: 'Project Name 3',
        description: 'A brief description of the project, technologies used, and your role in it.',
        imageUrl: 'link-to-project-image1.jpg',
        link: 'https://link-to-project1.com',
    },
    {
        title: 'Project Name 4',
        description: 'A brief description of the project, technologies used, and your role in it.',
        imageUrl: 'link-to-project-image2.jpg',
        link: 'https://link-to-project2.com',
    },
    // Add more projects as needed
];

const projectsGrid = document.getElementById('projects');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    projectCard.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}">
        <div class="project-info">
            <h2 class="project-title">${project.title}</h2>
            <p class="project-description">${project.description}</p>
            <a href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    `;

    projectsGrid.appendChild(projectCard);
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Capture the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can add more)
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Here you can add code to send the form data to your server (e.g., using fetch or XMLHttpRequest)
    console.log('Form submitted:', { name, email, subject, message });

    // Clear the form after submission
    document.getElementById('contactForm').reset();

    // Provide feedback to the user
    alert('Thank you for your message!');
});
