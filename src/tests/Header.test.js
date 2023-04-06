import renderer from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';

test('should render Header.js', () => {
  const text = renderer.create(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>,
  );

  expect(text.toJSON()).toMatchSnapshot();
});
