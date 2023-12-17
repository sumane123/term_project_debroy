<template>
  <div class="container">
    <div class="about-content">

      <div class="card">
        <h2>HTML</h2>
        <div class="logo-container">
          <img src="@/assets/icons8-html-50.png" alt="HTML Logo" class="logo">
          <img src="@/assets/icons8-react-16.png" alt="JSX Logo" class="logo">
        </div>
      </div>

      <div class="card">
        <h2>CSS</h2>
        <div class="logo-container">
          <img src="@/assets/icons8-css3-48.png" alt="CSS3 Logo" class="logo">
          <img src="@/assets/saas_logo.svg" alt="Sass Logo" class="logo">
          <img src="@/assets/icons8-bootstrap-50.png" alt="Bootstrap Logo" class="logo">
          <img src="@/assets/foundation-seeklogo.com.svg" alt="Foundation Logo" class="logo">
          <img src="@/assets/materialize-css-logo-icon.png" alt="Materialize Logo" class="logo">
        </div>
      </div>

      <div class="card">
        <h2>JavaScript</h2>
        <div class="logo-container">
          <img src="@/assets/java-script.png" alt="JavaScript Logo" class="logo">
          <img src="@/assets/icons8-react-16.png" alt="React Logo" class="logo">
          <img src="@/assets/vue_logo.png" alt="Vue Logo" class="logo">
          <img src="@/assets/angular-icon.svg" alt="Angular Logo" class="logo">
          <img src="@/assets/nodejs.svg" alt="Node Logo" class="logo">
          <img src="@/assets/jquery-1.svg" alt="jQuery Logo" class="logo">
        </div>
      </div>

      <div class="card">
        <h2>Back End</h2>
        <div class="logo-container">
          <img src="@/assets/java-4.svg" alt="Java Logo" class="logo">
          <img src="@/assets/spring-3.svg" alt="Spring Logo" class="logo">
          <img src="@/assets/rails.svg" alt="Rails Logo" class="logo">
          <img src="@/assets/oracle-6.svg" alt="Oracle Logo" class="logo">
          <img src="@/assets/microsoft-sql-server-1.svg" alt="Microsoft SQL Logo" class="logo">
          <img src="@/assets/mongodb-icon-1.svg" alt="Mongo DB Logo" class="logo">
        </div>
      </div>

      <div class="card">
        <h2>Build Tools</h2>
        <div class="logo-container">
          <img src="@/assets/webpack.svg" alt="Webpack Logo" class="logo">
          <img src="@/assets/grunt.png" alt="Grunt Logo" class="logo">
          <img src="@/assets/maven.png" alt="Maven Logo" class="logo">
          <img src="@/assets/bower.png" alt="Bower Logo" class="logo">
          <img src="@/assets/gulp.png" alt="Gulp Logo" class="logo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
};
</script>

<style scoped>
.container {
  margin-bottom: 40px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
}

.about-content {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  font-family: 'Poppins', sans-serif;
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #64ffda;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #000000; 
  position: relative;
}

.card h2 {
  font-size: 1.5em;
  color: #64ffda;
  margin-bottom: 10px;
}

.card .logo-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.card img.logo {
  width: 40px; 
}
</style>
