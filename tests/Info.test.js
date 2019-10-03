// Import the `mount()` method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Info from '../src/components/Info.vue'

describe('Info', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Info)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('This will be a great Ethereum BlockChain viewer')
  })

})