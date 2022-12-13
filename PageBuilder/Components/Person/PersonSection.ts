import { ObjectDefinition } from "PageBuilder/types";
import sectionTitle from "../sectionTitle";

const personSectionSchema: ObjectDefinition = {
  name: "personSection",
  title: "Person Section",
  type: "object",
  description: "auto section",

  fields: [sectionTitle({ initialValue: "Person Section" })],
};

export default personSectionSchema;
