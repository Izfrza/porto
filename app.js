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
// Tambahkan di akhir file app.js sebelum penutup

// Mobile Menu Improvements
function initMobileMenu() {
    const menu = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');
    const closeIcon = document.querySelector('.close-icon');
    
    // Prevent body scroll when menu is open
    function disableBodyScroll() {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
    }
    
    function enableBodyScroll() {
        document.body.style.overflow = '';
        document.body.style.height = '';
    }
    
    // Open sidebar
    menu.addEventListener('click', function() {
        sidebar.classList.remove('close-sidebar');
        sidebar.classList.add('open-sidebar');
        disableBodyScroll();
    });
    
    // Close sidebar
    closeIcon.addEventListener('click', function() {
        sidebar.classList.remove('open-sidebar');
        sidebar.classList.add('close-sidebar');
        enableBodyScroll();
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (sidebar.classList.contains('open-sidebar') && 
            !sidebar.contains(event.target) && 
            !menu.contains(event.target)) {
            sidebar.classList.remove('open-sidebar');
            sidebar.classList.add('close-sidebar');
            enableBodyScroll();
        }
    });
    
    // Close sidebar when clicking on links
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('open-sidebar');
            sidebar.classList.add('close-sidebar');
            enableBodyScroll();
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open-sidebar');
            sidebar.classList.add('close-sidebar');
            enableBodyScroll();
        }
    });
}

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    
    // Add loading animation for mobile
    const projectImages = document.querySelectorAll('.project-imgbox img');
    projectImages.forEach(img => {
        img.loading = 'lazy';
    });
});

// Touch-friendly video controls for mobile
function initMobileVideoControls() {
    const videoList = [video1, video2, video3];
    
    if ('ontouchstart' in window) {
        // For touch devices, use tap to play/pause instead of hover
        videoList.forEach(function(video) {
            let isPlaying = false;
            
            video.addEventListener('touchstart', function(e) {
                e.preventDefault();
                
                if (isPlaying) {
                    video.pause();
                    hoverSign.classList.remove("active");
                } else {
                    video.play();
                    hoverSign.classList.add("active");
                }
                
                isPlaying = !isPlaying;
            });
            
            // Keep the mouseover events for desktop
            video.addEventListener("mouseover", function() {
                if (!('ontouchstart' in window)) {
                    video.play();
                    hoverSign.classList.add("active");
                }
            });
            
            video.addEventListener("mouseout", function() {
                if (!('ontouchstart' in window)) {
                    video.pause();
                    hoverSign.classList.remove("active");
                }
            });
        });
    }
}

// Call this function after DOM is loaded
document.addEventListener('DOMContentLoaded', initMobileVideoControls);
