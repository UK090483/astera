import React from "react";
import { BlockEditor } from "part:@sanity/form-builder";
// From above example

function renderCustomMarkers(markers) {
  return (
    <div>
      {markers.map((marker, index) => {
        if (marker.type === "comment") {
          return <div key={`marker${index}`}>A comment!</div>;
        }
        return null;
      })}
    </div>
  );
}

function ArticleBlockEditor(props) {
  console.log(props);
  const { value, markers } = props;
  const customMarkers = [
    {
      type: "comment",
      path: value && value[0] ? [{ _key: value[0]._key }] : [],
      value: "This must be written better!",
    },
  ];
  const allMarkers = markers.concat(customMarkers); // [...markers, ...customMarkers] works too

  return (
    <BlockEditor
      {...props}
      markers={allMarkers}
      renderCustomMarkers={renderCustomMarkers}
    />
  );
}

export default ArticleBlockEditor;
