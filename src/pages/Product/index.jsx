import React,{useState, useEffect} from 'react'
import axios from 'axios';

// mui
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


// companents
import AddProduct from '../../companents/AddProduct';
import ProductTable from '../../companents/ProductTable';



// tabs function
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  //main
const Product = () => {

     // mui
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

//   


  return (
    <div>
        <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Add Products" {...a11yProps(0)} />
            <Tab label="Products List" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} className="first-tab">
        
          <AddProduct/>
          
        </TabPanel>
        <TabPanel value={value} index={1}>
            <ProductTable />
        </TabPanel>
      </Box>
    </div>
  )
}

export default Product