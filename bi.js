window.onload = function() {
    // Show the spinner when the page loads
    document.getElementById('spinner').style.display = 'block';

    setTimeout(function() {
        // Hide the spinner and second image after 20 seconds
        document.getElementById('spinner').style.display = 'none';
        document.getElementById('ppp2').style.display = 'none';
        
        // Change the status text to red and display "Payment not completed"
        const status = document.getElementById('status');
        status.innerText = 'Payment not completed';
        status.classList.add('red-text'); // Apply red color to the status text

        // Show the retry button
        document.getElementById('retryButton').style.display = 'inline-block';
    }, 20000); // 20 seconds delay
};
