import React from 'react';
//import projects from '.../projects';

const mainstyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "80vh",
  flex: 1,
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
  console.log(projects);
  return (
    <div style={mainstyle}>
      <h1>Portfolio</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
      <ul className="list-group" style={listGroupStyle}>
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {projects.map((project) => (
          <li className="list-group-item" style={listItemStyle}>
            <p>{project.title}</p>
            <img
              src={project.pic}
              alt={project.title}
              style={imgStyle}
            />
            {/*`${user.name.first} ${user.name.last} (${user.login.username})`*/}
          </li>
        ))}
      </ul>
    </div>
  );
}
