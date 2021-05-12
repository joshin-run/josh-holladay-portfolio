<template>
  <div class="contact page-wrapper">
    <div class="content-wrapper">
      <Title
        :title="'Contact'"
        :color="'#FFFFFF'"
        :id="'contact'"
      />
      <div class="contact-content">
        <div class="email-icon">
          <a href="mailto:iamjoshholladay@gmail.com" target="_blank">
            <img src="@/assets/icons/icon-em-lg.png" />
          </a>
        </div>
        <div class="content-container">
          <div class="content" v-for="(content,index) in contents" :key="index">
            <p class="title">{{content.title}}</p>
            <p class="text">{{content.text1}}</p>
            <p class="text">{{content.text2}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'

export default {
  components: {
    Title
  },
  data() {
    return {
      contents: [
        {
          title: 'CLICK THE ICON ABOVE . . .',
          text1: 'I am currently looking to pick up additional freelance projects. Click the icon above to send me an email with any questions or to request my resume. I\'d love to chat about your next GREAT IDEA to see if we might be a fit.',
          text2: 'Thank you for your consideration and let\'s talk soon!',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #83C4FF;
  color: #FFFFFF;
  .email-icon {
    margin: 10px 0 50px 0;
    display: flex;
    justify-content: center;
    img {
      width: 175px;
      /* Start the shake animation and make the animation last for 0.5 seconds */
      // animation: shake 0.25s;
      animation: fastshake 5s ease both;
      // animation-delay: 3s;

      /* When the animation is finished, start again */
      animation-iteration-count: infinite;
    }
  }
}
.content {
  margin-bottom: 40px;
}
p.title {
  font-weight: 500;
  color: #FFFFFF;
  font-size: 1.35rem;
  margin-bottom: 20px;
}
p.text {
  margin-bottom: 15px;
  line-height: 1.5;
}

@keyframes shake {
  // 0% { transform: translate(1px, 1px) rotate(0deg); }
  // 10% { transform: translate(-1px, -1px) rotate(-1deg); }
  // 10% { transform: translate(-1px, 0px) rotate(0deg); }
  // 30% { transform: translate(1px, 1px) rotate(-1deg); }
  // 40% { transform: translate(1px, -1px) rotate(0deg); }
  // 50% { transform: translate(-1px, 1px) rotate(-1deg); }
  // 60% { transform: translate(-1px, 1px) rotate(0deg); }
  // 70% { transform: translate(1px, 1px) rotate(-1deg); }
  // 80% { transform: translate(-1px, -1px) rotate(0deg); }
  // 90% { transform: translate(1px, 1px) rotate(-1deg); }
  // 100% { transform: translate(1px, -1px) rotate(0deg); }
  0% { transform: translate(1px, 1px) rotate(0deg); }
  2% { transform: translate(-1px, -2px) rotate(-1deg); }
  4% { transform: translate(-3px, 0px) rotate(1deg); }
  6% { transform: translate(3px, 2px) rotate(0deg); }
  8% { transform: translate(1px, -1px) rotate(1deg); }
  10% { transform: translate(-1px, 2px) rotate(-1deg); }
  12% { transform: translate(-3px, 1px) rotate(0deg); }
  14% { transform: translate(3px, 1px) rotate(-1deg); }
  16% { transform: translate(-1px, -1px) rotate(1deg); }
  18% { transform: translate(1px, 2px) rotate(0deg); }
  20% { transform: translate(1px, -2px) rotate(-1deg); }
  22%, 100% { transform: translate(0, 0) rotate(0deg); }
}

@keyframes fastshake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  1% { transform: translate(-1px, -2px) rotate(-1deg); }
  2% { transform: translate(-3px, 0px) rotate(1deg); }
  3% { transform: translate(3px, 2px) rotate(0deg); }
  4% { transform: translate(1px, -1px) rotate(1deg); }
  5% { transform: translate(-1px, 2px) rotate(-1deg); }
  6% { transform: translate(-3px, 1px) rotate(0deg); }
  7% { transform: translate(3px, 1px) rotate(-1deg); }
  8% { transform: translate(-1px, -1px) rotate(1deg); }
  9% { transform: translate(1px, 2px) rotate(0deg); }
  10% { transform: translate(1px, -2px) rotate(-1deg); }
  11%, 100% { transform: translate(0, 0) rotate(0deg); }
}

@media only screen and (min-width: 900px) {
  #about {
    .email-icon {
      flex-direction: row;
      img {
        width: 275px;
      }
    }
  }
  p.title {
    font-size: 2rem;
  }
  p.text {
    font-size: 1.5rem;
  }
}
@media only screen and (min-width: 900px) {
  .box-2 {
    border-left: 2px solid rgb(235, 242, 255);
  }
}
</style>
