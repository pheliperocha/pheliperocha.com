<template>
    <Section :theme="theme">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <Title :value="$t('menu.blog')" :size="1" />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget lorem mi. Morbi faucibus nulla non ex sodales, nec accumsan lorem hendrerit. Suspendisse sem tellus, pharetra at convallis non, vehicula quis diam. Cras leo ipsum, sodales non laoreet ac, consectetur in arcu. Donec pharetra neque nec lorem tincidunt lobortis. Nulla eu lectus dui. Nullam velit mauris, volutpat fermentum rhoncus a, aliquet at nunc. Aliquam dapibus convallis pretium. Quisque ex ante, lacinia ultricies consequat vel, sodales vel ligula. Proin mollis tellus ut ipsum volutpat, vitae feugiat diam accumsan. Morbi lobortis feugiat enim, ut congue ante ultrices ut. Phasellus eu ex sed augue cursus posuere sed eget tellus. Morbi ut finibus ex.</p>
                </div>
            </div>
        </div>
    </Section>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Title from '@/components/Title.vue';
  import Section from '../../components/Section';

  @Component({
    components: {
      Section,
      Title,
    },
  })
  export default class BlogSection extends Vue {
    @Prop() private theme!: string;
  }
</script>

<style scoped lang="scss"></style>