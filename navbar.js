// Create navbar content
const navbarContent = `
<nav class="bg-white shadow-md">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex items-center">
                <a href="index.html" class="flex items-center">
                    <img src="img/logo.png" alt="CET Logo" class="h-10 w-10">
                    <span class="ml-2 text-xl font-semibold text-gov-blue">CET 2025</span>
                </a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-6">
                <a href="index.html" class="nav-link text-gray-700 hover:text-indian-blue transition duration-300 font-medium">Home</a>
                <a href="apply-now.html" class="nav-link text-gray-700 hover:text-indian-blue transition duration-300 font-medium">Apply Now</a>
                <a href="exam-pattern.html" class="nav-link text-gray-700 hover:text-indian-blue transition duration-300 font-medium">Exam Pattern</a>
                <a href="study-resources.html" class="nav-link text-gray-700 hover:text-indian-blue transition duration-300 font-medium">Study Resources</a>
                <a href="blog-index.html" class="nav-link text-gray-700 hover:text-indian-blue transition duration-300 font-medium">Blogs</a>
                <a href="contact-us.html" class="nav-link text-gray-700 hover:text-indian-blue transition duration-300 font-medium">Contact</a>
                <button id="translateBtn" class="bg-indian-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ml-4">
                    हिंदी में देखें
                </button>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button id="mobileMenuButton" class="mobile-menu-button text-gray-700 hover:text-indian-blue focus:outline-none">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobileMenu" class="mobile-menu hidden md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="index.html" class="mobile-nav-link block px-3 py-2 text-gray-700 hover:text-indian-blue transition duration-300 font-medium">Home</a>
                <a href="apply-now.html" class="mobile-nav-link block px-3 py-2 text-gray-700 hover:text-indian-blue transition duration-300 font-medium">Apply Now</a>
                <a href="exam-pattern.html" class="mobile-nav-link block px-3 py-2 text-gray-700 hover:text-indian-blue transition duration-300 font-medium">Exam Pattern</a>
                <a href="study-resources.html" class="mobile-nav-link block px-3 py-2 text-gray-700 hover:text-indian-blue transition duration-300 font-medium">Study Resources</a>
                <a href="blog-index.html" class="mobile-nav-link block px-3 py-2 text-gray-700 hover:text-indian-blue transition duration-300 font-medium">Blogs</a>
                <a href="contact-us.html" class="mobile-nav-link block px-3 py-2 text-gray-700 hover:text-indian-blue transition duration-300 font-medium">Contact</a>
                <button id="mobileTranslateBtn" class="mt-4 bg-indian-blue text-white w-full text-left px-3 py-2 rounded-md hover:bg-blue-700 transition duration-300 font-medium">
                    हिंदी में देखें
                </button>
            </div>
        </div>
    </div>
</nav>
`;

// Insert navbar into the page
document.getElementById('navbar').innerHTML = navbarContent;

// Initialize mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Add animation class
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('animate-slideDown');
            } else {
                mobileMenu.classList.remove('animate-slideDown');
            }
        });
    }

    // Set active link based on current page
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('text-indian-blue', 'font-semibold');
        }
    });

    // Add scroll event listener for sticky navbar
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                navbar.classList.add('sticky', 'top-0', 'z-50', 'bg-white', 'shadow-md');
            } else {
                navbar.classList.remove('sticky', 'top-0', 'z-50', 'bg-white', 'shadow-md');
            }
        });
    }
}); 