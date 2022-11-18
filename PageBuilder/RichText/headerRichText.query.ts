import { Block } from "../types";
import { localizedQueryFn } from "../helper/withLocalization";

export const headerRichTextQuery: localizedQueryFn = (locale) => `
...,
`;

export type headerRichTextQueryResult = Block[];
