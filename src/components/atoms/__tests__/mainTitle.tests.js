import React from 'react';
import { expect } from 'chai';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainTitleComponent  from '../MainTitle/mainTitle.component';

describe('<MainTitleComponent />', function() {
  test('renders the component', function() {
    const wrapper = () => shallow(
      <MainTitleComponent>
        foo Label
      </MainTitleComponent>
    );

    expect(wrapper).to.not.throw;
  });

  test('fails if there is no child', function() {
    const wrapper = () => shallow(
      <MainTitleComponent>
      </MainTitleComponent>
    );

    expect(wrapper).to.throw;
  });

  configure({adapter: new Adapter()});
  test('renders the correct text', function() {
    const labelText = 'Foo Label';
    const wrapper = mount(
      <MainTitleComponent>
        {labelText}
      </MainTitleComponent>
    );

    const header = wrapper.find('h1');

    expect(header.text()).to.contain('Foo Label');
  });

  test('renders a h1 with classname main', function() {
    const labelText = 'Foo Label';
    const wrapper = mount(
      <MainTitleComponent>
        {labelText}
      </MainTitleComponent>
    );

    expect(wrapper.exists('h1')).to.be.true;
    expect(wrapper.exists('.main')).to.be.true;
  });
});