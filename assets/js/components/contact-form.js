document.addEventListener('alpine:init', () => {
  Alpine.data('contactForm', () => ({
    lang: document.documentElement.lang || 'es',
    name: '',
    email: '',
    message: '',
    status: 'idle',
    showModal: false,
    csrfToken: window.CSRF_TOKEN || '',
    async submitForm() {
      this.status = 'loading';
      try {
        const response = await fetch('https://formspree.io/f/mojyykdg', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: this.name, email: this.email, message: this.message, _csrf: this.csrfToken })
        });
        if (response.ok) {
          this.status = 'success';
          setTimeout(() => {
            this.showModal = false;
            this.status = 'idle';
            this.name = this.email = this.message = '';
          }, 2500);
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        console.error(error);
        this.status = 'error';
      }
    }
  }));
});
