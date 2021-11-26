import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="app-main about">
      <article>
        <header>
          <h2>Paperweight</h2>
        </header>
        <p>Where you write anything...</p>
      </article>
    </main>
  );
};

export default About;
