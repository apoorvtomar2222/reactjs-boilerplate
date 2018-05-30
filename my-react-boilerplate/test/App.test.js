import App from '../src/components/App'
import React from 'react';
import { shallow } from 'enzyme'

describe('App', () => {
    test('Should match snapshot', () => {
        const wrapper = shallow(<App />)
        console.log('wrapper', wrapper)
        expect(wrapper.find('h1').text()).toBe('Welcome Guys')
        expect(wrapper).toMatchSnapshot
    })
})