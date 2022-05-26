import React, {useContext} from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import {Context} from '../core/Store'
import {setNotificationId} from '../../data/actions'
import Intro from '../sections/intro'
import Mint from '../sections/mint'
import Project from '../sections/project'
import Faq from '../sections/faq'
import Toast from '../ui-elements/toast'
import LunaSendSuccess from '../components/notification/LunaSendSuccess'
import MintSuccess from '../components/notification/MintSuccess'

const pluginWrapper = () => {
  require('./waterEffect.js')
};

const Home = () => {
  const [state, dispatch] = useContext(Context)

  const renderMessage = () => {
    switch(state.notificationId) {
      case 1:
        return <LunaSendSuccess terraTxHash={state.terraTxHash} />
      case 2:
        return <p>Error while sending Terra LUNA; please refresh and try again.</p>
      case 3:
        return <p>Reincarnation pass acquired</p>
      case 4:
        return <p>Error while requesting the reincarnation pass; please refresh and try again.</p>
      case 5:
        return <MintSuccess txHash={state.mintHash} />
      case 6:
        return <p>Error while minting the NFT; please refresh and try again.</p>
    }
  }

  const renderToast = () => (
    <Toast
      success={[1, 3, 5].includes(state.notificationId)}
      isOpen={state.notificationId > 0}
      onClose={() => dispatch(setNotificationId(0))}
    >
     {renderMessage()}
    </Toast>
  )

  return (
    <>
      <ReactFullpage
        pluginWrapper = {pluginWrapper}
        scrollingSpeed = {500}
        licenseKey='gplv3-license'
        waterEffect={true}
        waterEffectOptions={{animateContent: true, animateOnMouseMove: true, speed: 700}}
        render={({state, fullpageApi}) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section"><Intro /></div>
              <div className="section"><Mint /></div>
              <div className="section"><Project /></div>
              <div className="section"><Faq /></div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
      {renderToast()}
    </>
  )
}

export default React.memo(Home)
