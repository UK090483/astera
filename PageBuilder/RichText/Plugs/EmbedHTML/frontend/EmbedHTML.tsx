import { PortableTextComponent } from "@portabletext/react";

import React from "react";
import { embedQueryResult } from "../embed.query";

const EmbedHTML: PortableTextComponent<embedQueryResult> = (props) => {
  const { value } = props;
  if (!value?.html) return null;
  return (
    <div
      className="flex justify-center overflow-hidden"
      dangerouslySetInnerHTML={{ __html: value?.html }}
    />
  );
};

export default EmbedHTML;
