import { addSeo } from "../../Objects/Seo/Seo.decorator";
import { getEditorField } from "../Base/Editor/editor.field";
import createContentType, { getSlugField } from "../helper";
import { CgWebsite } from "react-icons/cg";

const pageSchema = createContentType({
  name: "page",
  title: "Page",
  //@ts-ignore
  icon: CgWebsite,
  fields: [
    getSlugField(),
    getEditorField([
      { type: "hero" },
      { type: "section" },
      { type: "listing" },
      // { type: "imageGalleryPlug" },
    ]),
  ],
});

export default addSeo(pageSchema);
