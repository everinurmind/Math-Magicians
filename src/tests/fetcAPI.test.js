import renderer from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quote from '../components/FetchApi';

test('should render Quote.js', () => {
  const text = renderer.create(
    <BrowserRouter>
      <Routes>
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>,
  );

  expect(text.toJSON()).toMatchSnapshot();
});
