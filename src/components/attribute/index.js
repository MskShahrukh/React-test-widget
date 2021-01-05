

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Typography, List, ListItem, Card } from '@material-ui/core';

import Accordion from '../accordion'
import attributes from '../../commons/attributes.json'

import './attribute.css';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Attributes() {
  const classes = useStyles();
  

  const [selectedAttr, setSelectedAttr] = useState(null);
  const attrs = attributes && attributes.length > 0 && attributes.map((attr) => {   
  
    return <List
      component="nav"
      aria-label="main mailbox folders"
      className="each-attribute1 "
      key={attr.short_label}
      onClick={() => {
          setSelectedAttr(attr)
          
      }}>
      <ListItem button>
         {attr.name}
      </ListItem>
    </List>
})

  
  
  return (
    <div className="body" >
      <br />
      <br />
        <h2>
        Attributes
        </h2>
      <ul>
        {attrs}
      </ul>
      {selectedAttr && (
        <div>
        <hr />         
        <br />
        <h2>
          {selectedAttr && selectedAttr.label}
        </h2>
          <h3>
            {selectedAttr && selectedAttr.description}
          </h3>
          <div>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Additional info...
                   <br />
                  <br /> Channels :
                    {selectedAttr && selectedAttr.channels.length}
                    <br />
                    isTestable :
                    {selectedAttr && selectedAttr.testable && selectedAttr.testable === true && 'true'}
                    <br /> Tests :
                    {selectedAttr && selectedAttr.channels[0].tests.length}
                    <br />
                </Typography>
              </CardContent>
            </Card>
                
        </div>
                  <br />
                  <Typography className={classes.title} color="textSecondary" gutterBottom>                 
                  Sections and Tests elaborated below :
                </Typography>
                  <br />
              
                  { selectedAttr && selectedAttr.channels &&
                      <Accordion tests={selectedAttr.channels[0].tests}></Accordion>
                  }
                  
     </div>
   
      )}
    </div>
  );
}

export default Attributes;
