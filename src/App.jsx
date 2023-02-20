import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
    {
        id: 0,
        author: {
            avatarUrl: "https://github.com/hosanabarcelos.png",
            name: "Hosana Barcelos",
            role: "Developer"
        },
        content: [
            { type: 'paragraph', content: 'Eaí, guys! 👽'},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto usando React!'},
            { type: 'link', content: 'hb.com/hb'},
        ],
        publishedAt: new Date('2023-02-19 15:00:00')
    },
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/hosanabarcelos.png",
            name: "Hosana Barcelos",
            role: "Web Developer"
        },
        content: [
            { type: 'paragraph', content: 'Um projeto de outro planeta! 👽'},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto usando Vue!'},
            { type: 'link', content: 'hsn.com/hsn'},
        ],
        publishedAt: new Date('2023-02-19 15:00:00')
    },
];

export function App() {
  return (
    <div>
        <Header />
        
        <div className={styles.wrapper}>
            <Sidebar />

            <main>
               {posts.map(post => {
                   return (
                        <Post 
                            key={post.id}
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    )
               })}
            </main>
        </div>
    </div>
  );
}