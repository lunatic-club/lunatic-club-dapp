import React, {useState, useContext} from 'react'
import {styled} from '@mui/material/styles'
import Check from '@mui/icons-material/Check'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector'
import {Context} from '../../core/Store'
import {setNotificationId, setTerraTxHash, setMintHash} from '../../../data/actions'
import SendLunaStep from './sendLunaStep'
import MintNft from './mintNft'
import WelcomeToLunaticClub from './welcomeToLunaticClub'
import styles from './styles'

const QontoConnector = styled(StepConnector)(({theme}) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}))

const QontoStepIconRoot = styled('div')(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    }
  })
)

const QontoStepIcon = props => {
  const {active, completed, className} = props

  return (
    <QontoStepIconRoot ownerState={{active}} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  )
}

const Mint = ({on}) => {
  const classes = styles()
  const [state, dispatch] = useContext(Context)
  const [activeStep, setActiveStep] = useState(1)
  const [pass, setPass] = useState('')

  const handleSuccess = ({type, value}) => {
    switch(type) {
      case 'txHash':
        dispatch(setTerraTxHash(value))
        dispatch(setNotificationId(1))
        break
      case 'pass':
        setPass(value)
        dispatch(setNotificationId(3))
        setActiveStep(2)
        break
      case 'mintTxHash':
        dispatch(setMintHash(value))
        dispatch(setNotificationId(5))
        setActiveStep(3)
        break
    }
  }

  const handleError = ({type}) => {
    switch(type) {
      case 'txHash':
        dispatch(setNotificationId(2))
        break
      case 'pass':
        dispatch(setNotificationId(4))
        break
      case 'mintTxHash':
        dispatch(setNotificationId(5))
        break   
    }
  }

  const renderStep = () => {
    switch(activeStep) {
      case 1:
        return <SendLunaStep
          ethAccount={state.ethAccount}
          onSuccess={handleSuccess}
          onError={handleError} 
        />
      case 2:
        return <MintNft
          ethAccount={state.ethAccount}
          pass={pass}
          onSuccess={handleSuccess}
          onError={handleError} 
        />
      case 3:
        return <WelcomeToLunaticClub />
      default:
        return null
    }
  }

  return (
    <>
      <Stack sx={{width: '100%'}} spacing={4}>
        <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <span className={classes.stepLabel}>Commemorate</span>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <span className={classes.stepLabel}>Reincarnate</span>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <span className={classes.stepLabel}>Welcome to LUNAtic Club</span>
            </StepLabel>
          </Step>
        </Stepper>
        {renderStep()}
      </Stack>
    </>
  )
}

export default React.memo(Mint)
