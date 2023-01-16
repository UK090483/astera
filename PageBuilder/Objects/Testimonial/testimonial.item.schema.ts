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
      localize: true,
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      localize: true,
    },
    {
      title: "Source",
      name: "source",
      type: "string",
      localize: true,
    },
  ],
};

export default testimonialItem;
