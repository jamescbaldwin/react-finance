import React from 'react';
import { Switch } from '@progress/kendo-react-inputs';
import * as ReactDOM from 'react-dom';
import { Card, CardBody, CardActions } from '@progress/kendo-react-layout';
import { Component, State, setState } from 'react';
import Reward from 'react-rewards';
import { Button } from '@progress/kendo-react-buttons';
import RewardButton from "../Card/Reward"
// const defaults = {
//     confetti: {
//       type: 'confetti',
//       fakingRequest: false,
//       angle: 90,
//       decay: 0.91,
//       spread: 45,
//       startVelocity: 35,
//       elementCount: 40,
//       elementSize: 8,
//       lifetime: 200,
//       zIndex: 10,
//       springAnimation: true
//     },
//     emoji: {
//       type: 'emoji',
//       fakingRequest: false,
//       angle: 90,
//       decay: 0.91,
//       spread: 100,
//       startVelocity: 20,
//       elementCount: 15,
//       elementSize: 20,
//       lifetime: 200,
//       zIndex: 10,
//       springAnimation: true
//     },
//     memphis: {
//       type: 'memphis',
//       fakingRequest: false,
//       lifetime: 200,
//       zIndex: 10,
//       springAnimation: true
//     }
//   }


const CardTest = (props) => {

function fetchSomeData(ref) {
    this.reward.rewardMe();
}

    const [expanded, setExpanded] = React.useState(true);
    const [mode, setMode] = React.useState(true);
    

    let expandMode = mode ? 'Following' : 'Follow';

    const handleChange = () => { setMode(prevState => !prevState); };
    
    // const handleSelect = (ev) => {
    //     setSelectedId(ev.itemIndex);
    //     setExpanded(false);
    // };

    
        return (
            
                   <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            <Card style={{ width: 300 }}>
                <CardBody>
                    <h1>{props.name}</h1>
                </CardBody>
                    <CardActions layout='stretched'>
                         <span className="k-button k-flat k-primary"><p>{props.symbol}</p></span>
                         <span className="k-button k-flat k-primary">{props.score}</span>
                    </CardActions>
                <Switch checked={mode} onChange={handleChange} />
                    <div className="k-form-field">
                        <b>{expandMode}</b>
                    </div>
                    <Reward />
            </Card>
           </div>
        )}

export default CardTest;
