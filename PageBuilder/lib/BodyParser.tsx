import React, { ComponentType } from "react";
import ErrorBoundary from "./next/ErrorBoundary";
import { usePageBuilderContext } from "./PageBuilderContext";

export type BodyParserProps = {
  components: { [k: string]: { component: ComponentType<any> } };
};

const BodyParser: React.FC<BodyParserProps> = ({ components }) => {
  const { data } = usePageBuilderContext();

  const saveBlocks = data?.body;

  return (
    <>
      {saveBlocks &&
        saveBlocks.map((block) => {
          if (components[block._type]) {
            const Component = components[block._type].component;
            return (
              <ErrorBoundary name={block._type} key={block._key}>
                <Component key={block._key} {...block} />
              </ErrorBoundary>
            );
          }

          return (
            <div key={block._key}>
              Component {JSON.stringify(block._type)} is not defined. Add it to
              components.js
            </div>
          );
        })}
    </>
  );
};

export default BodyParser;
