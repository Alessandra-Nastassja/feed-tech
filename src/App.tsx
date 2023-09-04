import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

import './global.css'
import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/Alessandra-Nastassja.png",
      name: "Alessandra Nastassja",
      role: "Front-end Sr" 
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' },  
    ],
    publishedAt: new Date('2021-06-12T12:59:57.337Z')
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/leticiacamposs2.png",
      name: "Leticia Campos",
      role: "Front-end Pl" 
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' },  
    ],
    publishedAt: new Date('2021-06-12T12:59:57.337Z')
  },
  {
    id: 3,
    author: {
      avatarUrl: "http://github.com/shusten.png",
      name: "Luis Villas",
      role: "Front-end Pl" 
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' },  
    ],
    publishedAt: new Date('2021-06-12T12:59:57.337Z')
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  post={post}
                />
              )
            })              
          }
        </main>
      </div>
    </>
  )
}