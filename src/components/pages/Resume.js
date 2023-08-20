import React from 'react';
import resume from '../../Resume.txt'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <h2>Download my <a href={resume}>resume</a></h2>
      <b>Front-end Proficiencies:</b>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>bootstrap</li>
        <li>React</li>
      </ul>

      <b>Back-end Proficiencies:</b>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>RESTFUL APIs</li>
        <li>CRUD Operations</li>
      </ul>
    </div>
  );
}
