import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="app-main about">
      <header>
        <h2>Paperweight</h2>
        <p>Where you write anything...</p>
      </header>
    </main>
  );
};

export default About;
