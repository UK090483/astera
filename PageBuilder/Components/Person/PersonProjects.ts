import { ObjectDefinition } from "PageBuilder/types";
import sectionTitle from "../sectionTitle";

const personProjectsSchema: ObjectDefinition = {
  name: "personProjects",
  title: "Person Projects",
  type: "object",
  description: "auto section",

  fields: [sectionTitle({ initialValue: "Person Projects" })],
};

export default personProjectsSchema;
