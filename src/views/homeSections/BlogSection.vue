<template>
    <Section :theme="theme" id="blogSection">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                  <Title :value="$t('menu.blog')" :size="1" />

                  <!-- TODO: Create a component -->
                  <figure class="thumb-article" v-on:click="openArticle('https://medium.com/hashtagdevs/a-brand-new-serverless-project-cbdb910669ae')">
                    <img src="https://cdn-images-1.medium.com/max/2000/gradv/29/81/30/darken/25/1*0AiIklIzU2lPqK5E2nA2YQ.jpeg" alt="A Brand new Serverless Project" title="A Brand new Serverless Project">
                    <figcaption class="title">
                      <p class="title">A Brand new Serverless Project</p>
                      <p class="subtitle">Serverless computing architecture for a Startup MVP.</p>
                      <span class="date">Dec 10, 2018 • 3 min read</span>
                    </figcaption>
                  </figure>

                </div>
            </div>
        </div>
    </Section>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Title from '@/components/Title.vue';
  import Section from '@/components/Section.vue';

  @Component({
    components: {
      Section,
      Title,
    },
  })
  export default class BlogSection extends Vue {
    @Prop() private theme!: string;

    private openArticle(url: string): void {
      window.open(url, '_blank');
    }
  }
</script>

<style scoped lang="scss">
  .thumb-article {
    width: 320px;
    height: 280px;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    cursor: pointer;

    img {
      width: 250%;
      margin-left: -200px;
      margin-top: -10px;
    }

    figcaption {
      padding: 10px;
      position: absolute;
      bottom: 0;
      width: 100%;

      p.title {
        margin: 0;
        line-height: 1.3rem;
        margin-bottom: 8px;
      }

      p.subtitle {
        font-size: 16px;
        line-height: 1.3rem;
        margin: 0;
      }

      span.date {
        font-size: 12px;
      }
    }
  }

</style>