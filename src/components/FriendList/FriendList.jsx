import FriendListItem from "../FriendListItem/FriendListItem"
import clsx from 'clsx';
import css from "./friendList.module.css"
export default function FriendList({ friend }) {
   
    return <div className={css.div}>
        <ul className={css.list}>
            {friend.map((frend) => (<li className={css.li} key={frend.id}>
          <FriendListItem frend={frend} /> 
        </li>
 )
            )}
            
        
        </ul>
    </div>
}