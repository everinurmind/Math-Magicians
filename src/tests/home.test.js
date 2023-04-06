import renderer from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';

test('should render Home.js', () => {
  const text = renderer.create(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>,
  );

  expect(text.toJSON()).toMatchSnapshot();
});
