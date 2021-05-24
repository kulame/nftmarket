import { mount } from '@vue/test-utils'
// @ts-ignore
import Header from '../src/components/Header.vue'
import { useRouter } from 'vue-router'

describe('Header.vue', () => {
  it('renders', () => {
    const wrapper = mount(Header)
    expect(wrapper.html()).toContain('NFT')

  })
})
