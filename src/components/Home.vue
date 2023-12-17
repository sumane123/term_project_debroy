<template>
  <div class="container">
    <section class="intro-section">
      <div class="intro-header">
        <h1>Suman Deb Roy</h1>
        <p class="mission-statement glow-effect"> Transforming ideas into digital reality. </p>
      </div>
      <div class="intro-content">
        <p>From an aspiring developer to an established full-stack professional, I've dedicated over two decades to
          crafting digital experiences that inspire innovation. With a fervor for turning ideas into reality, I've
          successfully built enterprise-level solutions for Fortune 500 companies.</p>
        <p>As a Senior Developer/VP at BNY Mellon, I work with a team of passionate developers committed to delivering
          exceptional web experiences that consistently exceed client expectations.</p>
        <p>Outside the digital realm, I'm an avid traveler, sports enthusiast, and devoted family man, cherishing moments
          of relaxation and shared experiences with loved ones.</p>
        <p>Let's work together to transform your digital vision into reality.</p>
      </div>
    </section>

    <section class="two-column-section">
      <div class="video-card">
        <h2>Watch My Introduction</h2>
        <video controls width="100%" height="100%">
          <source src="../assets/intro.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>

      <div class="timeline-card" id="timeline-chart">
        <h2>Education Timeline</h2>
        <div class="timeline">
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import degrees from '../assets/college_degree.json'

export default {
  name: 'Home',
  data() {
    return { Userdegrees: degrees };
  },
  mounted() {
    displayTimelineChart(this.Userdegrees);

  },
};

function displayTimelineChart(data) {
  const timelineChart = document.getElementById('timeline-chart');
  const degrees = data.degrees;
  const timelineContainer = timelineChart.querySelector('.timeline');

  const timelineItems = degrees.map((degree, index) => ({
    school: degree.school,
    program: degree.program,
    type: degree.type,
    year: degree.year_conferred || 'Expected Graduation',
    index: index,
  }));

  const timelineHTML = timelineItems
    .map(
      (degree) => `
        <div class="timeline-item" style="background-color: ${degree.index % 2 === 0 ? '#1a1a1a' : '#2a2a2a'
        }">
          <h3>${degree.school}</h3>
          <p>${degree.program} - ${degree.type}</p>
          <p>${degree.year}</p>
        </div>
      `
    )
    .join('');

  timelineContainer.innerHTML = timelineHTML;
}


</script>

<style scoped>
.intro-section {
  margin-bottom: 40px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #64ffda;
  border-radius: 8px;
  background-color: #1a1a1a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;
}

.intro-header {
  flex-basis: 40%;
}

.intro-header h1 {
  font-size: 2.5em;
  font-weight: 500;
}

.mission-statement {
  font-family: 'Poppins', sans-serif;
  color: bisque;
  font-size: 1em;
  font-style: italic;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

.glow-effect {
  display: inline-block;
  position: relative;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #64ffda;
  }

  to {
    text-shadow: 0 0 20px #64ffda;
  }
}



.intro-content {
  flex-basis: 55%;
}

.intro-content p {
  font-family: 'Poppins', sans-serif;
  font-size: 0.8em;
  line-height: 1.6;
  margin: 0 0 20px;
  font-style: italic;
  color: rgb(243, 243, 210);
}

.two-column-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.video-card,
.empty-card {
  width: 48%;
}

.video-card {
  overflow: hidden;
  padding: 20px;
  border: 1px solid #64ffda;
  border-radius: 8px;
  background-color: #1a1a1a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;
}

.video-card h2 {
  font-size: 1.5em;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #64ffda;
}

.video-card video {
  display: block;
  margin: 60px;
  margin-left: 120px;
  width: 60%;
  height: auto;
}

.empty-card {
  border: 1px solid #64ffda;
  margin-left: 40px;
  border-radius: 8px;
  background-color: #1a1a1a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  height: auto;
  color: rgb(243, 243, 210);
}

.skills-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skills-section h2 {
  font-size: 2.1em;
  line-height: 1.6;
}

.intro-header h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 3em;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.timeline-card {
  width: 48%;
  overflow: hidden;
  padding: 20px;
  margin-left: 20px;
  border: 1px solid #64ffda;
  border-radius: 8px;
  background-color: #1a1a1a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: rgb(243, 243, 210);
}

.timeline-card h2 {
  font-size: 1.5em;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #64ffda;
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.timeline-item {
  position: relative;
  padding: 20px;
  margin: 10px 0;
  border-left: 2px solid #64ffda;
  background-color: #1a1a1a;
  border-radius: 8px;
  color: rgb(243, 243, 210);

}

.timeline-item:nth-child(even) {
  background-color: #2a2a2a;
}

.timeline-item h3 {
  margin-bottom: 5px;
}

.timeline-item p {
  margin: 0;
}

.timeline-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -6px;
  width: 12px;
  height: 12px;
  background-color: #64ffda;
  border-radius: 50%;
  border: 2px solid #1a1a1a;
}
</style>