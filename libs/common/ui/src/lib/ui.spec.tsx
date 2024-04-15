import { render } from '@testing-library/react';

import Ui from './ui';

describeUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui />);
    expect(baseElement).toBeTruthy();
  });
});
