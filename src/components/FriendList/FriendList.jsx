import FriendListItem from "../FriendListItem/FriendListItem"
import clsx from 'clsx';
import css from "./friendList.module.css"
export default function FriendList({ friends }) {
   
    return <div className={css.div}>
        <ul className={css.list}>
            {friends.map((frend) => (<li className={css.li} key={frend.id}>
                <FriendListItem avatar = {frend.avatar}
                    name={frend.name}  isOnline={frend.isOnline} /> 
        </li>
 )
            )}
            
        
        </ul>
    </div>
}