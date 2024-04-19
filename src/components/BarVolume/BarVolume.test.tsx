import { render, screen, fireEvent } from '@testing-library/react';
import BarVolume from './BarVolume';
import '@testing-library/jest-dom';

describe('Компонент BarVolume', () => {
    it('отображает панель громкости корректно', () => {
      const handleVolume = jest.fn();
      render(<BarVolume handleVolume={handleVolume} />);
      const volumeBarElement = screen.getByTestId('volume-bar');
      expect(volumeBarElement).toBeInTheDocument();
      const volumeInput = screen.getByRole('slider');
      expect(volumeInput).toBeInTheDocument();
    });
  
    it('вызывает функцию handleVolume с правильным значением громкости при изменении громкости', () => {
      const handleVolume = jest.fn();
      render(<BarVolume handleVolume={handleVolume} />);
      const volumeInput = screen.getByRole('slider');
      fireEvent.change(volumeInput, { target: { value: '50' } });
      expect(handleVolume).toHaveBeenCalledWith(50);
    });
  });