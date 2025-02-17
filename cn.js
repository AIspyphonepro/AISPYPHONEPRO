document.getElementById('refundBtn').addEventListener('click', function() {
    let userId = document.getElementById('userId').value;
    let responseMessage = document.getElementById('responseMessage');
  
    if (!userId) {
      responseMessage.innerText = "Please enter your ID.";
      responseMessage.classList.remove('hidden');
    } else {
      responseMessage.innerText = "You have not subscribed yet to the free plan.";
      responseMessage.classList.remove('hidden');
    }
  });
  