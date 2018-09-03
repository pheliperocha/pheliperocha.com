<template>
    <section class="area" v-bind:class="{ 'dark-theme': theme === 'dark' }">
        <slot></slot>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Section extends Vue {
  @Prop() private theme!: string;
}
</script>

<style scoped lang="scss">
    @import "../styles/area";
</style>