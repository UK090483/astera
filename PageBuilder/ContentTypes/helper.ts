import { Field, DocumentDefinition } from "../types";
import { ImageResult, IMAG_PROJECTION, REMOTE_URL } from "../constants";
import { localizeValue } from "../helper/withLocalization";

export const getSlugField = (props?: { group?: string | false }) => ({
  name: "slug",
  type: "slug",
  title: "Slug",
  description: " ",
  options: {
    source: "title",
  },
  validation: (Rule: any) => [
    Rule.required(),
    Rule.custom((slug: any) => {
      if (!slug) return true;
      if (slug.current.indexOf(" ") >= 0)
        return "no whitespace allowed (use - for binding words)";
      if (slug.current.indexOf("/") >= 0)
        return "no backslashes allowed (use - for binding words)";
      return true;
    }).error(),
  ],
  group: props?.group === false ? undefined : props?.group || "base",
  localize: true,
});

export const getSubTitleField = ({
  group,
  title,
}: {
  group?: string;
  title?: string;
}) => {
  return {
    name: "subTitle",
    type: "string",
    title: title || "Subtitle",
    validation: (Rule: any) => Rule.required(),
    localize: true,
    ...(group ? { group } : {}),
  };
};

type createContentTypeProps = {
  fields: Field[];
  name: string;
  title: string;
};

export type BaseContentTypeResult = {
  title?: string;
  description?: string;
  mainImage?: ImageResult;
};

export const BaseContentTypeProjection = (locale?: string) => `
    ${localizeValue("title", locale)},
    ${localizeValue("description", locale)},
    'mainImage':mainImage{${IMAG_PROJECTION}},
    `;

export const getContentTypeBaseFields = ({ group }: { group?: string }) => [
  {
    name: "title",
    type: "string",
    title: "Title",
    validation: (Rule: any) => Rule.required(),
    localize: true,

    ...(group ? { group } : {}),
  },
  {
    name: "description",
    type: "text",
    title: "Description",
    description: "should be between 50 and 160 characters",
    validation: (Rule: any) => [
      Rule.max(160).warning("should not be more than 160 characters"),
      Rule.min(50).warning("should be at least 50 characters"),
    ],
    localize: true,
    ...(group ? { group } : {}),
  },
  {
    name: "mainImage",
    type: "defaultImage",
    ...(group ? { group } : {}),
  },
];

export function createContentType(
  props: createContentTypeProps
): DocumentDefinition {
  const { name, title, fields = [] } = props;

  const typeSlug = name === "page" ? "" : `${name}/`;
  return {
    ...props,
    type: "document",
    name: name,
    title: title,
    groups: [
      {
        name: "base",
        title: "Base",
        default: true,
      },
      {
        name: "content",
        title: "Content",
      },
    ],
    fields: [...getContentTypeBaseFields({ group: "base" }), ...fields],

    preview: {
      select: {
        media: "mainImage",
        title: "title",
        slug: "slug.current",
      },
      prepare({ media, title, slug }) {
        return {
          title,
          // media: media,
          subtitle: `.../${typeSlug}${slug}`,
        };
      },
    },
  };
}

export default createContentType;

const _if = (condition: boolean | undefined, T: any) => {
  return condition ? [T] : [];
};
