<template>
  <div id="about" class="page-wrapper">
    <div class="content-wrapper">
      <Title
        :title="'About'"
        :color="'#303030'"
      />
      <div class="about-content">
        <div class="avatar">
          <img src="@/assets/avatar-portfolio.png" />
        </div>
        <div class="content-container">
          <div class="content" v-for="(content,index) in contents" :key="index">
            <p class="title">{{content.title.toUpperCase()}}</p>
            <p class="text">{{content.text1}}</p>
            <p class="text">{{content.text2}}</p>
            <p class="text">{{content.text3}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'

export default {
  name: 'About',
  components: {
    Title
  },
  data() {
    return {
      contents: [
        {
          title: 'Into the Professional',
          text1: 'Hello, I\'m Josh. I have been a Front-end Developer and Designer for over 4 years. I\'ve touched a lot of technology during my career and have met some incredable people. I am grateful for the opportunities that I have had.',
          text2: 'I\'ve remained mainly in the Front-end space which has allowed me to retain my creativity and design skills. Visual design has proven to be one of my greatest assets as a Web Developer. I\'m an artist at heart and with my creative mind, I can approach a problem from many different angles. I\'ve also worked closely with stake holders on the UX Design front where I enjoy increased personal interaction focused on business strategies.',
          text3: 'One of the greatest balancing acts as a Software Engineer is to learn enough about the users\' wants and needs to know the difference between the two...and to choose what is best for them even when they don\'t always quite know for themselves.',
        },
        {
          title: 'Into the Person',
          text1: 'I grew up in sunny California in a family that included a twin sister. My days were spent drawing, typing, writing, singing, playing piano, playing chess, and running cross country. I still do some of these things today and have added playing table tennis, Shogi, Xiangqi, video editing, music video creation, and entrepreneurship.',
          text2: 'However, most of all, I love spending time with my family. With an increadible wife and seven amazing children, I feel richly blessed as a husband and father. It\'s busy, loud, and the cupboards need constant restocking, however, our little baseball team is what we live for.',
          text3: 'I see the beauty and good in this world and the endless possibilities that surround each of us. I am an optimist. I do my best each day to ensure that I\'m on the right path and always hold to the notion that there truly are better days ahead.',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#about {
  display: flex;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #00F9F9;
  color: #626262;
  .avatar {
    margin: 10px 0 50px 0;
    display: flex;
    justify-content: center;
    img {
      width: 275px;
    }
  }
}
.content {
  margin-bottom: 40px;
}
p.title {
  font-weight: 500;
  color: #303030;
  font-size: 1.35rem;
  margin-bottom: 20px;
}
p.text {
  margin-bottom: 15px;
  line-height: 1.5;
}
@media only screen and (min-width: 900px) {
  #about {
    .avatar {
      flex-direction: row;
      img {
        width: 400px;
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
