import React from 'react'

import Comment from '../Comment'

import './styles.css'
const Post = (props) => {
  return (
    <>
      <div className="container-Post">
        <div className="Post">
          <div className="Profile">
            <img src={props.data.author.avatar} className="container-profile" />
            <div className="Name">
              <span>{props.data.author.name}</span>
              <div className="Date">
                <span >{props.data.date}</span>
              </div>
            </div>
          </div>
          <div className="Content">
            <span>{props.data.content}</span>
            <hr />

          </div>
          {props.data.comments.map(comment =>
            <Comment
              key={comment.id}
              data={comment}
            />

          )}
          <div className='box-space'>

          </div>
        </div>
      </div>
    </>
  )
}

export default Post