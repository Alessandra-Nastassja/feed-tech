import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1501130847258-0d557e9c93d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="http://github.com/Alessandra-Nastassja.png" />
        <strong>Alessandra Nastassja</strong>
        <span>Front-end</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} /> 
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}