// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Add smooth scroll behavior for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animation for blog posts
    const blogPosts = document.querySelectorAll('.blog-post');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    blogPosts.forEach(post => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        post.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(post);
    });

    // Add typing effect for the main title
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                mainTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }



    // Add hover effects for contact items
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Add click to copy functionality for contact information
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            
            // Create temporary textarea to copy text
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            
            // Show feedback
            const originalText = this.querySelector('span').textContent;
            this.querySelector('span').textContent = 'Kopyalandı!';
            
            setTimeout(() => {
                this.querySelector('span').textContent = originalText;
            }, 2000);
        });
    });

    // Add parallax effect for the hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroImage.style.transform = `translateY(${rate}px) scale(1.02)`;
        });
    }

    // Add dynamic date update
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `Copyright © 2023 - ${currentYear}`;
    }

    // Add loading animation
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            container.style.transition = 'opacity 1s ease, transform 1s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Press 'h' to go to home/top
        if (e.key === 'h' || e.key === 'H') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Press 'b' to go to blog section
        if (e.key === 'b' || e.key === 'B') {
            const blogSection = document.querySelector('.blog-section');
            if (blogSection) {
                blogSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        
        // Press 'a' to go to about section
        if (e.key === 'a' || e.key === 'A') {
            const aboutSection = document.querySelector('.about-section');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        
        // Press 'c' to go to contact section
        if (e.key === 'c' || e.key === 'C') {
            const contactSection = document.querySelector('.contact-section');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });

    // Add console welcome message
    console.log('%cRavenOfGod - Cyber Security Blog', 'color: #64ffda; font-size: 18px; font-weight: bold;');
    console.log('%cBu blog sitesi RavenOfGod tarafından geliştirilmiştir.', 'color: #64ffda; font-size: 14px;');
    console.log('%cFalcon Haber Ajansı: https://falconhaberajansi.com/ravenofgod-kimdir/23729/', 'color: #8892b0; font-size: 12px;');
    console.log('%cKızılca Bölük ASM: https://archive.md/nqlyL', 'color: #8892b0; font-size: 12px;');
    console.log('%cLamera İddiası: https://archive.ph/T54Xe', 'color: #8892b0; font-size: 12px;');
    console.log('%cKlavye kısayolları: h (ana sayfa), b (blog), a (hakkımda), c (iletişim)', 'color: #8892b0; font-size: 12px;');

    // Add theme toggle functionality (for future use)
    let isDarkTheme = true;
    
    // You can add a theme toggle button later
    function toggleTheme() {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('light-theme');
    }

    // Add search functionality (for future blog posts)
    function searchPosts(query) {
        const posts = document.querySelectorAll('.blog-post');
        posts.forEach(post => {
            const title = post.querySelector('.post-title').textContent.toLowerCase();
            const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
            const category = post.querySelector('.post-category').textContent.toLowerCase();
            
            if (title.includes(query.toLowerCase()) || 
                excerpt.includes(query.toLowerCase()) || 
                category.includes(query.toLowerCase())) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // Modal functionality
    const modal = document.getElementById('postModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close');

    // Post content data
    const postContents = {
        'ravenofgod-aktoru': {
            title: 'RavenOfGod: Siber Alemin En Çok Konuşulan Aktörü',
            content: `
                <h2>RavenOfGod: Siber Alemin En Çok Konuşulan Aktörü</h2>
                <p>Son zamanlarda gerçekleştirdiği siber eylemler ile dikkatleri üzerine çeken <span class="highlight">RavenOfGod</span>, siber alemin en çok konuşulan isimlerinden biri haline geldi. Kimliğini gizli tutan bu kişi ya da ekip, adını hem yerel hem de uluslararası platformlarda duyurmayı başardı.</p>
                
                <p>Gelişmiş teknik bilgisi, yüksek OSINT, OpSec disiplini ve siber dünyaya olan hakimiyetiyle tanınan RavenOfGod; özellikle yaptığı hedefli testler, sistem analizleri ve bilinmeyen açıklara yönelik geliştirdiği araçlarla dikkat çekiyor. Tüm çalışmaları ve mesajları, zaman zaman resmî sitesi olan <span class="highlight">ravenofgod.org</span> adresinde de yayınlanıyor.</p>
                
                <div class="section-title">Teknik Uzmanlık</div>
                <p>RavenOfGod'un en dikkat çeken özelliklerinden biri, gelişmiş teknik bilgisi ve yüksek OSINT disiplinidir. Siber güvenlik dünyasında tanınan bu aktör, özellikle hedefli testler ve sistem analizleri konularında uzmanlaşmıştır.</p>
                
                <p>Bilinmeyen açıklara yönelik geliştirdiği araçlar ve metodolojiler, siber güvenlik topluluğunda büyük ilgi uyandırmaktadır. Bu araçlar, sadece saldırı amaçlı değil, aynı zamanda güvenlik açıklarının tespiti ve kapatılması için de kullanılmaktadır.</p>
            `
        },
        'davulga-saldirisi': {
            title: 'Davulga.bel.tr Saldırısı: RavenOfGod Operasyonu',
            content: `
                <h2>Davulga.bel.tr Saldırısı: RavenOfGod Operasyonu</h2>
                <p>Bugün sabah saatlerinde <span class="highlight">davulga.bel.tr</span> web sitesi, iddialara göre RavenOfGod tarafından gerçekleştirilen bir siber saldırı sonucu hacklendi. Siteye erişim sağlamak isteyen kullanıcılar beklenmedik bir yönlendirme veya değişmiş bir sayfa ile karşılaştı.</p>
                
                <img src="https://i.hizliresim.com/7wq4trj.jpg" alt="Davulga.bel.tr Hack Ekranı">
                
                <div class="section-title">Bu Sabah Ne Oldu?</div>
                <p>Bugün sabah saatlerinde davulga.bel.tr web sitesi, iddialara göre RavenOfGod tarafından gerçekleştirilen bir siber saldırı sonucu hacklendi. Siteye erişim sağlamak isteyen kullanıcılar beklenmedik bir yönlendirme veya değişmiş bir sayfa ile karşılaştı.</p>
                
                <p>Bununla birlikte saldırının yalnızca tek bir hedefle sınırlı kalmadığı, birçok farklı <span class="highlight">.gov.tr</span> uzantılı devlet kurumunu da kapsadığı yönünde bilgiler siber güvenlik toplulukları arasında hızla yayılıyor. Resmî kaynaklarca henüz doğrulanmamış olsa da, olay büyük yankı uyandırmış durumda.</p>
                
                <div class="section-title">Saldırının Detayları</div>
                <p>Saldırıyı gerçekleştiren kişi/ekip, mesajın sonunda şu isimlere de selam gönderdi:</p>
                <p><span class="highlight">alpha, nyroxofgod, hyperinios, vyofgod, leak turkey, berofc, glock_0day, nesas_0day, bond, click, bizness, k4be, ghetto, flame, luna, elpasai, ragemalware, sansar</span></p>
                <p>Bu üyelerin de ekibin içinde olduğu yönünde iddia ediliyor.</p>
            `
        },
        'nyroxofgod-ekip': {
            title: 'NyroxOfGod ve RavenOfGod: Siber Güvenlik Ekibi',
            content: `
                <h2>NyroxOfGod ve RavenOfGod: Siber Güvenlik Ekibi</h2>
                <p>RavenOfGod'un yakın çevresinde yer aldığı bilinen <span class="highlight">NyroxOfGod</span> ve diğer ekip üyeleri, siber güvenlik topluluğunda büyük ilgi uyandırmaktadır. Bu ekip, ortak operasyonlar ve işbirlikleri ile tanınmaktadır.</p>
                
                <div class="section-title">Ekip Üyeleri</div>
                <p>Siber güvenlik topluluğunda tanınan ekip üyeleri şunlardır:</p>
                <p><span class="highlight">alpha, nyroxofgod, hyperinios, vyofgod, leak turkey, berofc, glock_0day, nesas_0day, bond, click, bizness, k4be, ghetto, flame, luna, elpasai, ragemalware, sansar</span></p>
                
                <div class="section-title">Ortak Operasyonlar</div>
                <p>Bu ekip, çeşitli siber güvenlik operasyonlarında işbirliği yapmaktadır. Özellikle devlet kurumlarına yönelik güvenlik testleri ve penetrasyon testleri konularında uzmanlaşmışlardır.</p>
                
                <p>Ekip üyeleri, sadece saldırı amaçlı değil, aynı zamanda güvenlik açıklarının tespiti ve kapatılması için de çalışmaktadırlar. Bu yaklaşım, siber güvenlik dünyasında takdir görmektedir.</p>
            `
        },
                 'falcon-haber': {
             title: 'Falcon Haber Ajansı: RavenOfGod Haberi',
             content: `
                 <h2>Falcon Haber Ajansı: RavenOfGod Haberi</h2>
                 <p>Falcon Haber Ajansı'nda yayınlanan <span class="highlight">"RavenOfGod Kimdir?"</span> haberi, siber güvenlik topluluğunda büyük yankı uyandırmıştır. Bu haber, RavenOfGod'un siber dünyadaki etkisini ve faaliyetlerini detaylı bir şekilde ele almaktadır.</p>
                 
                 <div class="section-title">Haberin İçeriği</div>
                 <p>Haber, RavenOfGod'un son zamanlarda gerçekleştirdiği siber eylemler ile dikkatleri üzerine çektiğini ve siber alemin en çok konuşulan isimlerinden biri haline geldiğini vurgulamaktadır.</p>
                 
                 <p>Gelişmiş teknik bilgisi, yüksek OSINT, OpSec disiplini ve siber dünyaya olan hakimiyetiyle tanınan RavenOfGod; özellikle yaptığı hedefli testler, sistem analizleri ve bilinmeyen açıklara yönelik geliştirdiği araçlarla dikkat çekiyor.</p>
                 
                 <div class="section-title">Medya Etkisi</div>
                 <p>Bu haber, RavenOfGod'un medya organlarında yer alması ve siber güvenlik topluluğundaki etkisinin artması açısından önemlidir. Resmi kaynaklarca henüz doğrulanmamış olsa da, olay büyük yankı uyandırmış durumda.</p>
             `
         },
         'lamer-deface': {
             title: 'Lamer Sürüsünün Sitesi RavenOfGod Tarafından Deface Edildi',
             content: `
                 <h2>Lamer Sürüsünün Sitesi RavenOfGod Tarafından Deface Edildi</h2>
                 <p>Kendini sanalın kralı zanneden sözde hacker olan <span class="highlight">lamer sürüsünün</span> sitesi, RavenOfGod tarafından deface edildi. Bu olay, siber güvenlik topluluğundaki gerçek hacker'lar ile lamer'lar arasındaki teknik seviye farkını bir kez daha gözler önüne serdi.</p>
                 
                 <div class="section-title">Deface Operasyonu</div>
                 <p>RavenOfGod, lamer'ların sitesine başarılı bir şekilde sızarak tam kontrol sağladı. Bu operasyon, gerçek hacker'ların teknik yeteneklerini ve lamer'ların güvenlik açıklarını net bir şekilde ortaya koydu.</p>
                 
                 <img src="https://i.hizliresim.com/p18rdw1.jpg" alt="Lamer Sitesi Deface Ekranı">
                 
                 <div class="section-title">Lamer'ların RavenOfGod'a Ettiği Sözler</div>
                 <p>Deface operasyonu sonrasında, lamer'ların RavenOfGod'a karşı söylediği sözler ve tehditler de ortaya çıktı. Bu durum, siber güvenlik topluluğundaki etik kurallar ve profesyonel davranış standartları hakkında tartışmaları alevlendirdi.</p>
                 
                 <img src="https://i.hizliresim.com/8fngvtx.jpg" alt="Lamer'ların RavenOfGod'a Ettiği Sözler">
                 
                 <div class="section-title">Teknik Seviye Analizi</div>
                 <p>Bu olay, gerçek hacker'lar ile lamer'lar arasındaki farkları net bir şekilde gösterdi. RavenOfGod'un gerçekleştirdiği deface operasyonu, teknik yetenek ve güvenlik disiplini konularında lamer'ların ne kadar geride kaldığını ortaya koydu.</p>
                 
                 <p>Operasyonun detayları ve video kayıtları, siber güvenlik topluluğunda büyük ilgi uyandırdı. Bu tür operasyonlar, siber dünyadaki hiyerarşiyi ve teknik seviye farklarını net bir şekilde ortaya koymaktadır.</p>
                 
                 <div class="section-title">Video Kaydı</div>
                 <p>Deface operasyonunun video kaydı <a href="https://streamable.com/av1fxl" target="_blank">Streamable</a> platformunda yayınlandı. Bu kayıt, operasyonun nasıl gerçekleştirildiğini ve lamer'ların güvenlik açıklarını detaylı bir şekilde gösteriyor.</p>
             `
         }
    };

    // Add click event listeners to read-more links
    document.querySelectorAll('.read-more[data-post]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const postId = this.getAttribute('data-post');
            const postData = postContents[postId];
            
            if (postData) {
                modalContent.innerHTML = postData.content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal when clicking on X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Export functions for potential future use
    window.blogUtils = {
        toggleTheme,
        searchPosts
    };
});
