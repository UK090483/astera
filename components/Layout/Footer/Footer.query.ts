import { localizedQueryFn } from "PageBuilder/helper/withLocalization";

export const footerQuery: localizedQueryFn = (locale) => `
'footer':{

    ...(*[_id == 'baseConfig'][0]{address,addressLink,emailAddress,phoneNumber,linkedInLink}),
}
`;

export type footerResult = {
  footer?: {
    address?: string;
    addressLink?: string;
    emailAddress?: string;
    phoneNumber?: string;
    linkedInLink?: string;
  };
};
