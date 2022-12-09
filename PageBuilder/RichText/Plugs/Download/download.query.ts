export const downloadQuery = `
_type=='download'=>{
    _type,
    _key,
    "fileURL": coalesce(file.asset->url,image.asset->url)
},
`;

export type downloadQueryResult = {
  description?: any;
  fileURL?: string;
};
