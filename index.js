document.addEventListener('DOMContentLoaded', function() {
    // Reopen sidebar
    document.querySelector('.reopen-sidebar').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.remove('hidden');
        document.querySelector('.reopen-sidebar').classList.remove('show');
    });

    // Show notification bar after 1 second
    setTimeout(function() {
        document.querySelector('.notification-bar').classList.add('show');
    }, 1000);

    // Close notification bar
    document.querySelector('.notification-bar .close-btn').addEventListener('click', function() {
        document.querySelector('.notification-bar').classList.remove('show');
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show credit modal
    document.querySelector('.credit-btn').addEventListener('click', function() {
        document.querySelector('.credit-modal').classList.add('show');
    });

    // Close credit modal
    document.querySelector('.credit-modal .close-btn').addEventListener('click', function() {
        document.querySelector('.credit-modal').classList.remove('show');
    });

    // Update date and time
    function updateDateTime() {
        const dateTimeBox = document.querySelector('.date-time');
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = now.toLocaleDateString(undefined, options);
        const time = now.toLocaleTimeString();
        dateTimeBox.innerHTML = `
            <h2>Current Date & Time</h2>
            <p>${date}</p>
            <p>${time}</p>
        `;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Suggestion box submission
    document.querySelector('.suggestion-box button').addEventListener('click', function() {
        const suggestion = document.querySelector('.suggestion-box textarea').value;
        if (suggestion.trim() === '') {
            alert('Please enter a suggestion before submitting.');
        } else {
            alert('Thank you for your suggestion!');
            document.querySelector('.suggestion-box textarea').value = '';
        }
    });

    // Hide loading spinner after page load
    const spinner = document.querySelector('.spinner');
    window.addEventListener('load', function() {
        spinner.style.display = 'none';
    });

    // Visitor counter
    function updateVisitorCount() {
        const visitorCount = localStorage.getItem('visitorCount') || 0;
        const newCount = parseInt(visitorCount) + 1;
        localStorage.setItem('visitorCount', newCount);
        document.getElementById('visitor-count').textContent = `Number of Visitors: ${newCount}`;
    }

    updateVisitorCount();

    // Update internet speed
    function updateInternetSpeed() {
        const speedIcon = document.querySelector('.internet-speed-icon');
        const speed = Math.floor(Math.random() * 100) + 1; // Simulate internet speed
        speedIcon.textContent = `Internet Speed: ${speed} Mbps`;
    }

    setInterval(updateInternetSpeed, 5000);
    updateInternetSpeed();

    // Fetch news from newsdata.io
    async function fetchNews() {
        try {
            const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_666790d12078dee00759aaf0ecf93cc6bed16&country=in&category=general');
            const data = await response.json();
            const newsSection = document.querySelector('.news-section');
            newsSection.innerHTML = '<h2>Important News</h2>';
            data.results.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                newsItem.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>Published: ${new Date(article.pubDate).toLocaleDateString()}</p>
                    <p>${article.description}</p>
                    <a href="${article.link}" target="_blank">Read more</a>
                `;
                newsSection.appendChild(newsItem);
            });
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }
    fetchNews();

    // Prevent screenshots
    document.addEventListener('keydown', function(event) {
        if (event.key === 'PrintScreen') {
            event.preventDefault();
            alert('Screenshots are not allowed on this page.');
        }
    });

    document.addEventListener('keyup', function(event) {
        if (event.key === 'PrintScreen') {
            navigator.clipboard.writeText('');
            alert('Screenshots are not allowed on this page.');
        }
    });
});
