import React from 'react'

export default function ProjectSummary({project}) {
  return (
    <div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text darkened-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by Shaun</p>
          <p className="grey-text">September 26th, 5pm</p>
        </div>
      </div> 
    </div>
  )
}
