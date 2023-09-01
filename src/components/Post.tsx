import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;

}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content;
}

export function Post({ author, publishedAt, content }: PostProps){
  const [ comments, setComments ] = useState(['Tá chuchu']);

  const [ newCommentText, setNewCommentText ] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const isNewCommentEmpty = newCommentText.length == 0;

  function handleCreateNewComments(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText('');
  }

  function handlenNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });

    setComments(commentWithoutDeleteOne);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === 'link') {
              return <p key={line.content}> <a href='#'>{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComments} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={handlenNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button 
            type="submit" 
            disabled={isNewCommentEmpty}
          >
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
          <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment} 
          />
          );
        })}
      </div>
    </article>
  )
}