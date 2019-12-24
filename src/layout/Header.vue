<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <!-- <img src="img/brand/white.png" alt="logo"> -->
                <h4 style="color: #fff">PhelipeRocha</h4>
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="#">
                        <!-- <img src="img/brand/blue.png"> -->
                        <h4 style="color: #000">PhelipeRocha</h4>
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.linkedin.com/in/pheliperocha/" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="LinkedIn">
                        <i class="fa fa-linkedin-square"></i>
                        <span class="nav-link-inner--text d-lg-none">LinkedIn</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/pheliperocha/"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://medium.com/@PhelipeRocha" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Medium">
                        <i class="fa fa-medium"></i>
                        <span class="nav-link-inner--text d-lg-none">Medium</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/pheliperocha"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from '@/components/BaseNav';
import BaseDropdown from '@/components/BaseDropdown';
import CloseButton from '@/components/CloseButton';

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
