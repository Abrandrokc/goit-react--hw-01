import clsx from 'clsx';
import profscss from "./Profile.module.css"

let left = clsx(profscss.li, profscss.Left)
let Right = clsx(profscss.Right, profscss.li)
export default function Profile({ avatar, username, tag, location, stats:{followers, views, likes} }) {

  return (
    <div className={ profscss.div}>
          <img className={profscss.img} src={avatar} width={100} height={100}
      alt="User avatar"    />
      <p className={profscss.name}>{username}</p>
      <p className={profscss.info}>@{tag}</p>
      <p className={profscss.info}>{location}</p>
      <ul className={profscss.list }>
        <li className={left}>
          <span>Followers</span>
          <span className={profscss.name}>{followers}</span>
        </li>
        <li className={profscss.li}>
          <span>Views</span>
          <span className={profscss.name}>{views}</span>
        </li>
        <li className={Right}>
          <span>Likes</span>
          <span className={profscss.name}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
