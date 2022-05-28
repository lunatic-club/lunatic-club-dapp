import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import RedditIcon from '@mui/icons-material/Reddit'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TelegramIcon from '@mui/icons-material/Telegram'
const SocialBar = props => {
  return (
    <ul className='ct-socials'>
      <li>
        <a href='https://t.me/LUNAtic_club' target='_blank'><TelegramIcon /></a>
      </li>
      <li>
        <a href='https://twitter.com/club_lunatic' target='_blank'><TwitterIcon /></a>
      </li>
      <li>
        <a href='https://www.reddit.com/r/LUNAtic_Club/comments/uzr2cg/join_the_first_lunatic_nft_club' target='_blank'><RedditIcon /></a>
      </li>
      <li>
        <a href='https://www.youtube.com/watch?v=UrXB8vZC_0s' target='_blank'><YouTubeIcon /></a>
      </li>
    </ul>
  )
}

export default React.memo(SocialBar)
