<template>
  <div class="container">
    <div class="portfolio-content">

      <div class="card">
        <h2>Portfolio Manager</h2>
        <img src="@/assets/portfolio_manager_app.jpg" alt="portfolio_manager" class="project-image">
        <p>This app empowers users to take control of their financial futures, offering both self-directed portfolio management tools and personalized guidance from financial experts.</p>
        <div class="tags">
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
        </div>
      </div>

      <div class="card">
        <h2>Centralized Security Master</h2>
        <img src="@/assets/centralized_security_master_app.jpg" alt="csm_Image" class="project-image">
        <p>This centralized security master consolidates security reference data from multiple sources, including Bloomberg, Reuters, and Refinitiv, and provides it to clients in a unified and easily accessible manner.</p>
        <div class="tags">
          <span>Java</span>
          <span>Spring</span>
          <span>MySQL</span>
        </div>
      </div>

      <div class="card">
        <h2>Weather App</h2>
        <img src="@/assets/weather_app.jpg" alt="weather_app_image" class="project-image">
        <p>Unleash the power of weather intelligence with a personalized weather app that adapts to your interests and location.</p>
        <div class="tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
};
</script>

<style scoped>
.container {
  margin-bottom: 40px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
}

.portfolio-content {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  font-family: 'Poppins', sans-serif;
  width: 100%; 
  height: 400px; 
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #64ffda;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #000000;
  position: relative;
  box-sizing: border-box; 
}

.card h2 {
  font-size: 1.5em;
  color: #64ffda;
  margin-bottom: 10px;
}

.card .project-image {
  width: 100%;
  height: 50%; 
  object-fit: cover;
  border-radius: 4px;
}

.card p {
  font-size: 1em;
  line-height: 1.6;
  color: #000000;
}

.card .tags {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
}

.card .tags span {
  font-size: 0.8em;
  color: #64ffda;
  margin-right: 10px;
}
</style>

