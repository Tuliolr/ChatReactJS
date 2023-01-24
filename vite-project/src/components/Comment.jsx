import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './avatar';
import styles from './Comment.module.css';

export function Comment() {
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
                        <button title='Deletar comentario'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!!</p>
                </div>

                <footer>
                   <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                    </button> 
                </footer>

            </div>
        </div>
    )
}