import React from "react";
import css from "./Profile.module.css"
const Profile =( {username, tag, location, avatar,stats} )=>{
  return(
<div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <div className={css.descIn}>
    <p className={css.name}>{username}</p>
    <p className={css.nameIN}>{tag}</p>
    <p className={css.nameIN}>{location}</p>
    </div>
 

  <ul className={css.stats}>
    <li className={css.statsEl}>
      <span className={css.elSpan}>Followers</span>
      <span className={css.elSpan}>{stats.followers}</span>
    </li>
    <li className={css.statsEl}>
      <span className={css.elSpan}>Views</span>
      <span className={css.elSpan}>{stats.views}</span>
    </li>
    <li className={css.statsEl}>
      <span className={css.elSpan}>Likes</span>
      <span className={css.elSpan}>{stats.likes}</span>
    </li>
  </ul>
  </div>
</div>
  )
}
export default Profile