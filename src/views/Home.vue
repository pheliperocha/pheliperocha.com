<template>
  <div class="home">
    <Header/>
    <Section theme="light" />
    <Section theme="dark" />
    <Section theme="light" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Section from '@/components/Section.vue';

@Component({
  components: {
    Header,
    Section,
  },
})
export default class Home extends Vue {}
</script>
