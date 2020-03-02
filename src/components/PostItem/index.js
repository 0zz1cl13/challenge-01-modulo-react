import React from "react";

import { Header, Post, Comments, Divider, Content } from "./styles";

export default function PostItem({ author, date, content, comments }) {
  return (
    <>
      <Post>
        <Header>
          <img src={author.avatar} alt={String("Autor")} />
          <div>
            <span>{author.name}</span>
            <span>{date}</span>
          </div>
        </Header>

        <Content>{content}</Content>

        <Divider />

        <Comments>
          {console.log(comments)}
          {comments.map(comment => (
            <div key={String(comment.id)}>
              <img src={comment.author.avatar} alt={String("Comment author")} />
              <p>
                <span>{comment.author.name}</span>
                {comment.content}
              </p>
            </div>
          ))}
        </Comments>
      </Post>
    </>
  );
}
