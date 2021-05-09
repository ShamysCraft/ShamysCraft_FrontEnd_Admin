import React, {useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '90%',
      margin: '5%',
      
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));

const HelpPage = (props)=>{
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return(
        <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General Questions</Typography>
          <Typography className={classes.secondaryHeading}>What is ShamysCraft?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is an online platform to display and sell handicrafts of different categories.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Admin</Typography>
          <Typography className={classes.secondaryHeading}>
            How to create a Product?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Click the Add Item in the side navigation bar.<br/>
            Create the Item.<br/>
            Then item will be added and displayed in the Home page.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Admin</Typography>
          <Typography className={classes.secondaryHeading}>
            How to create a Category?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Click the Manage Category in the side navigation bar.<br/>
            Then create the category.
            If category exists, a warning message will appear!
          </Typography>
        </AccordionDetails>
      </Accordion>

      
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Admin</Typography>
          <Typography className={classes.secondaryHeading}>
          How to remove an Item?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Click the remove button on the item displayed at the Home page.<br/>
          Your item will be removed.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Admin</Typography>
          <Typography className={classes.secondaryHeading}>
          How to Update an Item?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Click the update button on the item displayed at the Home page.<br/>
          Admin will be redirected to update product page.<br/>
          Admin can update.<br/>
          Then item will be updated and displayed on the home page.
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your personal data is protected.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>My Orders</Typography>
          <Typography className={classes.secondaryHeading}>
          How to view the placed order?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Item Displayed</Typography>
          <Typography className={classes.secondaryHeading}>
          Add accurate items to displyed to the user!

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To provide a trustful service, add original data of the specific item.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  
    )
}

export default HelpPage;