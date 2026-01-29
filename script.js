document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('exit-intent-popup');
    const closeBtn = document.querySelector('.close-btn');
    let popupShown = false;

    // Function to show the popup
    const showPopup = () => {
        if (!popupShown) {
            popup.style.display = 'flex';
            popupShown = true;
        }
    };

    // Function to hide the popup
    const hidePopup = () => {
        popup.style.display = 'none';
    };

    // Event listener for mouse leaving the document
    document.addEventListener('mouseout', (e) => {
        // If the mouse is leaving the top of the viewport
        if (e.clientY <= 0) {
            showPopup();
        }
    });

    // Event listener for the close button
    if(closeBtn) {
        closeBtn.addEventListener('click', hidePopup);
    }

    // Event listener to close popup when clicking outside the content
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            hidePopup();
        }
    });
    
    // Handle form submission
    const popupForm = popup.querySelector('form');
    if(popupForm) {
        popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = popupForm.querySelector('input[type="email"]');
            console.log('Subscribed with email:', emailInput.value);
            // Here you would typically send the email to your server
            alert('구독해주셔서 감사합니다!');
            hidePopup();
            emailInput.value = '';
        });
    }

});
