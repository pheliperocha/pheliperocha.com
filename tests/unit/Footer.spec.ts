/* tslint:disable:no-empty */
/* tslint:disable:no-var-requires */

import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Header from '@/layout/Footer.vue';

describe('Footer.vue', () => {
  before(() => {});

  it('Should have text', () => {
    const wrapper = shallowMount(Header, {
      mocks: {
        $t: () => {}
      }
    });
    expect(wrapper.text()).to.include('Phelipe Rocha');
  });
});
