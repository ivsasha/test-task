import './IntroSection.scss';

export const IntroSection = () => {
  return (
    <section className="intro-section">
      <h1 className="intro-section__title">
        Test assignment for front-end developer
      </h1>
      <p className="intro-section__text">
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they`ll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <a href="#form-section">
        <button className="intro-section__button">Sign up</button>
      </a>
    </section>
  );
};
