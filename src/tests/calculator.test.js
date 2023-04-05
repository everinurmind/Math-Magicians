import renderer from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from '../components/Calculator';

test('should render Calculator.js', () => {
  const text = renderer.create(
    <BrowserRouter>
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>,
  );

  expect(text.toJSON()).toMatchSnapshot();
});
