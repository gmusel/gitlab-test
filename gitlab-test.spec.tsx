import React from 'react';
import { render } from '@testing-library/react';
import { BasicGitlabTest } from './gitlab-test.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicGitlabTest />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
