import React from 'react'

export default function ProjectDetails(props) {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dollar set asdlfjalsdfklasdfkjalsdfkaldfj</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>September 26th, 5pm</div>
        </div>
      </div>
    </div>
  )
}