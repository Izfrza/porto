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
// Tambahkan di bagian JavaScript yang sudah ada

// Efek zoom pada gambar sertifikat
const certificateImages = document.querySelectorAll('.certificate-image img');
certificateImages.forEach(img => {
    img.addEventListener('click', function() {
        // Buat modal untuk zoom gambar
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '9999';
        modal.style.cursor = 'zoom-out';
        
        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.style.maxWidth = '90%';
        modalImg.style.maxHeight = '90%';
        modalImg.style.objectFit = 'contain';
        modalImg.style.borderRadius = '10px';
        modalImg.style.boxShadow = '0 0 40px rgba(108, 99, 255, 0.5)';
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        
        // Tutup modal saat diklik
        modal.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        // Tambahkan tombol close
        const closeBtn = document.createElement('div');
        closeBtn.innerHTML = '✕';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '20px';
        closeBtn.style.right = '20px';
        closeBtn.style.color = 'white';
        closeBtn.style.fontSize = '2rem';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.zIndex = '10000';
        closeBtn.style.transition = 'all 0.3s ease';
        
        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.transform = 'scale(1.2)';
            closeBtn.style.color = '#6C63FF';
        });
        
        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.transform = 'scale(1)';
            closeBtn.style.color = 'white';
        });
        
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.body.removeChild(modal);
        });
        
        modal.appendChild(closeBtn);
    });
});

// Efek hover untuk kartu sertifikat minimalis
const certificateCards = document.querySelectorAll('.certificate-card');
certificateCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const body = card.querySelector('.certificate-body');
        const image = card.querySelector('.certificate-image img');
        const title = card.querySelector('.certificate-title h2');
        
        body.style.transform = 'translateY(-10px) scale(1.02)';
        image.style.transform = 'scale(1.05)';
        title.style.transform = 'scale(1.05)';
        title.style.letterSpacing = '1px';
    });
    
    card.addEventListener('mouseleave', () => {
        const body = card.querySelector('.certificate-body');
        const image = card.querySelector('.certificate-image img');
        const title = card.querySelector('.certificate-title h2');
        
        body.style.transform = 'translateY(0) scale(1)';
        image.style.transform = 'scale(1)';
        title.style.transform = 'scale(1)';
        title.style.letterSpacing = '0.5px';
    });
});

// Scroll indicator untuk sertifikat minimalis
const createScrollIndicator = () => {
    const indicatorContainer = document.createElement('div');
    indicatorContainer.className = 'certificate-scroll-indicator';
    
    for (let i = 0; i < certificateCards.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'certificate-scroll-dot';
        dot.setAttribute('data-index', i);
        
        dot.addEventListener('click', () => {
            const targetCard = certificateCards[i];
            window.scrollTo({
                top: targetCard.offsetTop - 100,
                behavior: 'smooth'
            });
        });
        
        indicatorContainer.appendChild(dot);
    }
    
    document.querySelector('.certificates-section').appendChild(indicatorContainer);
    
    // Update dot aktif saat scroll
    window.addEventListener('scroll', () => {
        const dots = document.querySelectorAll('.certificate-scroll-dot');
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        certificateCards.forEach((card, index) => {
            const cardTop = card.offsetTop;
            const cardBottom = cardTop + card.offsetHeight;
            
            if (scrollPosition >= cardTop && scrollPosition <= cardBottom) {
                dots.forEach(dot => dot.classList.remove('active'));
                if (dots[index]) dots[index].classList.add('active');
            }
        });
    });
};

// Panggil fungsi setelah DOM dimuat
document.addEventListener('DOMContentLoaded', createScrollIndicator);
// Tambahkan di bagian akhir file app.js, sebelum [file content end]

// Pastikan gambar sertifikat memenuhi container tanpa celah
document.addEventListener('DOMContentLoaded', function() {
    const certificateImages = document.querySelectorAll('.certificate-image img');
    
    certificateImages.forEach(img => {
        // Pastikan gambar di-load dengan benar
        img.onload = function() {
            this.style.objectFit = 'cover';
            this.style.width = '100%';
            this.style.height = '100%';
            this.style.borderRadius = 'inherit';
        };
        
        // Jika gambar sudah di-load
        if (img.complete) {
            img.style.objectFit = 'cover';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.borderRadius = 'inherit';
        }
    });
    
    // Pastikan container gambar memiliki ukuran yang tepat
    const certificateImageContainers = document.querySelectorAll('.certificate-image');
    certificateImageContainers.forEach(container => {
        container.style.overflow = 'hidden';
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
        container.style.position = 'relative';
    });
});
// Sertifikat hanya gambar saja
document.addEventListener('DOMContentLoaded', function() {
    // Pastikan gambar memenuhi container
    const certImages = document.querySelectorAll('.certificate-image img');
    
    certImages.forEach(img => {
        // Atur gambar agar selalu mengisi penuh
        img.style.objectFit = 'cover';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.borderRadius = 'inherit';
        
        // Hilangkan background color jika ada
        img.style.backgroundColor = 'transparent';
        
        // Pastikan saat di-load
        img.onload = function() {
            this.style.objectFit = 'cover';
            this.style.width = '100%';
            this.style.height = '100%';
        };
    });
    
    // Hilangkan elemen judul jika ada
    const certTitles = document.querySelectorAll('.certificate-title');
    certTitles.forEach(title => {
        title.style.display = 'none';
    });
    
    const certDates = document.querySelectorAll('.certificate-date');
    certDates.forEach(date => {
        date.style.display = 'none';
    });
    
    // Perbaiki container gambar
    const certContainers = document.querySelectorAll('.certificate-image');
    certContainers.forEach(container => {
        container.style.padding = '0';
        container.style.margin = '0';
        container.style.border = 'none';
    });
});
// ==================== ANIMATED SKILLS ICONS ====================
document.addEventListener('DOMContentLoaded', function() {
    const skillBoxes = document.querySelectorAll('.skill-icon-box');
    
    // Add click animation
    skillBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Add pulse animation
            this.style.animation = 'none';
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.animation = '';
                this.style.transform = '';
                
                // Show alert with skill info
                const tooltip = this.getAttribute('data-tooltip');
                const [skill, level] = tooltip.split(' - ');
                
                // Create custom notification
                const notification = document.createElement('div');
                notification.className = 'skill-notification';
                notification.innerHTML = `
                    <strong>${skill}</strong>
                    <span class="level-badge">${level}</span>
                `;
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: rgba(30, 30, 46, 0.95);
                    backdrop-filter: blur(10px);
                    padding: 15px 20px;
                    border-radius: 15px;
                    border: 2px solid rgba(108, 99, 255, 0.5);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    z-index: 9999;
                    animation: slideIn 0.3s ease, slideOut 0.3s ease 2.7s;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    color: white;
                    font-size: 1rem;
                `;
                
                // Add notification styles
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes slideOut {
                        from { transform: translateX(0); opacity: 1; }
                        to { transform: translateX(100%); opacity: 0; }
                    }
                    .level-badge {
                        padding: 5px 12px;
                        background: rgba(108, 99, 255, 0.2);
                        color: #6C63FF;
                        border-radius: 20px;
                        font-size: 0.85rem;
                        font-weight: 600;
                        border: 1px solid rgba(108, 99, 255, 0.3);
                    }
                `;
                document.head.appendChild(style);
                
                document.body.appendChild(notification);
                
                // Remove notification after 3 seconds
                setTimeout(() => {
                    notification.remove();
                    style.remove();
                }, 3000);
                
            }, 100);
        });
    });
    
    // Add mouse move parallax effect
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        skillBoxes.forEach((box, index) => {
            const delay = index * 0.1;
            setTimeout(() => {
                box.style.transform = `
                    translateY(-10px)
                    translateX(${x * 0.2}px)
                    translateY(${y * 0.2}px)
                    rotateX(${y * 0.1}deg)
                    rotateY(${x * 0.1}deg)
                `;
            }, delay * 100);
        });
    });
    
    // Reset position on mouse leave
    document.addEventListener('mouseleave', () => {
        skillBoxes.forEach(box => {
            box.style.transform = 'translateY(-10px)';
        });
    });
    
    // Random pulse animation
    setInterval(() => {
        const randomBox = skillBoxes[Math.floor(Math.random() * skillBoxes.length)];
        randomBox.classList.add('pulse');
        
        setTimeout(() => {
            randomBox.classList.remove('pulse');
        }, 500);
    }, 3000);
    
    // Add pulse class styles
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
        .skill-icon-box.pulse {
            animation: quickPulse 0.5s ease;
        }
        @keyframes quickPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.15); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(pulseStyle);
});
