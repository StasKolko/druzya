import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';

describe('shared/Button', () => {
  test('Test render', () => {
    render(<Button option="btn" variant="primary" size="md">TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test clear theme', () => {
    render(<Button option="btn" variant="primary" size="md">TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('btn primary md');
    screen.debug();
  });
});
