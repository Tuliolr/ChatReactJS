import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar  hasBorder={false} src="https://media.licdn.com/dms/image/C4D03AQFxSn2A-w6I6w/profile-displayphoto-shrink_800_800/0/1660849367430?e=1678924800&v=beta&t=vDvN_wenSl_zDPBZRQfzpPd818u6DYqQLSwzrspGHsk"alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Tulio Lopes</strong>
                            <time title='13 de Janeiro as 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentario'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                   <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                    </button> 
                </footer>

            </div>
        </div>
    )
}