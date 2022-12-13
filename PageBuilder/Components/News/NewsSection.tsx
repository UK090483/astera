import { ObjectDefinition } from "PageBuilder/types";
import sectionTitle from "../sectionTitle";

const newsSectionSchema: ObjectDefinition = {
  name: "newsSection",
  title: "News Section",
  type: "object",
  fields: [sectionTitle({ initialValue: "News Section" })],
};

export default newsSectionSchema;
