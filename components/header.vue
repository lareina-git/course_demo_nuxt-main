<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="/images/mvp-logo.jpg" alt="MVP Toastmasters Club Logo" class="club-logo" />
      </div>
      
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">首页</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about-us" class="nav-link">欢迎联系我们</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/blog" class="nav-link">博客</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/contact-us" class="nav-link">联系我们</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
}

.logo {
  display: flex;
  align-items: center;
}

.club-logo {
  max-width: 120px;
  max-height: 120px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.logo h1 {
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: transparent;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 182, 193, 0.2);
  transition: left 0.3s ease;
  z-index: -1;
}

.nav-link:hover::before {
  left: 0;
}

.nav-link:hover {
  color: #ff69b4;
  background: #fff;
  box-shadow: 0 4px 12px rgba(255, 182, 193, 0.2);
}

.nav-link.router-link-active {
  background: #fff;
  color: #ff69b4;
  border: 1px solid #ff69b4;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 1rem;
    padding: 15px 20px;
  }
  
  .nav-list {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .logo h1 {
    font-size: 1.5rem;
  }
  
  .nav-link {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .nav-list {
    gap: 0.5rem;
  }
  
  .nav-link {
    padding: 6px 10px;
    font-size: 0.85rem;
  }
}
</style>