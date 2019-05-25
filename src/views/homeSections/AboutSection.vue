<template>
    <Section :theme="theme" id="aboutSection">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <Title :value="$t('menu.about')" :size="1" />

                    <span class="accent">Hello World!</span>
                    <p>I'm a self-motivated and productive developer with more than four years of web development experience, and which love learning and solve challenges.</p>
                    <p>Currently, I'm working in the Fintech industry, at <a href="https://mutual.club/" alt="Mutual • People lending to people, simple like that." title="Mutual • People lending to people, simple like that." target="_black">Mutual.club</a>, an innovative P2P lending startup, as a back-end developer.</p>
                    <p>Some topics that I'm interested in: Technology, development, computing, science, startups, sports, hobbies, travel, productivity, health, lifestyle and so forth.</p>
                
                    <br/>

                    <Title :value="$t('title.skills')" :size="2" />

                    <p>NodeJS • AWS • Angular 2 • JavaScript • TypeScript • Scrum • PHP • Laravel • Ionic • PostgreSQL • MySql • MongoDB • Git • HTML • CSS • Sass • JQuery • Docker • Linux • SQL • Express.js • Koa.js • Mocha • Chai • Jest • Karma • Jasmine • PHPUnit</p>
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
  export default class AboutSection extends Vue {
    @Prop() private theme!: string;
  }
</script>

<style scoped lang="scss"></style>