<template>
    <footer class="footer has-cards">
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">{{ $t('sentence.thanks') }}!</h3>
                    <h4 class="mb-0 font-weight-light">{{ $t('sentence.get_in_touch') }}</h4>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/pheliperocha/"
                       class="btn btn-neutral btn-icon-only btn-linkedin btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="LinkedIn">
                        <i class="fa fa-linkedin"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.instagram.com/pheliperocha/"
                       class="btn btn-neutral btn-icon-only btn-instagram btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Instagram">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://medium.com/@PhelipeRocha"
                       class="btn btn-neutral btn-icon-only btn-medium btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Medium">
                        <i class="fa fa-medium"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://github.com/pheliperocha"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Github">
                        <i class="fa fa-github"></i>
                    </a>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="https://pheliperocha.com" target="_blank" rel="noopener">Phelipe Rocha</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="#" class="nav-link" target="_blank" rel="noopener">About
                                Me</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://medium.com/@PhelipeRocha" class="nav-link" target="_blank" rel="noopener">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
