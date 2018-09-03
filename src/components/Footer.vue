<template>
    <footer>
        <div class="goTop">
            <a class="hint--top" data-hint="Ir para o topo" href="#">
                <font-awesome-icon icon="arrow-up" />
            </a>
        </div>
        <div class="container">
            <div class="row">
                &copy; {{ new Date().getFullYear() }} PhelipeRocha.com
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
    @import "../styles/variables";

    footer {
        background: $true-black;
        color: $white;
        text-align: center;
        padding-top: 40px;
        padding-bottom: 40px;

        .goTop {
            text-align: center;
            width: 58px;
            height: 58px;
            margin: -60px auto 30px;
            background-color: $accent-light;
            border-radius: 999px;
            cursor: pointer;
            color: #fff;
            font-size: 1.5rem;
            box-shadow: -1px 3px 5px rgba(0, 0, 0, 1);
            transition: 0.2s;

            a {
                padding-top: 10px;
                display: block;
                height: 100%;

                &:focus {
                    color: $white;
                }
            }

            &:hover {
                background-color: $accent;
                box-shadow: 0 0 10px rgba(0, 0, 0, .7);
                transform: scale(1.1);
            }
        }
    }
</style>
