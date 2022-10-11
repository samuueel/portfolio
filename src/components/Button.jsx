import React from 'react'
import "./Button.css"

const Button = (props) => {
  return (
      <a href={props.link}>
          <div className="on-light">
              <button className="coolBeans">
                  {props.name}
              </button>
          </div>
      </a>
  )
}

export default Button