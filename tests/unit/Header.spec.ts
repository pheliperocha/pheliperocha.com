/* tslint:disable:no-empty */
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
  it('Should have my name', () => {
    const wrapper = shallowMount(Header, {
      mocks: {
        $t: () => {},
      },
    });
    expect(wrapper.text()).to.include('Phelipe Rocha');
  });
});
