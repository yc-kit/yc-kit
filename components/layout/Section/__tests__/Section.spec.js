import { shallowMount } from '@vue/test-utils'
import Setion from 'yc-layout/Section'
import Aside from 'yc-layout/Aside'

describe('Section', () => {
  const mountSection = () => {
    return shallowMount(Setion, {
      slots: {
        default: '<div>foo</div>'
      }
    })
  }

  test('render correctly', () => {
    const wrapper = mountSection()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('should has correct value of "data-has-aside" property, when pass props "hasAside: true"', () => {
    const wrapper = mountSection()
    expect(wrapper.attributes('data-has-aside')).toBe(undefined)
    wrapper.setProps({ hasAside: true })
    wrapper.vm.$nextTick(() => {
      expect(wrapper.attributes('data-has-aside')).toBe('true')
    })
  })

  test('should has correct value of "data-has-aside" property, when slot include "Aside" component', () => {
    const wrapper = shallowMount(Setion, {
      slots: {
        default: Aside
      }
    })
    expect(wrapper.attributes('data-has-aside')).toBe(undefined)
    wrapper.vm.$nextTick(() => {
      expect(wrapper.attributes('data-has-aside')).toBe('true')
    })
  })
})
