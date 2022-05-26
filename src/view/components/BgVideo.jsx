import React from 'react'
import styles from './styles'

const BgVideo = props => {
  const classes = styles()

  return (
    <div className={classes.fullScreenBg}>
      <video id="vice-fullscreen-bg-media" autoPlay muted loop playsInline className={classes.viceFullscreenBgVideo}>
        <source src="/assets/bg.mp4" type="video/webm"></source>
        <source src="/assets/bg.mp4" type="video/mp4"></source>
        <source src="/assets/bg.mp4" type="video/ogg"></source>

        </video>
    </div>
  )
}

export default React.memo(BgVideo)
