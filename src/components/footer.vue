<template>
  <footer>
    <div class="container">
      <div class="social-links">
        <a href="https://www.linkedin.com/in/suman-deb-roy-448b584/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/icons8-linkedin-50.png" alt="LinkedIn">
        </a>
        <a href="mailto:suman.debroy@gmail.com">
          <img src="../assets/icons8-gmail-48.png" alt="Gmail">
        </a>
        <a href="https://github.com/sumane123" target="_blank" rel="noopener noreferrer">
          <img src="../assets/icons8-git-50.png" alt="GitHub">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff; 
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-links a {
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  font-size: 1.5em; 
  transition: opacity 0.3s ease-in-out;
}

.social-links a:hover {
  opacity: 0.8;
}

.social-links img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
