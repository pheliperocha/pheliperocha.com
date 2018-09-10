<template>
    <header class="menu-short visible">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-5 col-md-4 col-lg-3">
                <div class="menu-profile">
                    <a href="#">
                        <div class="logo">
                            <img src="https://s3-sa-east-1.amazonaws.com/pheliperocha/images/brand/PhelipeRocha-44.jpg" alt="Phelipe Rocha - Desenvolvedor Web Freelancer" title="Phelipe Rocha - Desenvolvedor Web Freelancer" />
                        </div>

                        <h3>Phelipe Rocha</h3>
                    </a>
                </div>
            </div>

            <nav class="menu-options col-xs-12 col-sm-7 col-md-6">
                <ul>
                    <li><a href="#aboutSection" class="btn-sobre">Sobre</a></li>
                    <li><a href="#servicesSection" class="btn-servicos">Serviços</a></li>
                    <li><a href="#projectsSection" class="btn-portfolio">Portfólio</a></li>
                    <li><a href="#blogSection" class="btn-blog">Blog</a></li>
                    <li><a href="#contactSection" class="btn-contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    </div>
    </header>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class HeaderFixed extends Vue {}
</script>

<style scoped lang="scss">
    @import "../styles/variables";

    header.menu-short {
        position: fixed;
        background: url("https://s3-sa-east-1.amazonaws.com/pheliperocha/images/bg-developer.jpg") 0 -50px;
        background-size: cover;
        color: $white;
        box-shadow: -1px 3px 10px rgba(0,0,0,.6);
        overflow: hidden;
        width: 100%;
        z-index: 99;
        top: -7%;
        opacity: 0;
        transition: .8s;

        &.visible {
            top: 0;
            opacity: 1;
        }

        .menu-profile {
            display: none;
            padding-top: 6px;

            @media (min-width: $screen-sm-min) {
                display: block;
            }

            .logo {
                position: relative;
                width: 48px;
                height: 48px;
                border-radius: 50%;
                border: 2px solid $white;
                overflow: hidden;
                float: left;
                margin-bottom: 6px;

                img {
                    width: 100%;
                }
            }

            h3 {
                margin: 25px 0 20px 60px;
            }
        }

        .menu-options {
            text-align: center;
            float: left;
            padding-left: 0;
            padding-right: 0;

            @media (min-width: $screen-sm-min) {
                margin-top: 15px;
            }

            a {
                color: $white;
                text-decoration: none;
            }

            ul {
                margin-bottom: 0;

                li {
                    list-style: none;
                    float: left;
                    width: 20%;
                    margin-bottom: 0;
                    padding: 5px;
                }
            }

            li {
                display: inline-block;
                vertical-align: middle;
                -webkit-transform: translateZ(0);
                transform: translateZ(0);
                box-shadow: 0 0 1px rgba(0, 0, 0, 0);
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                -moz-osx-font-smoothing: grayscale;
                position: relative;
                overflow: hidden;font-size: 12px;

                @media (min-width: $screen-sm-min) {
                    font-size: 1rem;
                }

                &:before {
                    content: "";
                    position: absolute;
                    z-index: -1;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: $white;
                    height: 5px;
                    -webkit-transform: translateY(21px);
                    transform: translateY(25px);
                    -webkit-transition-property: transform;
                    -webkit-transition-property: -webkit-transform;
                    transition-property: -webkit-transform;
                    transition-property: transform;
                    -webkit-transition-duration: 0.3s;
                    transition-duration: 0.3s;
                    -webkit-transition-timing-function: ease-out;
                    transition-timing-function: ease-out;
                }

                &.active {
                    background: rgba(0, 0, 0, 0.4);
                }

                &:hover:before, &:focus:before, &:active:before, &.active:before {
                    -webkit-transform: translateY(0px);
                    transform: translateY(0px);
                }
            }
        }

        .menu-search {
            float: right;
            margin-left: 4%;
            padding-top: 10px;
            width: 22%;

            @media (max-width: 600px) {
                width: 48%;
            }

            input {
                margin-bottom: 0;
                color: $black;
            }

            button {
                border: none;
                margin-left: 5px;
                padding: 0 3px;
                font-size: 28px;
                color: $white;
            }
        }
    }
</style>