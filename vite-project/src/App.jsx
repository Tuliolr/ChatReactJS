import { Header } from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/C4D03AQFxSn2A-w6I6w/profile-displayphoto-shrink_800_800/0/1660849367430?e=1678924800&v=beta&t=vDvN_wenSl_zDPBZRQfzpPd818u6DYqQLSwzrspGHsk',
      name: 'Tulio lopes',
      role: 'Web developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},       
    ],
    publishedAt: new Date('2022-10-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/C4D03AQFxSn2A-w6I6w/profile-displayphoto-shrink_800_800/0/1660849367430?e=1678924800&v=beta&t=vDvN_wenSl_zDPBZRQfzpPd818u6DYqQLSwzrspGHsk',
      name: 'Caio lopes',
      role: 'Educator'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},       
    ],
    publishedAt: new Date('2022-10-10 20:00:00'),
  },
];

export  function App() {
  return (
    <div>
      <Header/>

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
   
  )
}


