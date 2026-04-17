"// Portfolio Data
const portfolioData = {
    projects: [
        {
            id: 1,
            title: \"Fermentation Process Study\",
            description: \"Comprehensive study of fermentation processes including curd, bread, and yeast fermentation. Analyzed metabolic pathways and optimized conditions for maximum yield.\",
            category: \"Biotechnology\",
            tags: [\"Fermentation\", \"Microbiology\", \"Lab Work\"],
            image: \"https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80\"
        },
        {
            id: 2,
            title: \"Bacterial Growth Analysis\",
            description: \"Study of bacterial growth patterns in different environmental conditions. Investigated effects of temperature, pH, and nutrient availability on growth rates.\",
            category: \"Biotechnology\",
            tags: [\"Bacteria\", \"Growth Analysis\", \"Environmental Study\"],
            image: \"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80\"
        },
        {
            id: 3,
            title: \"DNA Sequence Analysis\",
            description: \"Utilized online bioinformatics tools to analyze DNA sequences, identify genetic markers, and predict protein structures. Applied computational methods to biological data.\",
            category: \"Bioinformatics\",
            tags: [\"DNA\", \"Bioinformatics\", \"Computational Biology\"],
            image: \"https://images.unsplash.com/photo-1579154392429-0e6b4e850ad2?w=800&q=80\"
        },
        {
            id: 4,
            title: \"Gene Sequence Comparison\",
            description: \"Comparative genomics study analyzing gene sequences across different organisms. Used alignment algorithms and phylogenetic analysis tools.\",
            category: \"Bioinformatics\",
            tags: [\"Genomics\", \"Comparative Analysis\", \"Genetics\"],
            image: \"https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&q=80\"
        }
    ]
};

// Global state
let currentFilter = 'All';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    initScrollHandler();
    initContactForm();
});

// Scroll handler for header
function initScrollHandler() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        mobileNav.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}

// Filter projects
function filterProjects(category) {
    currentFilter = category;
    
    // Update active button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.textContent === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Render filtered projects
    renderProjects();
}

// Render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    const filteredProjects = currentFilter === 'All' 
        ? portfolioData.projects 
        : portfolioData.projects.filter(project => project.category === currentFilter);
    
    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class=\"project-card\">
            <div class=\"project-image-container\">
                <img src=\"${project.image}\" alt=\"${project.title}\" class=\"project-image\">
            </div>
            <div class=\"project-content\">
                <div class=\"project-header\">
                    <h3 class=\"project-title\">${project.title}</h3>
                    <span class=\"project-badge\">${project.category}</span>
                </div>
                <p class=\"project-description\">${project.description}</p>
                <div class=\"project-tags\">
                    ${project.tags.map(tag => `<span class=\"project-tag\">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize contact form
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        console.log('Form submitted:', formData);
        
        // Show success toast
        showToast('Message Sent!', 'Thank you for reaching out. I'll get back to you soon.');
        
        // Reset form
        form.reset();
    });
}

// Show toast notification
function showToast(title, message) {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}
"