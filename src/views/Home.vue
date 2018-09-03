<template>
  <div class="home">
    <Header/>
    <AboutSection theme="light" />
    <ServicesSection theme="dark" />
    <ProjectsSection theme="light" />
    <BlogSection theme="dark" />
    <ContactSection theme="light" />
    <NewsletterSection theme="dark" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Section from '@/components/Section.vue';
import AboutSection from './homeSections/AboutSection.vue';
import ServicesSection from './homeSections/ServicesSection.vue';
import ProjectsSection from './homeSections/ProjectsSection.vue';
import BlogSection from './homeSections/BlogSection.vue';
import ContactSection from './homeSections/ContactSection.vue';
import NewsletterSection from './homeSections/NewsletterSection.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Footer,
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
