import React from 'react'

import './styles.css'
const Comment = (props) => {
  return (
    <>
      <div className="container-Comment">
        <div className="Comment">
          <img src={props.data.author.avatar} />
        </div>
        <div className="comment-Content">
          <div className="content-Box">
            <b>{props.data.author.name}</b>: {props.data.content}
          </div>
        </div>
      </div>
    </>
  )
}

export default Comment