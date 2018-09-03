<template>
  <div class="home">
    <Header/>
    <AboutSection theme="light" />
    <ServicesSection theme="dark" />
    <ProjectsSection theme="light" />
    <BlogSection theme="dark" />
    <ContactSection theme="light" />
    <NewsletterSection theme="dark" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Section from '@/components/Section.vue';
import AboutSection from './homeSections/AboutSection';
import ServicesSection from './homeSections/ServicesSection';
import ProjectsSection from './homeSections/ProjectsSection';
import BlogSection from './homeSections/BlogSection';
import ContactSection from './homeSections/ContactSection';
import NewsletterSection from './homeSections/NewsletterSection';

@Component({
  components: {
    NewsletterSection,
    ContactSection,
    BlogSection,
    ProjectsSection,
    ServicesSection,
    AboutSection,
    Header,
    Section,
  },
})
export default class Home extends Vue {}
</script>
