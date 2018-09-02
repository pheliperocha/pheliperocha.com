/* tslint:disable:no-empty */
/* tslint:disable:no-unused-expressions */
/* tslint:disable:no-var-requires */

import Vue from 'vue';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Title from '@/components/Title.vue';
const fontawesome = require('@fortawesome/vue-fontawesome');

describe('Title.vue', () => {
  before(() => {
    Vue.component('FontAwesomeIcon', fontawesome.FontAwesomeIcon);
  });

  it('Should pass the value', () => {
    const value = 'Test Value';
    const wrapper = shallowMount(Title, {
      propsData: {
        value,
      },
    });
    expect(wrapper.text()).to.include(value);
  });

  it('Should be h1 by default', () => {
    const wrapper = shallowMount(Title);
    expect(wrapper.contains('h1')).to.equal(true);
  });

  it('Should use h2', () => {
    const wrapper = shallowMount(Title, {
      propsData: {
        size: 2,
      },
    });

    expect(wrapper.contains('h2')).to.equal(true);
  });
});
