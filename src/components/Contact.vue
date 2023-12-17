<template>
  <div class="container">
    <div class="contact-content">
      <div class="card">
        <h2>Contact Me</h2>
        <form @submit.prevent="submitForm">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>

          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>

          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.formData);
    },
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 40px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
}

.contact-content {
  width: 80%;
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

form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1em;
  margin-bottom: 5px;
}

input,
textarea {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #64ffda;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #64ffda;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}
</style>
