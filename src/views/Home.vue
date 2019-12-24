<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/pheliperocha.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="info" size="sm" class="mr-4">{{ $t("btn.resume") }}</base-button>
                                    <base-button type="default" size="sm" class="float-right">{{ $t("btn.message") }}</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">25</span>
                                        <span class="description">{{ $t("title.technologies") }}</span>
                                    </div>
                                    <div>
                                        <span class="heading">5</span>
                                        <span class="description">{{ $t("title.companies") }}</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Phelipe Rocha
                                <span class="font-weight-light">, 25</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>{{ $t("sentence.location") }}</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>{{ $t("sentence.jobTitle") }} @ {{ $t("sentence.jobCompanie") }}</div>
                            <div><i class="ni education_hat mr-2"></i>{{ $t("sentence.degree") }}</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>{{ $t('sentence.shortDescription') }}</p>
                                    <a href="#">{{ $t('link.show_more') }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
export default {};
</script>
<style>
</style>
