export const config = {
  dataset: process.env.SANITY_PROJECT_DATASET || "",
  projectId: process.env.SANITY_PROJECT_ID || "",
  // useCdn: process.env.NODE_ENV === "production",
  useCdn: true,
  apiVersion: "2021-10-21",
};
