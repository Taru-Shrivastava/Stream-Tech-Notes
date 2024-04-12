
    function submitReview() {
        const userEmail = document.getElementById('user-email').value;
        const userSuggestion = document.getElementById('user-suggestion').value;
        const rating = document.querySelector('input[name="rating"]:checked');

        if (!userEmail || !userSuggestion || !rating) {
            alert('Please fill in all fields and select a rating.');
            return;
        }

        const formData = new FormData();
        formData.append('user-email', userEmail);
        formData.append('user-suggestion', userSuggestion);
        formData.append('rating', rating.value);

        fetch('/submit_review', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Review submitted successfully!');
                document.getElementById('user-email').value = '';
                document.getElementById('user-suggestion').value = '';
                document.querySelector('input[name="rating"]:checked').checked = false;
            } else {
                throw new Error('review submitted');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('review submitted');
        });
    }

    document.addEventListener('scroll', function() {
        var header = document.querySelector('nav');
        var scrollPosition = window.scrollY;

        if (scrollPosition < 80) {
            header.style.top = '80px';
        } else {
            header.style.top = '0';
        }
    });

    const navMenu = document.querySelector('nav');
    const navButton = document.createElement('button');
    navButton.textContent = 'Menu';
    navButton.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Add/remove 'active' class from nav
    });
    document.body.insertBefore(navButton, document.body.firstChild);