import { ObjectDefinition } from "PageBuilder/types";
import sectionTitle from "../sectionTitle";

const personNavigationSchema: ObjectDefinition = {
  name: "personNavigation",
  title: "Person Navigation",
  type: "object",

  fields: [sectionTitle({ initialValue: "Person Navigation" })],
};

export default personNavigationSchema;
