import UltraSound from "@/assets/Ultrasound.svg?react";
import XRAY from "@/assets/XRAY.svg?react";
import BMD from "@/assets/BMD.svg?react";
import CT from "@/assets/CT.svg?react";
import Injections from "@/assets/Injections.svg?react";
import Mammo from "@/assets/Mammo.svg?react";
import Pregnancy from "@/assets/Pregnancy.svg?react";
import MRI from "@/assets/MRI.svg?react";
import OPG from "@/assets/OPG.svg?react";
import NuclearMedicine from "@/assets/radioactive.svg?react";
import EOS from "@/assets/EOS.svg?react";

// Function to generate ModalityList
export const getModalityList = (isMobile) => [
  {
    name: "Ultrasound",
    image: (
      <UltraSound
        width={isMobile ? "20px" : "29px"}
        height={isMobile ? "28px" : "40px"}
      />
    ),
    visible: true,
  },
  {
    name: "Pregnancy",
    image: (
      <Pregnancy
        width={isMobile ? "20px" : "29px"}
        height={isMobile ? "28px" : "40px"}
      />
    ),
    visible: true,
  },
  {
    name: "CT",
    image: (
      <CT
        width={isMobile ? "22px" : "29px"}
        height={isMobile ? "26px" : "34px"}
      />
    ),
    visible: true,
  },
  {
    name: "MRI",
    image: (
      <MRI
        width={isMobile ? "28px" : "37px"}
        height={isMobile ? "19.76px" : "26px"}
      />
    ),
    visible: true,
  },
  {
    name: "X-RAY",
    image: (
      <XRAY
        width={isMobile ? "23px" : "25px"}
        height={isMobile ? "23px" : "25px"}
      />
    ),
    visible: true,
  },
  {
    name: <div style={{ textAlign: "left" }}><div>Injections/</div><div>Biopsy</div></div>,
    image: (
      <Injections
        width={isMobile ? "23px" : "36px"}
        height={isMobile ? "23px" : "26px"}
      />
    ),
    visible: true,
    applyCustomLogic: true
  },
  {
    name: "BMD/DEXA",
    image: (
      <BMD
        width={isMobile ? "19px" : "27px"}
        height={isMobile ? "20.16px" : "27px"}
      />
    ),
    visible: true,
  },
  {
    name: "Mammo",
    image: (
      <Mammo
        width={isMobile ? "22px" : "30px"}
        height={isMobile ? "22px" : "41px"}
      />
    ),
    visible: false,
  },
  {
    name: "OPG",
    image: (
      <OPG
        width={isMobile ? "21.14px" : "29px"}
        height={isMobile ? "23.98px" : "34px"}
      />
    ),
    visible: true,
  },
  {
    name: "EOS",
    image: (
      <EOS
        width={isMobile ? "35px" : "38px"}
        height={isMobile ? "35px" : "38px"}
      />
    ),
    visible: true
  },
  {
    name: "PET/CT",
    image: (
      <CT
        width={isMobile ? "22px" : "29px"}
        height={isMobile ? "26px" : "34px"}
      />
    ),
    visible: true,
  },
  {
    name: "Nuclear Medicine",
    image: (
      <NuclearMedicine
        width={isMobile ? "35px" : "40px"}
        height={isMobile ? "35px" : "40px"}
      />
    ),
    visible: true
  }
];
