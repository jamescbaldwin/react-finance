import { AnalogClock } from 'customizable-analog-clock'
 
const clock = new AnalogClock({
    htmlElement : 'my-clock',
    showDate: true,
    showDigitalClock: true,
    showIndicators: true,
    clockIndicators : ['1', '2', '3' , '4', '5', '6', '7', '8', '9', '10', '11', '12']
    // styleOptions : {
    //     fontSize: '35px',
    //     fontFamily: 'Roboto'
    // }
});


function AnalogClockH() {
    return (
        <div id="my-clock" style="width: 200px; height: 200px;">
       
        <AnalogClock />
      </div>
      )
    };
  
  
  export default AnalogClockH;