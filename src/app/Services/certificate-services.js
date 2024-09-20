import {
  certificateToo,
  certificateCloud,
  certificateOthers,
  certificateSkills,
  certificateLanguages,
  certificateIotAi,
  sortCertificateToo,
  sortCertificateCloud,
  sortCertificateOthers,
  sortCertificateSkills,
  sortCertificateLanguages,
  sortCertificateIotAi,
  dataAllTotal,
  dataAllTotalSort,
} from "../database/ImportCertificate";

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
  else if (selectcertificate === "certificateOthers") return certificateOthers;
  else if (selectcertificate === "certificateSkills") return certificateSkills;
  else if (selectcertificate === "certificateLanguages")
    return certificateLanguages;
  else if (selectcertificate === "certificateIotAi") return certificateIotAi;
  else if (selectcertificate === "All") return dataAllTotal;
};
