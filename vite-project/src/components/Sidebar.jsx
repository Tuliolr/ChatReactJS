import { PencilLine } from 'phosphor-react';
import { Avatar } from './avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
       
       <div className={styles.profile}>
       <Avatar src="https://media.licdn.com/dms/image/C4D03AQFxSn2A-w6I6w/profile-displayphoto-shrink_800_800/0/1660849367430?e=1678924800&v=beta&t=vDvN_wenSl_zDPBZRQfzpPd818u6DYqQLSwzrspGHsk"/>
        <strong>Tulio Lopes</strong>
        <span>Web Developer</span>   
    </div> 

      <footer>
        <a href="#">
            <PencilLine size={20} />
            Editar seu perfil</a>
        </footer>  
    </aside>
    );
}