import React from 'react';
import DesignServices from './DesignServices';
import DesignProjects from './DesignProjects';
import DesignTechnologies from './DesignTechnologies';
import UIDesign1 from './UIDesign1';
import UIDesign2 from './UIDesign2';
import ScrollToTopArrow from "../../../ScrollToTopArrow"; 

const D_Services = () => {
  return (
    <>
    <UIDesign1></UIDesign1>
    <UIDesign2></UIDesign2>
    <DesignServices />
    <DesignProjects />
    <DesignTechnologies />
    <ScrollToTopArrow />

    </>
  )
}

export default D_Services
