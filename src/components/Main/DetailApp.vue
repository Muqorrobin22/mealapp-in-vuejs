<template>
  <main class="wrap">
    <section class="region">
      <h1>{{ nameRegion }}</h1>
    </section>
    <section class="first">
      <div class="first-img">
        <img :src="strThumb" alt="" />
      </div>
      <div class="first-info">
        <div class="top">
          <h1>Instructions</h1>
          <p>
            {{ strInstruction }}
          </p>
        </div>
        <div class="bottom">
          <h1>Recipes</h1>
          <ul>
            <li>coba</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="second">
      <h1>Tutorials</h1>
      <iframe width="330" height="330" :src="strYoutube"> </iframe>

      <!-- <video-embed
        src="https://www.youtube.com/watch?v=s4ObxcdXoFE"
      ></video-embed> -->
    </section>
  </main>
</template>

<script>
export default {
  props: ["strYoutube", "strThumb", "strInstruction", "nameRegion"],
};
</script>

<style lang="scss" scoped>
main.wrap {
  display: flex;
  flex-direction: column;
  section.region {
    display: flex;
    justify-content: center;
    h1 {
      font-size: 2rem;
      color: red;
      font-weight: 700;
      letter-spacing: 2px;
    }
  }
  section.first {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .first-img {
      width: 350px;
      height: 350px;
      border-radius: 20px;
      overflow: hidden;
      img {
        width: 100%;
        object-fit: cover;
        background-position: center;
      }
    }
    .first-info {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 3rem;
      .top,
      .bottom {
        display: flex;
        flex-direction: column;
        font-size: 2rem;

        h1 {
          font-size: 2.4rem;
          font-weight: 600;
          letter-spacing: 2px;
        }
        p {
          margin-top: 2rem;
          letter-spacing: 1.2px;
        }
        ul {
          margin-top: 2rem;
          text-align: center;
          li {
            list-style-position: inside;
          }
        }
      }
      .bottom {
        margin-top: 3rem;
      }
    }
  }

  section.second {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    h1 {
      font-size: 2.4rem;
      font-weight: 600;
      letter-spacing: 2px;
    }
  }
}
</style>
