import {
    BMD_GROUPED_PARTS,
    CBCT_GROUPED_PARTS,
    CT_GROUPED_PARTS,
    MRI_GROUPED_PARTS,
    OPG_GROUPED_PARTS,
    US_GROUPED_PARTS,
    XRAY_GROUPED_PARTS
  } from './BodyParts.jsx'


 export const bodyPartList = [
    { modalityGeneric: 'CR', list: XRAY_GROUPED_PARTS },
    { modalityGeneric: 'US', list: US_GROUPED_PARTS },
    { modalityGeneric: 'CT', list: CT_GROUPED_PARTS },
    { modalityGeneric: 'MR', list: MRI_GROUPED_PARTS },
    { modalityGeneric: 'OPG', list: OPG_GROUPED_PARTS },
    { modalityGeneric: 'BMD', list: BMD_GROUPED_PARTS },
    { modalityGeneric: 'CBCT', list: CBCT_GROUPED_PARTS }
  ]
  