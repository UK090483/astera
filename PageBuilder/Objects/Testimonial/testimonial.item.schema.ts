import { ObjectDefinition } from "../../types";
const testimonialItem: ObjectDefinition = {
  name: "testimonialItem",
  title: "Testimonial",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Source",
      name: "source",
      type: "string",
    },
  ],
};

export default testimonialItem;
