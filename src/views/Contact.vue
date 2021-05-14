<template>
  <div class="contact page-wrapper">
    <div class="content-wrapper">
      <Title :title="'Contact'" :color="'#FFFFFF'" :id="'contact'" />
      <div class="contact-content">
        <div class="email-icon email-container">
          <a href="mailto:iamjoshholladay@gmail.com" target="_blank">
            <img src="@/assets/icons/icon-em-lg.png" />
          </a>
          <a href="mailto:iamjoshholladay@gmail.com" target="_blank">
            <p class="title">{{ title }}</p>
          </a>
        </div>
        <div class="media-container flex-row-center">
          <Media class="center" />
        </div>
        <div class="content-container">
          <div
            class="content"
            v-for="(content, index) in contents"
            :key="index"
          >
            <p class="text">{{ content.text1 }}</p>
            <p class="text">{{ content.text2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Media from "../components/Media.vue";

export default {
  components: {
    Title,
    Media,
  },
  data() {
    return {
      title: "Send me an email.",
      contents: [
        {
          text1:
            "Thank you for viewing my portfolio website. It's fun to work on and also takes some thought, elbow grease, and maybe even a little pixey dust.",
          text2:
            "I'd love to chat about your next GREAT IDEA to see if we might be a fit. Send me an email with any questions or to request my resume. I am currently looking to pick up additional freelance projects. Thanks for your consideration and let's talk soon!",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background-color: #47a6ff;
  color: #ffffff;
  .email-container {
    margin: 10px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      height: 175px;
      width: 175px;
      animation: fastshake 3s ease both;
      animation-iteration-count: infinite;
      margin-bottom: 10px;
    }
    a {
      text-decoration: none;
      margin-bottom: 10px;
    }
  }
  .media-container {
    margin-bottom: 30px;
  }
}
.content {
  margin-bottom: 40px;
}

p {
  margin: 0;
}

p.title {
  font-weight: 500;
  color: #ffffff;
  font-size: 1.75rem;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
p.text {
  margin-bottom: 15px;
  line-height: 1.5;
}

@keyframes fastshake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  1% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  2% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  3% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  4% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  5% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  6% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  7% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  8% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  9% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  10% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
  11%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

@media only screen and (min-width: 900px) {
  .contact {
    .email-container {
      img {
        height: 235px;
        width: 235px;
      }
    }
  }
  p.title {
    font-size: 2.35rem;
  }
  p.text {
    font-size: 1.15rem;
  }
}
</style>