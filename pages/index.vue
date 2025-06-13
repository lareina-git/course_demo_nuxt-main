<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <img src="/images/mvp-logo.jpg" alt="MVP Toastmasters Club Logo" class="club-logo" />
        <h1>MVP TMC Bilingual Club</h1>
        <h2>MVP 头马双语俱乐部</h2>
        <p class="tagline">Where Freelancers, Digital Nomads, and Entrepreneurs Connect</p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="story">
      <div class="container">
        <h2>Our Story</h2>
        <div class="story-content">
          <p>
            MVP TMC头马双语俱乐部始于两位创始人的一次Coffee Chat。
            源于自己的痛与观察，希望为给单打独斗的自由职业者、数字游民、轻创业者找个伴，
            为想换赛道、GAP探索期的小伙伴搭把手。
          </p>
          <p>
            MVP TMC Bilingual Club began with a simple coffee chat between two founders.
            Born from personal experiences and observations, we aim to create a community
            for freelancers, digital nomads, and entrepreneurs who are seeking companionship
            and support during their career transitions and exploration periods.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #1a365d 0%, #2a4365 100%);
  color: white;
  padding: 120px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.tagline {
  font-size: 1.5rem;
  opacity: 0.9;
}

.story {
  padding: 80px 0;
  background-color: #f7fafc;
}

.story h2 {
  text-align: center;
  color: #2d3748;
  margin-bottom: 40px;
}

.story-content {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

.story-content p {
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #4a5568;
}

.club-logo {
  display: block;
  margin: 0 auto 32px auto;
  max-width: 180px;
  border-radius: 50%;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  background: white;
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  .tagline {
    font-size: 1.2rem;
  }
}
</style>

