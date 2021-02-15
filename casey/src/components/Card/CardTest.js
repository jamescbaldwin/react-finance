import React from 'react';
import { Switch } from '@progress/kendo-react-inputs';
import * as ReactDOM from 'react-dom';
import { Card, CardBody, CardActions } from '@progress/kendo-react-layout';
import { Component } from 'react';


const CardTest = (props) => {

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
            </Card>
           </div>
        )}

export default CardTest;
