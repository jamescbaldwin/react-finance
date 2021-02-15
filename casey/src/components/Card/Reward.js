import React, { Component } from 'react'
import Reward from 'react-rewards'
import { Button } from '@progress/kendo-react-buttons';

const defaults = {
    confetti: {
      type: 'confetti',
      fakingRequest: false,
      angle: 90,
      decay: 0.91,
      spread: 45,
      startVelocity: 35,
      elementCount: 40,
      elementSize: 8,
      lifetime: 200,
      zIndex: 10,
      springAnimation: true
    },
    emoji: {
      type: 'emoji',
      fakingRequest: false,
      angle: 90,
      decay: 0.91,
      spread: 100,
      startVelocity: 20,
      elementCount: 15,
      elementSize: 20,
      lifetime: 200,
      zIndex: 10,
      springAnimation: true
    },
    memphis: {
      type: 'memphis',
      fakingRequest: false,
      lifetime: 200,
      zIndex: 10,
      springAnimation: false
    }
  }
  
  export default class RewardButtons extends Component {
    state = {
      ...defaults.memphis,
      rewardPunish: 'reward'
    }
  
    fakeRequest = () => {
      const { rewardPunish } = this.state
      this.setState({
        fakingRequest: false
      })
      setTimeout(() => {
        this.setState({ fakingRequest: false, success: true })
        rewardPunish === 'reward'
          ? this.reward.rewardMe()
          : this.reward.punishMe()
      }, 1500)
    }
  
    render () {
      const {
        type,
        fakingRequest,
        lifetime,
        angle,
        decay,
        spread,
        startVelocity,
        elementCount,
        elementSize,
        zIndex,
        springAnimation,
        rewardPunish
      } = this.state
      const disabled = rewardPunish === 'punish'
      return (
       
          <Reward
            ref={ref => {
              this.reward = ref
            }}
            type={type}
            config={{
              lifetime,
              angle,
              decay,
              spread,
              startVelocity,
              elementCount,
              elementSize,
              zIndex,
              springAnimation
            }}
          >
            <Button
              primary={true} look="outline"
              loading={fakingRequest}
              icon={type ? 'like' : 'trophy'}
              size='small'
              onClick={this.fakeRequest}
            >Follow?</Button>
          </Reward>
             
        
      )
    }
  }
  




