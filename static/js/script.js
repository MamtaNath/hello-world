document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const greetBtn = document.getElementById('greetBtn');
    const greetingDisplay = document.getElementById('greetingDisplay');
    const greetingText = document.getElementById('greetingText');

    const handleGreet = async () => {
        const name = nameInput.value.trim();
        
        try {
            greetBtn.disabled = true;
            greetBtn.textContent = 'Processing...';

            const response = await fetch('/greet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });

            const data = await response.json();
            
            // Show greeting with small delay for effect
            setTimeout(() => {
                greetingText.textContent = data.greeting;
                greetingDisplay.classList.remove('hidden');
                greetBtn.disabled = false;
                greetBtn.textContent = 'Greet Me';
            }, 300);

        } catch (error) {
            console.error('Error:', error);
            greetingText.textContent = 'Oops! Something went wrong.';
            greetingDisplay.classList.remove('hidden');
            greetBtn.disabled = false;
            greetBtn.textContent = 'Greet Me';
        }
    };

    greetBtn.addEventListener('click', handleGreet);

    // Support Enter key
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleGreet();
        }
    });
});
