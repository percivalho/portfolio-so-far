import React from 'react';
//import projects from '.../projects';

const mainstyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "80vh",
  flex: 1,
  padding: "5%",
}

const listGroupStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  margin: '0 auto',
};

const listItemStyle = {
  width: "40%",
};

const imgStyle = {
  maxWidth: "100%",
  height: "auto",
};

export default function Portfolio({ projects }) {
  //console.log(projects);
  return (
    <div style={mainstyle}>
      <h1>Portfolio</h1>
      <ul className="list-group" style={listGroupStyle}>
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {projects.map((project) => (
          <li className="list-group-item" style={listItemStyle}>
            <h2>{project.title}</h2>
            <a href={project.link}><img
              src={project.pic}
              alt={project.title}
              style={imgStyle}
              onMouseOver={e => e.currentTarget.src = project.pich}
              onMouseOut={e => e.currentTarget.src = project.pic}
            /></a>
            {/*`${user.name.first} ${user.name.last} (${user.login.username})`*/}
            <a href={project.git}><p>Github</p></a>
            <a href={project.link}><p>Website</p></a>
          </li>
        ))}
      </ul>
    </div>
  );
}
