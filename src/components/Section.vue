<template>
    <section class="area" v-bind:class="{ 'dark-theme': theme === 'dark' }">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <Title value="Lorem Ipsum" :size="1" />
                    <Title value="Lorem Ipsum" :size="2" />
                    <Title value="Lorem Ipsum" :size="3" />
                    <Title value="Lorem Ipsum" :size="4" />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget lorem mi. Morbi faucibus nulla non ex sodales, nec accumsan lorem hendrerit. Suspendisse sem tellus, pharetra at convallis non, vehicula quis diam. Cras leo ipsum, sodales non laoreet ac, consectetur in arcu. Donec pharetra neque nec lorem tincidunt lobortis. Nulla eu lectus dui. Nullam velit mauris, volutpat fermentum rhoncus a, aliquet at nunc. Aliquam dapibus convallis pretium. Quisque ex ante, lacinia ultricies consequat vel, sodales vel ligula. Proin mollis tellus ut ipsum volutpat, vitae feugiat diam accumsan. Morbi lobortis feugiat enim, ut congue ante ultrices ut. Phasellus eu ex sed augue cursus posuere sed eget tellus. Morbi ut finibus ex.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Title from '@/components/Title.vue';

@Component({
  components: {
    Title,
  },
})
export default class Section extends Vue {
  @Prop() private theme!: string;
}
</script>

<style scoped lang="scss">
    @import "../styles/area";
</style>