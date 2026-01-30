const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})
// Mobile detection and optimization
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isPortraitOrientation() {
    return window.innerHeight > window.innerWidth;
}

// Initialize mobile optimizations
document.addEventListener('DOMContentLoaded', function() {
    if (isMobileDevice()) {
        // Disable video autoplay on mobile for better performance
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.removeAttribute('autoplay');
            video.setAttribute('preload', 'none');
        });
        
        // Optimize sidebar for touch
        const sidebarLinks = document.querySelectorAll('.sidebar a');
        sidebarLinks.forEach(link => {
            link.style.padding = '12px 0';
            link.style.minHeight = '44px'; // Minimum touch target
        });
        
        // Add touch feedback for buttons
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.opacity = '0.7';
            });
            button.addEventListener('touchend', function() {
                this.style.opacity = '1';
            });
        });
    }
    
    // Handle orientation changes
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            if (isPortraitOrientation()) {
                // Portrait-specific adjustments
                document.body.classList.add('portrait-mode');
                document.body.classList.remove('landscape-mode');
            } else {
                // Landscape-specific adjustments
                document.body.classList.add('landscape-mode');
                document.body.classList.remove('portrait-mode');
            }
            // Trigger AOS refresh for proper animations
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        }, 300);
    });
});
