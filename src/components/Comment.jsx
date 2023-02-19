import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://github.com/hosanabarcelos.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Hosana Barcelos</strong>
                            <time 
                                title="19 de Fevereiro às 13:30h" 
                                dateTime="2023-02-19"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Excluir comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom, cara!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>15</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}