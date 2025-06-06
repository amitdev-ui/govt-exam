// Create and inject loader styles
const loaderStyles = `
    .loader-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease-out;
    }
    .loader-wrapper.fade-out {
        opacity: 0;
    }
    .loader {
        width: 80px;
        height: 80px;
        position: relative;
    }
    .loader:before,
    .loader:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 4px solid transparent;
        border-top-color:rgb(13, 211, 255);
    }
    .loader:before {
        animation: spin 1s linear infinite;
    }
    .loader:after {
        border-top-color:rgb(117, 255, 239);
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .loader-text {
        left: 50%;
        font-family: 'Poppins', sans-serif;
        color: #333;
        font-size: 14px;
        white-space: nowrap;
    }
`;

// Create style element and append to head
const styleElement = document.createElement('style');
styleElement.textContent = loaderStyles;
document.head.appendChild(styleElement);

// Create loader HTML
function createLoader() {
    const loaderWrapper = document.createElement('div');
    loaderWrapper.className = 'loader-wrapper';
    loaderWrapper.innerHTML = `
        <div class="loader"></div>
        <div class="loader-text"></div>
    `;
    document.body.appendChild(loaderWrapper);
    
    // Disable scrolling while loader is visible
    document.body.style.overflow = 'hidden';
}

// Function to remove the loader with delay
function removeLoader() {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        // Add 1 second delay before starting fade out
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.remove();
                // Re-enable scrolling
                document.body.style.overflow = '';
            }, 500); // Fade out duration
        }, 1000); // 1 second delay
    }
}

// Initialize loader as soon as possible
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createLoader);
} else {
    createLoader();
}

// Remove loader when page is fully loaded
window.addEventListener('load', () => {
    removeLoader();
});

// Optional: Remove loader after a maximum time (e.g., 10 seconds)
// This prevents the loader from staying forever if something goes wrong
setTimeout(() => {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        loader.remove();
        document.body.style.overflow = '';
    }
}, 10000);

// Handle page transitions (optional - uncomment if needed for SPA-like behavior)
/*
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.href && link.host === window.location.host && !link.href.startsWith('javascript:') && !e.ctrlKey && !e.metaKey) {
        // Ensure the loader is visible before navigating
        const loader = document.querySelector('.loader-wrapper');
        if (loader) {
             loader.classList.remove('fade-out'); // Show it again if hidden
             // Delay navigation slightly if needed
             // setTimeout(() => { window.location.href = link.href; }, 300); // Example delay
             // e.preventDefault(); // Prevent default navigation for custom handling
        } else {
             createLoader(); // Create if not present
        }
    }
});
*/

// Ensure loader is created when DOM is ready, handles cases where script is loaded async/defer
document.addEventListener('DOMContentLoaded', () => {
    // Check if the loader wrapper already exists to avoid duplicates
    if (!document.querySelector('.loader-wrapper')) {
        createLoader();
    }
});

// Page loader functionality
document.addEventListener('DOMContentLoaded', function() {
    // Show loader by default
    const loader = document.getElementById('loader');
    
    if (loader) {
        // Hide loader when page is fully loaded
        window.addEventListener('load', function() {
            setTimeout(() => {
                loader.classList.add('loader-hidden');
                
                // Remove loader completely after transition completes
                loader.addEventListener('transitionend', () => {
                    if (loader.parentNode) {
                        loader.parentNode.removeChild(loader);
                    }
                });
            }, 1000);
        });
        
        // Fallback - hide loader after 5 seconds in case load event never fires
        setTimeout(() => {
            if (loader.parentNode) {
                loader.classList.add('loader-hidden');
                setTimeout(() => {
                    if (loader.parentNode) {
                        loader.parentNode.removeChild(loader);
                    }
                }, 500);
            }
        }, 5000);
    }
}); 