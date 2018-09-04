<template>
    <section class="area" v-bind:class="{
    'dark-theme': theme === 'dark',
    'blue-theme': theme === 'blue'
    }">
        <slot></slot>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

const validThemes = ['light', 'dark', 'blue'];

@Component({
  components: {},
})
export default class Section extends Vue {
  @Prop() private theme!: string;

  private mounted() {
    if (validThemes.indexOf(this.theme) === -1) {
      /* tslint:disable:no-console */
      console.warn('Invalid theme, you should pick one of', validThemes);
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../styles/area";
</style>