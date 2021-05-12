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
          text1: 'I am currently looking to pick up additional freelance projects. Click the icon above to send me an email with any questions or to request my resume. I\'d love to chat about your next GREAT IDEA to see if we might be a fit. Thank you for your consideration and let\'s talk soon!',
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


