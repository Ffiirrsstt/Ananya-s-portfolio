import { certificateToo } from "../../database/certificate/certificateToo";
import { certificateCloud } from "../../database/certificate/certificateCloud";
import { certificateDevOps } from "../../database/certificate/certificateDevOps";
import { certificateSoftwareArchitecture } from "../../database/certificate/certificateSoftwareArchitecture";
import { certificateOthers } from "../../database/certificate/certificateOthers";
import { certificateSkills } from "../../database/certificate/certificateSkills";
import { certificateLanguages } from "../../database/certificate/certificateLanguages";
import { certificateIotAi } from "../../database/certificate/certificateIotAi";

const certificate_Too = certificateToo.map((data) => ({
  ...data,
  dateObject: new Date(data.date),
}));
const certificate_Cloud = certificateCloud.map((data) => ({
  ...data,
  dateObject: new Date(data.date),
}));
const certificate_DevOps = certificateDevOps.map((data) => ({
  ...data,
  dateObject: new Date(data.date),
}));
const certificate_SoftwareArchitecture = certificateSoftwareArchitecture.map(
  (data) => ({
    ...data,
    dateObject: new Date(data.date),
  })
);
const certificate_Others = certificateOthers.map((data) => ({
  ...data,
  dateObject: new Date(data.date),
}));
const certificate_Skills = certificateSkills.map((data) => ({
  ...data,
  dateObject: new Date(data.date),
}));
const certificate_Languages = certificateLanguages.map((data) => ({
  ...data,
  dateObject: new Date(data.date),
}));
const certificate_IotAi = certificateIotAi.map((data) => ({
  ...data,
  dateObject: new Date(data.date),
}));

const dataAll = [
  ...certificate_Too,
  ...certificate_Cloud,
  ...certificate_DevOps,
  ...certificate_SoftwareArchitecture,
  ...certificate_Others,
  ...certificate_Skills,
  ...certificate_Languages,
];

export const dataAllTotal = [...dataAll, ...certificate_IotAi];

const sortData = (data) => data.sort((a, b) => a.dateObject - b.dateObject);

//ไว้สำหรับแสดงใบ certificate ที่เรียงลำดับตามความล่าสุดเรียบร้อยแล้ว
export const sortCertificateToo = sortData(certificate_Too).reverse();
export const sortCertificateCloud = sortData(certificate_Cloud).reverse();
export const sortCertificateDevops = sortData(certificate_DevOps).reverse();
export const sortcertificateSoftwareArchitecture = sortData(
  certificate_SoftwareArchitecture
).reverse();
export const sortCertificateOthers = sortData(certificate_Others).reverse();
export const sortCertificateSkills = sortData(certificate_Skills).reverse();
export const sortCertificateLanguages = sortData(
  certificate_Languages
).reverse();
export const sortCertificateIotAi = sortData(certificate_IotAi).reverse();

//ทำข้อมูลสำหรับแสดงใบเซอร์ทั้งหมดเ แบบเรียงลำดับตามวันที่จากล่าสุด(ไปแสดง)
const dataAllSort = sortData(dataAll);
export const dataAllTotalSort = [
  ...dataAllSort.reverse(),
  ...sortCertificateIotAi,
];
