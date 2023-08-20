import React from 'react';

const mainstyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "80vh",
  flex: 1,
  padding: "5%",

}
export default function About() {
  return (
    <div style={mainstyle}>
      <h1>About Me</h1>
      <p>I recently embarked on a transformative journey with the Web Development BootCamp at the University of Birmingham. This rigorous program offers an in-depth exploration of both front-end and back-end web technologies. My aim was to not only grasp the theoretical aspects but to immerse myself in practical applications, enabling me to craft responsive, dynamic, and user-friendly websites.</p>
      <p>The curriculum spanned a complete scale of essential topics, from the foundational HTML, CSS, and JavaScript to advanced topics like responsive design, accessibility, performance optimization, and version control. Each project I undertook served as a canvas to apply classroom knowledge, but more importantly, they honed my problem-solving skills and underscored the value of teamwork during project weeks.</p>
      <p>Here are some of the notable projects I've accomplished during the BootCamp so far:</p>
      <ul>
        <li><strong>Picturesque:</strong> This one is using a lot of third party APIs including IMDB, Youtube, Google Map to build a Movie information website. It also makes use of jQuery and slack for visual effect.</li>
        <li><strong>Music Portal:</strong>This is a full stack application for music lover. it showcases the backend using Sequential to perform CRUD operations with a lot of front-end style elements like bubble effects and animated SVG.</li>
        <li><strong>J.A.T.E:</strong>This is to showcase the PWA functionality with indexDB.</li>
        <li><strong>Technology Blogging:</strong>This is another full stack application for Technology Bloggine. </li>
        <li><strong>Note Taking Server:</strong>This is the first application that requires the backend functionality.</li>
        <li><strong>Weather Dashboard:</strong>This is the first application using third party API.</li>
      </ul>
      <p>As I stride forward in my web development journey, I'm eager to harness the skills and insights from the BootCamp to devise innovative web solutions. Please don't hesitate to connect if you wish to delve deeper into my work or if you have any queries.</p>
    </div>
  );
}
