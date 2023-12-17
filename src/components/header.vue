<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="../assets/suman_logo.png" alt="Your Logo" />


      </div>
      <nav>
        <div id="nav-toggle">&#9776;</div>
        <ul id="nav-list">
          <li><router-link to="/">Home</router-link> </li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/skills">Skills</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleNav() {
      const navList = document.getElementById('nav-list');
      navList.classList.toggle('show');
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

header {
  background-color: #24292e; 
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); 
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px; 
}

.logo img {
  max-width: 40%;
  height: auto;
}

nav {
  display: flex;
  align-items: center;
}

#nav-toggle {
  display: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #fff; 
}

#nav-list {
  display: flex;
  list-style: none;
  margin: 0;
}

#nav-list li {
  margin-right: 20px;
}

#nav-list a {
  font-family: 'Roboto', sans-serif; 
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 1.1em;
  transition: color 0.3s ease-in-out;
}

#nav-list a:hover {
  color: #64ffda;
}

@media (max-width: 768px) {
  #nav-list {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 56px; 
    left: 0;
    background-color: #24292e;
    width: 100%;
    padding: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); 
  }

  #nav-list.show {
    display: flex;
  }

  #nav-list li {
    margin-bottom: 10px;
  }

  #nav-toggle {
    display: block;
  }
}
</style>

