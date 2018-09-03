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
            <p><FontAwesomeIcon icon="map-marker-alt" /> Rio de Janeiro - RJ</p>

            <p class="hint--bottom" data-hint="Albert Einstein"><i class="fa fa-quote-left" aria-hidden="true"></i> {{ $t("sentences.inspiration") }} - {{ $t("sentences.author") }}</p>
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
                <li><a href="#aboutSection">{{ $t("menu.about") }}</a></li>
                <li><a href="#servicesSection">{{ $t("menu.services") }}</a></li>
                <li><a href="#projectsSection">{{ $t("menu.projects") }}</a></li>
                <li><a href="#blogSection">{{ $t("menu.blog") }}</a></li>
                <li><a href="#contactSection">{{ $t("menu.contact") }}</a></li>
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
      opacity: .3;
    }

    video {
      position: absolute;
      width: 100%;
      box-sizing: border-box;
      filter: blur(15px);
      z-index: 0;
      display: none;

      @media (min-width: $screen-sm-min) {
        display: block;
      }

    }

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

    .logo {
      width: 160px;
      height: 160px;
      background: #000 url('https://s3-sa-east-1.amazonaws.com/pheliperocha/images/brand/PhelipeRocha-150.jpg') no-repeat;
      background-size: 150px 150px;
      margin: auto;
      top: 0; left: 0; bottom: 0; right: 0;
      z-index: 3;
      border: 5px solid $white;
      box-shadow:
              0 0 0 10px  rgba(255,255,255,.2),
              0 0 5px 2px rgba(0,0,0,.3);
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

      .fa-map-marker-alt {
        color: #f00;
        font-size: 18px;
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
          text-transform: capitalize;
        }
      }

      li {
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
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
          transform: translateY(10px);
          transition-property: -webkit-transform;
          transition-property: transform, -webkit-transform;
          transition-duration: 0.3s;
          transition-timing-function: ease-out;

          @media (max-width : 600px) {
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
