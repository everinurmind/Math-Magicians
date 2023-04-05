import '../styles/Home.css';

const Home = () => (
  <div className="site-home">
    <h2 id="site-header">Welcome to our page!</h2>
    <section className="text-section">
      <p>
        Welcome to our React app! Our app features a navigation menu with three
        main pages: Home, Calculator, and Quotes.
      </p>
      <p>
        The Calculator page is a simple yet powerful calculator. Whether you
        need to add, subtract, multiply, or divide, our calculator has got you
        covered.
      </p>
      <p>
        The Quotes page is perfect for when you need a little bit of inspiration
        or motivation. With just a click of a button, you can generate a random
        quote.
      </p>
    </section>
  </div>
);

export default Home;
