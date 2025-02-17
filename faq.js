document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
  
      // Toggle 'show' class to expand/collapse answer
      if (answer.classList.contains('show')) {
        answer.classList.remove('show');
      } else {
        // Hide any currently opened answers
        document.querySelectorAll('.faq-answer.show').forEach(ans => {
          ans.classList.remove('show');
        });
        answer.classList.add('show');
      }
    });
  });
  