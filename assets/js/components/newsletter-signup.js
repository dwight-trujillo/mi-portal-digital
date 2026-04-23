document.addEventListener('alpine:init', () => {
  Alpine.data('newsletterSignup', () => ({
    email: '',
    honeypot: '',
    lang: document.documentElement.lang || 'es',
    status: 'idle',
    error: '',
    async submit() {
      if (this.honeypot) return;
      this.status = 'loading';
      this.error = '';
      try {
        const response = await fetch('https://formspree.io/f/xdayywzw', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email, _language: this.lang })
        });
        if (response.ok) {
          this.status = 'success';
          this.email = '';
        } else {
          throw new Error(this.lang === 'en' ? 'Something went wrong.' : 'Algo salio mal.');
        }
      } catch (e) {
        this.error = e.message;
        this.status = 'idle';
      }
    }
  }));
});
