import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src="https://github.com/hosanabarcelos.png"
                    />

                    <div className={styles.authorInfo}>
                        <strong>Hosana Barcelos</strong>
                        <span>Developer</span>
                    </div>
                </div>

                <time 
                    title="19 de Fevereiro às 13:30h" 
                    dateTime="2023-02-19"
                >
                    Publicado há 2h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 jane.design/doctorcare</p>

                <p>#novoprojeto #nlw #rocketseat </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>

                <textarea 
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}