document.addEventListener('DOMContentLoaded', function() {
    // Hide the sidebar after 2 seconds
    setTimeout(function() {
        document.querySelector('.sidebar').classList.add('hidden');
        document.querySelector('.reopen-sidebar').classList.add('show');
    }, 2000);

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
});
