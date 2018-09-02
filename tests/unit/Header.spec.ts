/* tslint:disable:no-empty */
/* tslint:disable:no-var-requires */

import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import Vue from 'vue';
const fontawesome = require('@fortawesome/vue-fontawesome');

describe('Header.vue', () => {
  before(() => {
    Vue.component('FontAwesomeIcon', fontawesome.FontAwesomeIcon);
  });

  it('Should have my name', () => {
    const wrapper = shallowMount(Header, {
      mocks: {
        $t: () => {},
      },
    });
    expect(wrapper.text()).to.include('Phelipe Rocha');
  });
});
