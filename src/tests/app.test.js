import renderer from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';

test('should render App.js', () => {
  const text = renderer.create(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  expect(text.toJSON()).toMatchSnapshot();
});
test('should render Home component', () => {
  const text = renderer.create(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>,
  );

  expect(text.toJSON()).toMatchSnapshot();
});
