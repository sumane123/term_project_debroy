<template>
  <div class="container">
    <div class="about-content">
      <div class="card">
        <h1>Suman Deb Roy</h1>
        <p>Senior Specialist Full Stack Developer (VP)</p>
        <p>The Bank of New York Mellon</p>
        <a href="https://www.linkedin.com/in/suman-deb-roy-448b584" target="_blank">LinkedIn</a>
        <p>Location: London, United Kingdom</p>
      </div>

      <div class="card snapshot">
        <h2>Snapshot</h2>
        <p>Senior IT professional with over 2 years of experience in development, architecture & delivery of strategic banking & financial solutions using J2EE, RESTful Services, Micro Services, Messaging, Websphere Portal, Distributed Object Caching and private cloud technologies, Angular JS, implementing agile best practices. Proficient in working on peer programming, Test Driven Development (JUnit), BNY Mellon’s private cloud environment, automated continuous Build, integration (Jenkins).</p>
      </div>

      <div class="card expertise">
        <h2>Expertise in</h2>
        <ul>
          <li>Hands-on Development</li>
          <li>Architecture</li>
          <li>Technology Consulting</li>
          <li>Business/Technology Alignment</li>
          <li>Strategic Sourcing</li>
          <li>Agile & Lean Project Methodologies</li>
        </ul>
      </div>

      <div class="card it-forte">
        <h2>IT Forte</h2>
        <p><strong>Java/J2EE Technologies:</strong> Java, Spring Framework (IOC, AOP, MVC, Spring-JMS), Spring Boot, RESTful services, Microservices, JMS, JDBC, MQ, Message Driven POJOs, Hazelcast, IBM Websphere Portal, Log4J, JSF, Junit and ORM tools</p>
        <p><strong>Domain:</strong> Financial Services (Middle Office), Centralized Security Master, Investment Management</p>
      </div>

      <div class="card experience">
        <h2>Professional Experience</h2>
        <h3>Bank of New York Mellon ~ Mar 2010 – till date</h3>
        <p><strong>Senior Specialist Full Stack Developer (VP)</strong></p>
        <p>Company Brief: The Bank of New York Mellon Corporation, commonly known as BNY Mellon, is an American investment banking services holding company headquartered in New York City...</p>
      </div>

      <div class="card credentials">
        <h2>Credentials</h2>
        <p><strong>Academics:</strong></p>
        <ul>
          <li>2 years Full Time PG Diploma (IT & Management) - PGDITM, PICT School of Information Technology and Management, Pune (2004)</li>
          <li>6 months Full Time Diploma in Advanced Computing (C-DAC), Sunbeam Institute of Information Technology, Pune (2002)</li>
          <li>3 Years Full Time Bachelor of Computer Science, Pune University, India (2001)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
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
}

.card {
  font-family: 'Poppins', sans-serif; 
  padding: 20px;
  border: 1px solid #64ffda;
  border-radius: 8px;
  background-color: #1a1a1a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;
  margin-top: 20px;
}

.card h1 {
  font-size: 2.5em;
  font-weight: 500;
}

.card a {
  color: #64ffda;
}

.card h2 {
  font-size: 1.5em;
  color: #64ffda;
  margin-bottom: 10px;
}

.card p {
  font-size: 1em;
  line-height: 1.6;
  color: #fff;
}

.card h3 {
  font-size: 1.2em;
  color: #64ffda;
  margin-top: 15px;
}

.card ul {
  list-style-type: disc;
  margin-left: 20px;
}

.card ul li {
  font-size: 1em;
  line-height: 1.6;
  color: #fff;
}
</style>


