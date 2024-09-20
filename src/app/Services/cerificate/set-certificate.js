import {
  sortCertificateToo,
  sortCertificateCloud,
  sortCertificateDevops,
  sortcertificateSoftwareArchitecture,
  sortCertificateOthers,
  sortCertificateSkills,
  sortCertificateLanguages,
  sortCertificateIotAi,
  dataAllTotal,
  dataAllTotalSort,
} from "../../Services/cerificate/data-calculation";

import { certificateToo } from "../../database/certificate/certificateToo";
import { certificateCloud } from "../../database/certificate/certificateCloud";
import { certificateDevOps } from "../../database/certificate/certificateDevOps";
import { certificateSoftwareArchitecture } from "../../database/certificate/certificateSoftwareArchitecture";
import { certificateOthers } from "../../database/certificate/certificateOthers";
import { certificateSkills } from "../../database/certificate/certificateSkills";
import { certificateLanguages } from "../../database/certificate/certificateLanguages";
import { certificateIotAi } from "../../database/certificate/certificateIotAi";

export const setCertificateFromSelect = (
  selectlatestRelevance,
  selectcertificate
) => {
  if (selectlatestRelevance === "latest")
    return setCertificatelatest(selectcertificate);
  else if (selectlatestRelevance === "relevance")
    return setCertificateRelevance(selectcertificate);
};

const setCertificatelatest = (selectcertificate) => {
  if (selectcertificate === "certificateToo") return sortCertificateToo;
  else if (selectcertificate === "certificateCloud")
    return sortCertificateCloud;
  else if (selectcertificate === "certificateDevOps")
    return sortCertificateDevops;
  else if (selectcertificate === "certificateSoftwareArchitecture")
    return sortcertificateSoftwareArchitecture;
  else if (selectcertificate === "certificateOthers")
    return sortCertificateOthers;
  else if (selectcertificate === "certificateSkills")
    return sortCertificateSkills;
  else if (selectcertificate === "certificateLanguages")
    return sortCertificateLanguages;
  else if (selectcertificate === "certificateIotAi")
    return sortCertificateIotAi;
  else if (selectcertificate === "All") return dataAllTotalSort;
};

const setCertificateRelevance = (selectcertificate) => {
  if (selectcertificate === "certificateToo") return certificateToo;
  else if (selectcertificate === "certificateCloud") return certificateCloud;
  else if (selectcertificate === "certificateDevOps") return certificateDevOps;
  else if (selectcertificate === "certificateSoftwareArchitecture")
    return certificateSoftwareArchitecture;
  else if (selectcertificate === "certificateOthers") return certificateOthers;
  else if (selectcertificate === "certificateSkills") return certificateSkills;
  else if (selectcertificate === "certificateLanguages")
    return certificateLanguages;
  else if (selectcertificate === "certificateIotAi") return certificateIotAi;
  else if (selectcertificate === "All") return dataAllTotal;
};
