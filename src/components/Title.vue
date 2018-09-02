<template>
    <header>
        <h2 v-if="(size === 2)">{{ value }}</h2>
        <h3 v-else-if="(size === 3)">{{ value }}</h3>
        <h4 v-else-if="(size === 4)">{{ value }}</h4>
        <h1 v-else>{{ value }}</h1>
        <div class="divider" v-bind:class="{ 'sub': (size >= 2) }">
            <span><font-awesome-icon :icon="['far', 'dot-circle']" /></span>
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Title extends Vue {
  @Prop() private value!: string;
  @Prop() private size!: number;
}
</script>

<style scoped lang="scss">
    @import "../styles/variables";

    h1, h2, h3, h4 {
        color: $black;
        text-align: center;
        font-weight: bold;
        word-break: break-all;
        margin: 0 0 12px;
    }

    h1 {
        font-size: 3rem;
        line-height: 3rem;
        text-transform: uppercase;
    }

    h2 {
        font-size: 2rem;
        line-height: 2rem;
    }

    h3 {
        font-size: 1.5rem;
        line-height: 1.5rem;
    }

    h4 {
        font-size: 1rem;
        line-height: 1rem;
    }

    .divider {
        width: 60%;
        height: 1px;
        background: $black;
        margin: 0 auto 32px;
        text-align: center;

        &.sub {
            width: 30%;
        }

        span {
            position: relative;
            top: -11px;
            background: $white;
            color: $black;
            padding: 0 8px;
        }
    }

    .dark-theme {
        h1, h2, h3, h4 {
            color: $white;
        }

        .divider {
            background: $white;

            span {
                background: $black;
                color: $white;
            }
        }
    }
</style>