import AnkleGray from "@/assets/bodyparts/Gray/SVG/ankle.svg?react";
import AbdomenGray from "@/assets/bodyparts/Gray/SVG/abdomen.svg?react";
import CalciumScore from "@/assets/CalciumScore.svg?react";
import BreastGray from "@/assets/bodyparts/Gray/SVG/breast.svg?react";
import ChestGray from "@/assets/bodyparts/Gray/SVG/chest.svg?react";
import ElbowGray from "@/assets/bodyparts/Gray/SVG/elbow.svg?react";
import FaceGray from "@/assets/bodyparts/Gray/SVG/face.svg?react";
import FingersGray from "@/assets/bodyparts/Gray/SVG/fingers.svg?react";
import FootGray from "@/assets/bodyparts/Gray/SVG/foot.svg?react";
import FullSpineGray from "@/assets/bodyparts/Gray/SVG/full-spine.svg?react";
import GenitalsGray from "@/assets/bodyparts/Gray/SVG/genitals.svg?react";
import HandGray from "@/assets/bodyparts/Gray/SVG/hand.svg?react";
import HeadGray from "@/assets/bodyparts/Gray/SVG/head.svg?react";
import HipsGray from "@/assets/bodyparts/Gray/SVG/hips.svg?react";
import LSpineGray from "@/assets/bodyparts/Gray/SVG/LSpine.svg?react";
import KneeGray from "@/assets/bodyparts/Gray/SVG/knee.svg?react";
import LegGray from "@/assets/bodyparts/Gray/SVG/leg.svg?react";
import MandibleGray from "@/assets/bodyparts/Gray/SVG/mandible.svg?react";
import NeckGray from "@/assets/bodyparts/Gray/SVG/neck.svg?react";
import PelvisGray from "@/assets/bodyparts/Gray/SVG/pelvis.svg?react";
import SaccrumGray from "@/assets/bodyparts/Gray/SVG/saccrum.svg?react";
import ScapulaGray from "@/assets/bodyparts/Gray/SVG/scapula.svg?react";
import ShoulderGray from "@/assets/bodyparts/Gray/SVG/shoulder.svg?react";
import TemporalBonesGray from "@/assets/bodyparts/Gray/SVG/temporal-bone.svg?react";
import ToeGray from "@/assets/bodyparts/Gray/SVG/toe.svg?react";
import UpperArmGray from "@/assets/bodyparts/Gray/SVG/upper-arm.svg?react";
import WristGray from "@/assets/bodyparts/Gray/SVG/wrist.svg?react";
import PregnancyGray from "@/assets/Pregnancy.svg?react";
import OPGIcon from "@/assets/OPG.svg?react"
import ChestAndCardiac from "@/assets/ChestAndCardiac.svg?react"
import HeadAndNeck from "@/assets/HeadAndNeck.svg?react"
import ShoulderAndHand from "@/assets/ShoulderAndHand.svg?react"
import LegAndFoot from "@/assets/LegAndFoot.svg?react"
import Urinary from "@/assets/Urinary.svg?react"
import Procedures from "@/assets/Procedures.svg?react"
import FemaleScan from "@/assets/FemaleScan.svg?react"
import MaleScan from "@/assets/MaleScan.svg?react"
import Mammo from "@/assets/Mammo.svg?react";
import { fill } from "lodash";





const PregnancyBodypart = { label: "Pregnancy", icon: <PregnancyGray width="35px" height="28px" /> }
const LeftBreastBodypart = { label: "Left Breast", icon: <BreastGray width="35px" height="28px" /> }
const RightBreastBodypart = { label: "Right Breast", icon: <BreastGray width="35px" height="28px" /> }
const BothBreastBodypart = { label: "Both Breasts", icon: <BreastGray width="35px" height="28px" /> }

const PelvisBodypart = { label: "Pelvis", icon: <PelvisGray width="35px" height="28px" /> }
const TestesBodypart = { label: "Testes" }
const ScrotumBodypart = { label: "Scrotum" }
const ProstateBodypart = { label: "Prostate" }
const HandBodypart = { label: "Hand", icon: <HandGray width="29px" height="29px" />, options: ["Left Hand", "Right Hand", "Both Hands"] }
const ShoulderBodypart = { label: "Shoulder", icon: <ShoulderGray width="29px" height="29px" />, options: ["Left Shoulder", "Right Shoulder", "Both Shoulders"] }
const UpperArmBodypart = { label: "Upper Arm", icon: <UpperArmGray width="29px" height="29px" /> }
const ElbowBodypart = { label: "Elbow", icon: <ElbowGray width="29px" height="29px" />, options: ["Left Elbow", "Right Elbow", "Both Elbows"] }
const WristBodypart = { label: "Wrist", icon: <WristGray width="29px" height="29px" />, options: ["Left Wrist", "Right Wrist", "Both Wrists"] }
const ForearmBodypart = { label: "Forearm" }
const FingerBodypart = { label: "Fingers", icon: <FingersGray width="29px" height="29px" /> }
const HipBodypart = { label: "Hip", icon: <HipsGray width="29px" height="29px" />, options: ["Left Hip", "Right Hip", "Both Hips"] }
const GroinBodypart = { label: "Groin" }
const AnkleBodypart = { label: "Ankle", icon: <AnkleGray width="29px" height="29px" />, options: ["Left Ankle", "Right Ankle", "Both Ankles"] }
const KneeBodypart = { label: "Knee", icon: <KneeGray width="29px" height="29px" />, options: ["Left Knee", "Right Knee", "Both Knees"] }
const LegBodypart = { label: "Leg", icon: <LegGray width="29px" height="29px" />, options: ["Left Leg", "Right Leg", "Both Legs"] }
const FootBodypart = { label: "Foot", icon: <FootGray width="29px" height="29px" />, options: ["Left Foot", "Right Foot", "Both Feet"] }
const ToeBodypart = { label: "Toe", icon: <ToeGray width="29px" height="29px" />, options: ["Left Toe", "Right Toe", "Both Toes"] }
const ClavicleBodypart = { label: "Clavicle" }
const ThighBodypart = { label: "Thigh" }
const ButtockBodypart = { label: "Buttock" }
const MassBodypart = { label: "Mass" }
const AbdomenBodypart = { label: "Abdomen", icon: <AbdomenGray width="25px" height="30px" /> }
const UpperAbdomenBodypart = { label: "Upper Abdomen", fontSize: "13px" }
const AbdomenPelvisBodypart = { label: "Abdomen & Pelvis", fontSize: "15px" }
const AbdominalWallBodypart = { label: "Abdominal Wall", fontSize: "13px" }
const LiverBodypart = { label: "Liver" }
const GallbladderBodypart = { label: "Gallbladder", fontSize: "13px" }
const PancreasBodypart = { label: "Pancreas" }
const HerniaBodypart = { label: "Hernia" }
const FibroscanBodypart = { label: "Fibroscan" }
const ElastographyBodypart = { label: "Elastography" }
const RenalBodypart = { label: "Renal" }
const LowerAbdomenBodypart = { label: "Lower Abdomen", fontSize: "13px" }
const KUBBodypart = { label: "KUB" }
const KidneyBodypart = { label: "Kidney" }
const BladderBodypart = { label: "Bladder" }
const DVTBodypart = { label: "DVT" }
const LowerLegDopplerBodypart = { label: "Lower Leg Doppler" }
const LumbarSpineBodypart = { label: "Lumbar spine", icon: <LSpineGray width="29px" height="29px" /> }
const LumbosacralSpineBodypart = { label: "Lumbosacral Spine", fontSize: "13px" }
const CervicalSpineBodypart = { label: "Cervical Spine" }
const ThoracicSpineBodypart = { label: "Thoracic Spine" }
const CoccyxBodypart = { label: "Coccyx/Saccrum", fontSize: "14px" }
const SaccrumBodypart = { label: "Saccrum", icon: <SaccrumGray width="29px" height="29px" /> }
const DatingBodypart = { label: "Dating" }
const NTBodypart = { label: "NT" }
const StructuralBodypart = { label: "Structural" }
const MorphologyBodypart = { label: "Morphology" }
const GrowthBodypart = { label: "Growth" }
const Bodypart3D4DBodypart = { label: "3D/4D" }
const HeartbeatReassuranceBodypart = { label: "Reassurance" }
const FaceBodypart = { label: "Face" }
const NoseBodypart = { label: "Nose" }
const HeadBodypart = { label: "Head" }
const EarsBodypart = { label: "Ears" }
const TemporalBonesBodypart = { label: "Temporal bones", fontSize: "11px", icon: <TemporalBonesGray width="29px" height="29px" /> }
const JawsBodypart = { label: "Jaws", icon: <MandibleGray width="29px" height="29px"></MandibleGray> }
const ChestBodypart = { label: "Chest", icon: <ChestGray width="29px" height="29px" /> }
const AnalBodypart = { label: "Anal" }
const OrbitsBodypart = { label: "Orbits" }
const InjectionBodypart = { label: "Injection" }
const AspirationBodypart = { label: "Aspiration" }
const CortisoneBodypart = { label: "Cortisone" }
const EpiduralBodypart = { label: "Epidural" }
const BiopsyBodypart = { label: "Biopsy" }
const BrainBodypart = { label: "Brain" }
const PetrousTemporalBoneBodypart = { label: "Petrous Temporal Bone", fontSize: "13px" }
const SinusesBodypart = { label: "Sinuses" }
const ChestAbdomenPelvisBodypart = { label: "Chest, Abdomen & Pelvis (CAP)", fontSize: "13px" }
const LungsBodypart = { label: "Lungs" }
const SoftTissueBodypart = { label: "Soft tissue" }
const NeckBodypart = { label: "Neck", icon: <NeckGray width="29px" height="29px" /> }
const ThyroidBodypart = { label: "Thyroid" }
const CompleteBodypart = { label: "Complete" }
const CoronaryAngiogramBodypart = { label: "Coronary Angiogram", fontSize: "13px" }
const PulmonaryAngiogramBodypart = { label: "Pulmonary Angiogram", fontSize: "15px" }
const CalciumScoreBodypart = { label: "Calcium Score", icon: <CalciumScore></CalciumScore> }
const VenogramBodypart = { label: "Venogram" }
const PituitaryGlandBodypart = { label: "Pituitary Gland", fontSize: "13px" }
const SkullBodypart = { label: "skull" }
const CardiacBodypart = { label: "CTCA/Coronary Angiogram" }
const RectumBodypart = { label: "Rectum" }
const MRCPBodypart = { label: "MRCP" }
const BranchialPlexusBodypart = { label: "Branchial Plexus", fontSize: "13px" }
const BowelBodypart = { label: "Bowel" }
const DynamicPelvisBodypart = { label: "Dynamic Pelvis", fontSize: "13px" }
const CompleteSpineBodypart = { label: "Complete Spine", fontSize: "13px" }
const NerveBodyPart = { label: "Nerve" }
const RibBodypart = { label: "Rib" }
const TeethBodypart = { label: "Teeth" }
const OPGBodypart = { label: "OPG" }
const LateralCephBodypart = { label: "Lateral Ceph" }
const BoneMineralDensitometryBodypart = { label: "Bone Mineral Densitometry", fontSize: "12px" }
const DexaBodypart = { label: "Dexa" }
const BodyCompositionBodypart = { label: "Body Composition", fontSize: "13px" }
const BoneDensityBodypart = { label: "Bone Density", fontSize: "13px" }
const ConebeamCTBodypart = { label: "Conebeam CT", fontSize: "13px" }
const CTJawBodypart = { label: "CT Jaw", fontSize: "13px" }
const CTMouthBodypart = { label: "CT Mouth", fontSize: "13px" }
const CTTeethBodypart = { label: "CT Teeth", fontSize: "13px" }
const FacialBonesBodypart = { label: "Facial Bones", fontSize: "15px" }
const NeckSoftTissueBodypart = { label: "Neck/Soft Tissue", fontSize: "14px" }
const FullSpineBodypart = { label: "Full Spine" }
const ArmBodypart = { label: "Arm", options: ["Left Arm", "Right Arm", "Both Arms"] }
const ColonoscopyBodypart = { label: "Colonoscopy" }
const HeelBodypart = { label: "Heel" }
const UpperLegBodypart = { label: "Upper Leg", options: ["Left Upper Leg", "Right Upper Leg", "Both Upper Legs"] }
// region US
const US_Head_Neck_Scans = [
    HeadBodypart,
    NeckSoftTissueBodypart,
    ThyroidBodypart
];

const US_Female_Specific_Parts = [
    PregnancyBodypart
];

const US_Male_Specific_Parts = [
    ProstateBodypart,
    ScrotumBodypart,
    TestesBodypart
];

const US_Hand_Shoulder_Scans = [
    ElbowBodypart,
    FingerBodypart,
    HandBodypart,
    ShoulderBodypart,
    WristBodypart
];

const US_Abdomen_Pelvis_Scans = [
    AbdomenBodypart,
    AbdomenPelvisBodypart,
    GallbladderBodypart,
    HipBodypart,
    LiverBodypart,
    PelvisBodypart,
    RenalBodypart
];

const US_Urinary_Scans = [
    BladderBodypart,
    KUBBodypart,
    KidneyBodypart
];

const US_Leg_Scans = [
    AnkleBodypart,
    LowerLegDopplerBodypart,
    DVTBodypart,
    FootBodypart,
    KneeBodypart,
    LegBodypart,
    ToeBodypart
];

const US_Procedures = [
    BiopsyBodypart,
    InjectionBodypart
];

const US_Breast_Scans = [
    LeftBreastBodypart,
    RightBreastBodypart,
    BothBreastBodypart
];



export const US_GROUPED_PARTS = [
    { groupName: "Head/Neck", fields: US_Head_Neck_Scans, icon: <HeadAndNeck width="29px" height="29px" /> },
    { groupName: "Hand/Shoulder", fields: US_Hand_Shoulder_Scans, icon: <ShoulderAndHand width="29px" height="29px" /> },
    { groupName: "Abdomen/Pelvis", fields: US_Abdomen_Pelvis_Scans, icon: <AbdomenGray width="25px" height="30px" /> },
    { groupName: "Urinary", fields: US_Urinary_Scans, icon: <Urinary width="27px" height="27px" /> },
    { groupName: "Leg", fields: US_Leg_Scans, icon: <LegAndFoot width="29px" height="29px" /> },
    { groupName: "Male Scan", fields: US_Male_Specific_Parts, icon: <MaleScan width="29px" height="27px" /> },
    { groupName: "Female Scan", fields: US_Female_Specific_Parts, icon: <FemaleScan width="29px" height="27px" /> },
    { groupName: "Breast Scan", fields: US_Breast_Scans, icon: <Mammo width="24px" height="24px" /> },
    { groupName: "Injection/Biopsy", fields: US_Procedures, icon: <Procedures width="25px" height="25px" /> }
];



// engregion
const CT_Head_Neck_Scans = [
    HeadBodypart,
    FacialBonesBodypart,
    SinusesBodypart,
    NeckSoftTissueBodypart,
];

const CT_Chest_Heart_Scans = [
    ChestBodypart,
    CalciumScoreBodypart,
    CardiacBodypart,
    LungsBodypart,
    PulmonaryAngiogramBodypart,
    ChestAbdomenPelvisBodypart
];

const CT_Hand_Shoulder_Scans = [
    ShoulderBodypart,
    ElbowBodypart,
    HandBodypart,
    WristBodypart,
    FingerBodypart
];

const CT_Spine_Scans = [
    CervicalSpineBodypart,
    ThoracicSpineBodypart,
    LumbarSpineBodypart,
    CoccyxBodypart,
    LumbosacralSpineBodypart,
    FullSpineBodypart
];

const CT_Abdomen_Pelvis_Scans = [
    AbdomenBodypart,
    PelvisBodypart,
    AbdomenPelvisBodypart,
    ChestAbdomenPelvisBodypart,
    KUBBodypart,
    ColonoscopyBodypart
];

const CT_Leg_Lower_Scans = [
    HipBodypart,
    AnkleBodypart,
    KneeBodypart,
    FootBodypart
];


export const CT_GROUPED_PARTS = [
    { groupName: "Head/Neck", fields: CT_Head_Neck_Scans, icon: <HeadAndNeck width="29px" height="29px" /> },
    { groupName: "Chest/Cardiac", fields: CT_Chest_Heart_Scans, icon: <ChestAndCardiac width="29px" height="29px" /> },
    { groupName: "Hand/Shoulder", fields: CT_Hand_Shoulder_Scans, icon: <ShoulderAndHand width="29px" height="29px" /> },
    { groupName: "Spine", fields: CT_Spine_Scans, icon: <LSpineGray width="29px" height="29px" /> },
    { groupName: "Abdomen/Pelvis", fields: CT_Abdomen_Pelvis_Scans, icon: <AbdomenGray width="25px" height="30px" /> },
    { groupName: "Lower Part", fields: CT_Leg_Lower_Scans, icon: <LegAndFoot width="29px" height="29px" /> },
];




const XRAY_Head_Face_Scans = [
    HeadBodypart,
    FaceBodypart,
    TeethBodypart
];

const XRAY_Hand_Shoulder_Scans = [
    ArmBodypart,
    ElbowBodypart,
    HandBodypart,
    ShoulderBodypart,
    WristBodypart
];

const XRAY_Chest_Scans = [
    ChestBodypart
];

const XRAY_Abdomen_Pelvis_Scans = [
    AbdomenBodypart,
    PelvisBodypart,
    AbdomenPelvisBodypart,
    HipBodypart
];

const XRAY_Spine_Scans = [
    CervicalSpineBodypart,
    ThoracicSpineBodypart,
    LumbarSpineBodypart,
    LumbosacralSpineBodypart,
    FullSpineBodypart
];

const XRAY_Lowerpart_Scans = [
    AnkleBodypart,
    FootBodypart,
    KneeBodypart,
    UpperLegBodypart,
    LegBodypart,
    ToeBodypart,
    HeelBodypart
];


export const XRAY_GROUPED_PARTS = [
    { groupName: "Head/Neck", fields: XRAY_Head_Face_Scans, icon: <HeadAndNeck width="29px" height="29px" /> },
    { groupName: "Hand/Shoulder", fields: XRAY_Hand_Shoulder_Scans, icon: <ShoulderAndHand width="29px" height="29px" /> },
    { groupName: "Chest/Cardiac", fields: XRAY_Chest_Scans, icon: <ChestAndCardiac width="29px" height="29px" /> },
    { groupName: "Abdomen/Pelvis", fields: XRAY_Abdomen_Pelvis_Scans, icon: <AbdomenGray width="25px" height="30px" /> },
    { groupName: "Spine", fields: XRAY_Spine_Scans, icon: <LSpineGray width="29px" height="29px" /> },
    { groupName: "Lower Part", fields: XRAY_Lowerpart_Scans, icon: <LegAndFoot width="29px" height="29px" /> }
];



const OPG_scans = [TeethBodypart, LateralCephBodypart]
export const OPG_GROUPED_PARTS = [
    { groupName: "OPG", fields: OPG_scans }
]


const BMD_scans = [BoneMineralDensitometryBodypart, DexaBodypart, BodyCompositionBodypart, BoneDensityBodypart]
export const BMD_GROUPED_PARTS = [
    { groupName: "BMD", fields: BMD_scans }
]

const CBCT_scans = [ConebeamCTBodypart, CTJawBodypart, CTMouthBodypart, CTTeethBodypart]
export const CBCT_GROUPED_PARTS = [
    { groupName: "BMD", fields: CBCT_scans }
]



const CR_Head_Scans = [
    { label: "Head", icon: <HeadGray width="29px" height="29px" /> },
    { label: "Face", icon: <FaceGray width="29px" height="29px" /> },
    { label: "Teeth", icon: <OPGIcon width="29px" height="29px" /> },

];



const CR_Hand_Scans = [
    { label: "Arm", icon: <UpperArmGray width="29px" height="29px" /> },
    { label: "Elbow", icon: <ElbowGray width="29px" height="29px" /> },
    { label: "Hand", icon: <HandGray width="29px" height="29px" /> },
    { label: "Shoulder", icon: <ShoulderGray width="29px" height="29px" /> },
    { label: "Wrist", icon: <WristGray width="29px" height="29px" /> },

];

const CR_Chest_Scans = [
    { label: "Chest", icon: <ChestGray width="29px" height="29px" /> },
];

const CR_Abdomen_Scans = [
    { label: "Abdomen", icon: <AbdomenGray width="25px" height="30px" /> },
    { label: "Pelvis", icon: <PelvisGray width="25px" height="30px" /> },
    { label: "Abdomen & Pelvis", fontSize: "13px" },
    { label: "Hip" },
];

const CR_Spine_Scans = [
    { label: "Cervical Spine" },
    { label: "Thoracic Spine" },
    { label: "Lumbar Spine", icon: <LSpineGray width="29px" height="29px" />, fontSize: "13px" },
    { label: "Lumbosacral Spine", fontSize: "13px" },
    {
        label: "Full Spine",
        icon: <FullSpineGray width="29px" height="29px" />,
    },
];
const CR_Leg_Scans = [
    { label: "Ankle", icon: <AnkleGray width="29px" height="29px" /> },
    { label: "Foot", icon: <FootGray width="29px" height="29px" /> },
    { label: "Knee", icon: <KneeGray width="29px" height="29px" /> },
    { label: "Leg", icon: <LegGray width="29px" height="29px" /> },
    { label: "Toe", icon: <ToeGray width="29px" height="29px" /> },
];


// -------------

export const CR_GROUPED_PARTS = [
    { groupName: "Head/Face", fields: CR_Head_Scans },
    { groupName: "Hand/Shoulder", fields: CR_Hand_Scans, icon: <ShoulderAndHand width="29px" height="29px" /> },
    { groupName: "Chest", fields: CR_Chest_Scans },
    { groupName: "Abdomen/Pelvis", fields: CR_Abdomen_Scans, icon: <AbdomenGray width="25px" height="30px" /> },
    { groupName: "Spine", fields: CR_Spine_Scans },
    { groupName: "Lower body", fields: CR_Leg_Scans },
];




const MRI_Head_Face_Scans = [
    BrainBodypart,
    HeadBodypart,
    NeckBodypart,
];

const MRI_Hand_Shoulder_Scans = [
    ArmBodypart,
    ElbowBodypart,
    FingerBodypart,
    HandBodypart,
    ShoulderBodypart,
    WristBodypart
];

const MRI_Chest_Scans = [
    ChestBodypart
];

const MRI_Abdomen_Pelvis_Scans = [
    AbdomenBodypart,
    PelvisBodypart,
    AbdomenPelvisBodypart,
    GroinBodypart,
    HipBodypart
];

const MRI_Spine_Scans = [
    CervicalSpineBodypart,
    ThoracicSpineBodypart,
    LumbarSpineBodypart,
    LumbosacralSpineBodypart,
    FullSpineBodypart
];

const MRI_Lowerpart_Scans = [
    AnkleBodypart,
    FootBodypart,
    KneeBodypart,
    UpperLegBodypart,
    LegBodypart,
    ToeBodypart
];



export const MRI_GROUPED_PARTS = [
    { groupName: "Head/Neck", fields: MRI_Head_Face_Scans, icon: <HeadAndNeck width="29px" height="29px" /> },
    { groupName: "Hand/Shoulder", fields: MRI_Hand_Shoulder_Scans, icon: <ShoulderAndHand width="29px" height="29px" /> },
    { groupName: "Chest/Cardiac", fields: MRI_Chest_Scans, icon: <ChestAndCardiac width="29px" height="29px" /> },
    { groupName: "Abdomen/Pelvis", fields: MRI_Abdomen_Pelvis_Scans, icon: <AbdomenGray width="25px" height="30px" /> },
    { groupName: "Spine", fields: MRI_Spine_Scans, icon: <LSpineGray width="29px" height="29px" /> },
    { groupName: "Lower Part", fields: MRI_Lowerpart_Scans, icon: <LegAndFoot width="29px" height="29px" /> }
];










// const MRI_Head_Scans = [
//     BrainBodypart,
//     PituitaryGlandBodypart,
//     SkullBodypart
// ];

// const MRI_General_Scans = [
//     BreastBodypart,
//     CardiacBodypart,
//     ChestBodypart,
//     MRCPBodypart,
//     ProstateBodypart,
//     RectumBodypart
// ];

// const MRI_MSK_Scans = [
//     AnkleBodypart,
//     ButtockBodypart,
//     ClavicleBodypart,
//     ElbowBodypart,
//     FingerBodypart,
//     FootBodypart,
//     ForearmBodypart,
//     GroinBodypart,
//     HandBodypart,
//     HipBodypart,
//     KneeBodypart,
//     LegBodypart,
//     MassBodypart,
//     ShoulderBodypart,
//     ThighBodypart,
//     ToeBodypart,
//     UpperArmBodypart,
//     WristBodypart
// ];

// const MRI_Abdomen_Scans = [
//     AbdomenBodypart,
//     AbdomenPelvisBodypart,
//     AbdominalWallBodypart,
//     BranchialPlexusBodypart,
//     BowelBodypart,
//     DynamicPelvisBodypart,
//     GallbladderBodypart,
//     PelvisBodypart,
//     UpperAbdomenBodypart
// ];

// const MRI_Urinary_Scans = [
//     BladderBodypart,
//     KUBBodypart,
//     KidneyBodypart
// ];

// const MRI_Leg_Scans = [
//     DVTBodypart,
//     LowerLegDopplerBodypart
// ];

// const MRI_Spine_Scans = [
//     CervicalSpineBodypart,
//     CoccyxBodypart,
//     CompleteSpineBodypart,
//     LumbarSpineBodypart,
//     LumbosacralSpineBodypart,
//     SaccrumBodypart,
//     ThoracicSpineBodypart
// ];

// const MRI_Others = [
//     AnalBodypart,
//     ChestBodypart,
//     EarsBodypart,
//     FaceBodypart,
//     HeadBodypart,
//     JawsBodypart,
//     NerveBodyPart,
//     NoseBodypart,
//     OrbitsBodypart,
//     TemporalBonesBodypart
// ];

// const MRI_Procedures = [
//     AspirationBodypart,
//     BiopsyBodypart,
//     CortisoneBodypart,
//     EpiduralBodypart,
//     InjectionBodypart
// ];



// export const MRI_GROUPED_PARTS = [
//     { groupName: "Head/Neck", fields: MRI_Head_Scans, icon: <HeadAndNeck width="29px" height="29px" /> },
//     { groupName: "General", fields: MRI_General_Scans },
//     { groupName: "MSK", fields: MRI_MSK_Scans },
//     { groupName: "Abdomen/Pelvis", fields: MRI_Abdomen_Scans , icon: <AbdomenGray width="25px" height="30px" /> },
//     { groupName: "Urinary", fields: MRI_Urinary_Scans },
//     { groupName: "Leg", fields: MRI_Leg_Scans },
//     { groupName: "Spine", fields: MRI_Spine_Scans, icon: <LSpineGray width="29px" height="29px" /> },
//     { groupName: "Procedures", fields: MRI_Procedures },
// ];


