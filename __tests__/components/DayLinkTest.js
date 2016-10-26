/* global describe it expect beforeEach */

import React from 'react';
import { shallow } from 'enzyme';
import DayLink from '../../src/components/DayLink' ;

describe('DayLink component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<DayLink date="01-01-1987" isActive={true} />);
  });

  it('has a li element', () => {
    expect(component.find('li').length).toBe(1);
  });

  it('has the active class', () => {
    expect(component.find('li').hasClass('active')).toBe(true);
  });

  it('has one children', () => {
    expect(component.find('li').children().length).toBe(1);
  });

  it('has the correct text', () => {
    expect(component.find('Link').children().text()).toBe('01-01-1987');
  });
});
