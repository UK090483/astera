export const downloadQuery = `
_type=='download'=>{
    _type,
    _key,
    description,
    ...coalesce(file.asset,image.asset)->{url,extension},
},
`;

export type downloadQueryResult = {
  description?: any;
  extension?: string | null;
  url?: string;
};
