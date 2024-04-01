import clsx from 'clsx';
import css from "./FriendListItem.module.css"

export default function FriendListItem({  avatar, name, isOnline  }) {
    let color = clsx(css.p, isOnline ? css.green : css.red)
    return <>
        <div className={css.div}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css.p}>{ name}</p>
         <p className={ color}> {isOnline ? "Online" : "Offline"}</p>  
</div>
</>
}