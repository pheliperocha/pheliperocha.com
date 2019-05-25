<template>
    <div class="float-btn">
        <a class="main-btn" v-on:click="toggle()">
            <font-awesome-icon :icon="['fa', 'at']" />
        </a>
        <ul v-bind:class="{ toggled }">
            <li>
                <a href="https://br.linkedin.com/in/pheliperocha" target="_blank" class="btn">
                    <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                </a>
            </li>
            <li>
                <a href="https://github.com/pheliperocha" target="_blank" class="btn">
                    <font-awesome-icon :icon="['fab', 'github']" />
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/PhelipeRocha" target="_blank" class="btn">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/pheliperocha" target="_blank" class="btn">
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                </a>
            </li>
            <li>
                <a href="#contactSection" v-scroll-to="'#contactSection'" class="btn">
                    <font-awesome-icon :icon="['fa', 'envelope']" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class FloatButtons extends Vue {
    public toggled = false;

    public toggle() {
      this.toggled = !this.toggled;
    }
  }
</script>

<style scoped lang="scss">
    @import "../styles/variables";

    .float-btn {
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 999;

        .main-btn {
            position: relative;
            z-index: 9;
        }

        a {
            text-align: center;
            display: inline-block;
            width: 58px;
            height: 58px;
            background-color: #F44336;
            border-radius: 50%;
            cursor: pointer;
            color: #fff;
            font-size: 1.5rem;
            padding-top: 8px;
            box-shadow: -1px 3px 5px rgba(0,0,0,.3);
            transition: 0.2s;

            &:hover {
                color: #fff;
                background-color: #f00;
                box-shadow: 1px 5px 10px rgba(0,0,0,.4);
            }

            svg {
                vertical-align: middle;
            }
        }

        ul {
            list-style: none;
            left: 0;
            right: 0;
            text-align: center;
            position: absolute;
            transition: 0.4s;

            // Closed
            opacity: 0;
            bottom: 0;

            @media (min-width: $screen-sm-min) {
                // Opened
                opacity: 1;
                bottom: 64px;
            }

            li {
                transition: 0.2s;
                margin-bottom: 12px;

                // Closed
                transform: scale(0);

                @media (min-width: $screen-sm-min) {
                    // Opened
                    transform: scale(1);
                }

                a {
                    width: 42px;
                    height: 42px;
                    padding-top: 0;
                }
            }

            &.toggled {
                // Opened
                opacity: 1;
                bottom: 64px;

                @media (min-width: $screen-sm-min) {
                    // Closed
                    opacity: 0;
                    bottom: 0;
                }

                li {
                    // Opened
                    transform: scale(1);

                    @media (min-width: $screen-sm-min) {
                        // Closed
                        transform: scale(0);
                    }
                }
            }

        }

    }
</style>