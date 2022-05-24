<template>
  <main class="wrap">
    <section class="region">
      <h1>{{ nameRegion }} Culinary</h1>
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
      <iframe :src="strYoutube ? strYoutube.replace('watch?v=', 'embed/') : ''">
      </iframe>
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
          text-align: justify;
          margin-top: 2rem;
          letter-spacing: 1.2px;
          line-height: 3.5rem;
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
  @media (min-width: 570px) {
    section.first {
      .first-img {
        width: 450px !important;
        height: 450px !important;
      }

      .first-info {
        .top,
        .bottom {
          font-size: 2.4rem;

          h1 {
            font-size: 2.8rem !important;
          }
          p {
            font-size: 2.4rem !important;
            line-height: 4.5rem;
          }
          ul {
            li {
              font-size: 2.4rem !important;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1100px) {
    section.first {
      flex-direction: row;
      align-items: flex-start;
      .first-img {
        widows: 400px !important;
        height: 500px !important;
        flex-basis: 50%;
        margin-top: 4rem;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .first-info {
        flex-basis: 50%;
        margin-left: 3rem;
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
    iframe {
      margin-top: 5rem;
      height: 300px;
    }

    @media (min-width: 1100px) {
      iframe {
        height: 600px;
      }
    }
  }
}
</style>
