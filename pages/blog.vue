<template>
  <div class="blog-outer">
    <div class="blog-card">
      <h1 class="blog-title">{{ blog.title }}</h1>
      <div class="blog-meta">
        <span class="meta-item"><i class="icon-user"></i>{{ blog.author }}</span>
        <span class="meta-dot">·</span>
        <span class="meta-item"><i class="icon-calendar"></i>{{ blog.date }}</span>
        <span class="meta-dot">·</span>
        <span class="meta-item"><i class="icon-tag"></i>
          <span v-for="(tag, idx) in blog.tags" :key="tag" class="blog-tag">{{ tag }}</span>
        </span>
      </div>
      <div class="blog-content">{{ blog.content }}</div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.blog-outer {
  min-height: 100vh;
  background: #f7f8fa;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 48px 12px;
}

.blog-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(44, 62, 80, 0.08);
  max-width: 700px;
  width: 100%;
  padding: 48px 36px 36px 36px;
  font-family: 'Inter', Arial, sans-serif;
  margin: 0 auto;
}

.blog-title {
  font-size: 2.6rem;
  font-weight: 700;
  color: #22223b;
  margin-bottom: 18px;
  letter-spacing: 0.5px;
}

.blog-meta {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #7a7a7a;
  margin-bottom: 32px;
  gap: 8px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.meta-dot {
  color: #d1d1d1;
  font-size: 1.2em;
}

.blog-tag {
  background: #fce4ec;
  color: #c2185b;
  border-radius: 12px;
  padding: 2px 12px;
  font-size: 0.95em;
  margin-right: 6px;
  font-weight: 600;
}

.blog-content {
  color: #22223b;
  font-size: 1.18rem;
  line-height: 1.85;
  margin-top: 12px;
  word-break: break-word;
}

.icon-user::before {
  content: '\1F464';
  margin-right: 4px;
}
.icon-calendar::before {
  content: '\1F4C5';
  margin-right: 4px;
}
.icon-tag::before {
  content: '\1F3F7';
  margin-right: 4px;
}

@media (max-width: 600px) {
  .blog-card {
    padding: 24px 8px 18px 8px;
  }
  .blog-title {
    font-size: 1.5rem;
  }
  .blog-meta {
    font-size: 0.95rem;
  }
  .blog-content {
    font-size: 1rem;
  }
}
</style>

<script setup>
import { ref } from 'vue';


const blog = ref({
  title: "",
  content: "",
  author: "",
  date: "",
  tags: []
});



async function getBlog() {
  const res = await $fetch('http://localhost:8000/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(res);
  blog.value = res
}

onMounted(() => {
  getBlog();
})
</script>