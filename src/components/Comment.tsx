import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';
import { useState } from 'react';

interface CommentPropos {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentPropos){
  const [likeContent, setLinkeContent] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeContent() {
    setLinkeContent((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/Alessandra-Nastassja.png" alt='' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alessandra Nastassja</strong>
              <time title="11 de maio as 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeContent}>
            <ThumbsUp />
            Aplaudir <span>{likeContent}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}