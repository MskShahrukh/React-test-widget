
import Icon from '@material-ui/core/Icon'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import tests from '../../commons/test.json'

import './accordion.css';


// function checkTypeCast(type, defaultVal) {
//   console.log("checkTypeCast : ", type, defaultVal)
//   if (type === 'integer') {
//     return <input type='number' defaultValue={defaultVal} />;
    
//   }
//   if (type === 'text') {
//     return <input type='text' defaultValue={defaultVal} />;
    
//   }
// }

function checkTestParam(param,code,e) {
  // console.log("tests >>> ", tests);
  // console.log("param >>> ", param);
  // console.log("code >>> ", code);

  let found = tests.find(a=>a.code === code)
  console.log("found >>> ", found);
  console.log("e >>> ", e.target.value);
}

function mapTestParams(params, code) {
  let testParams = params && params.length > 0 && params.map((param) => {
    return <div
      key={param.label + param.value}
    >
      <br />      
      <TextField id="outlined-basic" label="Outlined" variant="outlined"
       onChange={(e)=>{ checkTestParam(param, code,e)}}
       type={param.type}
       defaultValue={param.value}
       max={param.label === 'To' ? param.value: null}
       min={param.label === 'From' ? param.value: null}
      />
    </div>
  });
  
  return testParams;
  
}

function testJsonMapping(test) {
  let found = tests.find(a=>a.code === test.code)
  return found;
}

function TestDetails(test) {
  console.log("TEST >>> ",test)

  let openedTestID = '';
  let found = testJsonMapping(test);

  return (<div
    className={'accordion padded-10'}
    
  >
    <div className={"accordion-header " + test.level}
      onClick={() => {
        console.log("accordion-header clicked : ", found)
        openedTestID = found.id
      }}>
      <b>
        <h3>
          {found.name}
        </h3>        
        <Icon> {found.icon} </Icon>
      </b>
      <br />
    </div>
  
    

    <div className={'accordion-body '}
>
      <i>
        {found.description}
      </i>
      <br /><br />

      level name : {test.level} <br />
      params : {test.params.length} <br />
      {test.params.length > 0 && mapTestParams(test.params, test.code)}
      <br />
    </div>
    
  </div>);
}





function Accordion(props) {
    let { tests } = props
    let testDetails = tests && tests.length > 0 && tests.map((test) => {
        return <div
            key={test.code + test.level}
        >
        <Paper elevation={3} >
           { TestDetails(test) }
        </Paper>
      <br />
    </div>
});
    
    return testDetails;
}

export default Accordion;
