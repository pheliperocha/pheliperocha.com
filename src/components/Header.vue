<template>
  <header class="menu">

    <video autoplay muted loop poster="https://s3-sa-east-1.amazonaws.com/pheliperocha/images/bg-developer.jpg">
      <source src="https://s3-sa-east-1.amazonaws.com/pheliperocha/videos/bg.mp4" type="video/mp4" />
    </video>

    <div class="overlay"></div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="menu-change-lang u-pull-left">
            &nbsp;<br />
            <!--
<select>
<option>PT</option>
<option>EN</option>
<option>ES</option>
</select>
-->
          </div>
        </div>
      </div>

      <div class="row menu-profile">
        <div class="col-xs-12">
          <div class="logo"></div>

          <div class="menu-profile-info">
            <h1>Phelipe Rocha</h1>
            <p><i class="fa fa-map-marker" aria-hidden="true"></i> Rio de Janeiro - RJ</p>
            <!--                            <p><i class="fa fa-circle infinite" aria-hidden="true"></i> Online</p>-->
            <p class="hint--bottom" data-hint="Albert Einstein"><i class="fa fa-quote-left" aria-hidden="true"></i> A mente que se abre a uma nova ideia jamais volta ao seu tamanho original.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row menu-options">
        <div class="container">
          <div class="row">
            <nav class="col-xs-12 menu-options">
              <ul>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
  @import "../styles/variables";

  header.menu {
    position: relative;
    background: url("https://s3-sa-east-1.amazonaws.com/pheliperocha/images/bg-developer.jpg") 0 -50px;
    color: $white;
    box-shadow: -1px 3px 10px rgba(0,0,0,.6);
    overflow: hidden;

    .overlay {
      background: url("/img/video-overlay-patterns.png") fixed;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }

    video {
      position: absolute;
      width: 100%;
      box-sizing: border-box;
      -webkit-filter: blur(10px);
      -moz-filter: blur(10px);
      -o-filter: blur(10px);
      -ms-filter: blur(10px);
      filter: blur(15px);
      z-index: 0;
      display: none;

      @media (min-width: $screen-sm-min) {
        display: block;
      }

    }

    /* BEGIN Select Lang */
    .menu-change-lang {
      position: relative;
      z-index: 9;

      select {
        border: none;
        background: none;
        color: $white;
      }
      option {
        color: $black;
      }
    }
    /* END Select Lang */

    .logo {
      width: 160px;
      height: 160px;
      background: #000 url('https://s3-sa-east-1.amazonaws.com/pheliperocha/images/brand/PhelipeRocha-150.jpg') no-repeat;
      background-size: 150px 150px;
      margin: auto;
      top: 0; left: 0; bottom: 0; right: 0;
      z-index: 3;
      border: 5px solid $white;

      -webkit-box-shadow:
              0 0 0 10px  rgba(255,255,255,.2),
              0 0 5px 2px rgba(0,0,0,.3);
      -moz-box-shadow:
              0 0 0 10px  rgba(255,255,255,.2),
              0 0 5px 2px rgba(0,0,0,.3);
      box-shadow:
              0 0 0 10px  rgba(255,255,255,.2),
              0 0 5px 2px rgba(0,0,0,.3);

      -webkit-border-radius: 999px;
      -moz-border-radius: 999px;
      border-radius: 999px;
    }

    .menu-profile-info {
      position: relative;
      z-index: 9;
      text-align: center;
      margin-bottom: 20px;

      h1 {
        margin-bottom: 0;
        margin-top: 0;
        text-shadow: -1px 3px 10px rgba(0,0,0,.6);
        font-size: 2.5rem;

        @media (min-width: $screen-sm-min) {
          font-size: 3.0rem;
        }

      }
      p {
        margin-bottom: 0;
        font-size: .8rem;
        font-weight: lighter;
      }
      .fa-map-marker {
        color: #f00;
        font-size: 20px;
      }
      .fa-circle {
        color: #00ff00;
      }
    }

    .menu-options {
      position: relative;
      text-align: center;
      padding-left: 0;
      padding-right: 0;

      &:after {
        display: block;
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
          padding: 10px;
        }
      }

      li {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
        overflow: hidden;
        font-size: 12px;

        @media (min-width: $screen-sm-min) {
          font-size: 1rem;
        }

        a {
          display: block;
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
          -webkit-transform: translateY(10px);
          transform: translateY(10px);
          -webkit-transition-property: transform;
          -webkit-transition-property: -webkit-transform;
          transition-property: -webkit-transform;
          transition-property: transform, -webkit-transform;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
          -webkit-transition-timing-function: ease-out;
          transition-timing-function: ease-out;

          @media (max-width : 600px) {
            -webkit-transform: translateY(10px);
            transform: translateY(10px);
          }
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
  }
</style>
