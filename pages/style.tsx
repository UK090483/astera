/* eslint-disable jsx-a11y/alt-text */

import SanityImage from "@components/SanityImage";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
const MarUp = (props: { className?: string }) => {
  return (
    <div className={props.className + " "}>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3> Header 3</h3>
      <h4>Header 4</h4>
      <p>
        <a href="http://localhost:3000/">Lorem ipsum</a> dolor sit amet,
        consectetur adipiscing elit. Curabitur nisi augue, imperdiet ac lectus
        non, aliquet mollis leo. Integer eu eleifend tortor. Duis quis nisi
        vitae turpis convallis iaculis. Vestibulum at diam ac nulla fermentum
        viverra in congue quam. Quisque mattis urna id nisi pharetra, vel
        gravida mi hendrerit. Aenean mattis sem sed purus feugiat sodales. In
        semper nibh sapien, eget mattis tortor mattis ut. Vivamus vel pretium
        leo. Aenean viverra tortor laoreet neque auctor scelerisque. Vivamus
        tortor nisl, molestie ac interdum id, hendrerit mattis urna. Nam sem
        justo, aliquam nec tincidunt quis, viverra et nulla.
      </p>
      <p>
        Donec eu urna vel sapien varius rhoncus et vel ante. Maecenas mollis
        suscipit ipsum ut fringilla. Fusce tortor nisi, sagittis eu erat a,
        scelerisque faucibus massa. Morbi fringilla quis purus id vestibulum.
        Pellentesque fermentum nisi laoreet consectetur viverra. Sed commodo est
        non lorem malesuada efficitur. Sed vestibulum diam id sapien
        ullamcorper, eget tempus odio dignissim.
      </p>

      <blockquote>
        Donec eu urna vel sapien varius rhoncus et vel ante. Maecenas mollis
        suscipit ipsum ut fringilla. Fusce tortor nisi, sagittis eu erat a,
        scelerisque faucibus massa.
      </blockquote>

      <ul>
        <li>
          gravida mi hendrerit. Aenean mattis sem sed purus feugiat sodales. In
          semper nibh sapien, eget mattis tortor mattis ut. Vivamus vel pretium
          leo. Aenean viverra tortor laoreet neque auctor scelerisque. Vivamus
          tortor nisl, molestie ac interdum id, hendrerit mattis urna.
        </li>
        <li>two </li>
        <li>three</li>
        <li>four</li>
      </ul>

      <ol>
        <li>
          gravida mi hendrerit. Aenean mattis sem sed purus feugiat sodales. In
          semper nibh sapien, eget mattis tortor mattis ut. Vivamus vel pretium
          leo. Aenean viverra tortor laoreet neque auctor scelerisque. Vivamus
          tortor nisl, molestie ac interdum id, hendrerit mattis urna.
        </li>
        <li>zwei</li>
        <li>drei</li>
        <li>vier</li>
      </ol>

      <p>
        Donec eu urna vel sapien varius rhoncus et vel ante. Maecenas mollis
        suscipit ipsum ut fringilla. Fusce tortor nisi, sagittis eu erat a,
        scelerisque faucibus massa. Morbi fringilla quis purus id vestibulum.
        Pellentesque fermentum nisi laoreet consectetur viverra. Sed commodo est
        non lorem malesuada efficitur. Sed vestibulum diam id sapien
        ullamcorper, eget tempus odio dignissim.
      </p>
    </div>
  );
};

const Style = () => {
  const src = {
    alt: "ss",
    aspectRatio: 1.5,
    asset: {
      _ref: "image-ed6a157978dd3b47dd433fc4e4ceb7972ffcf02c-6192x4128-jpg",
      _type: "reference",
    },
    crop: null,
    height: 4128,
    hotspot: null,
    lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGAQT/xAAkEAACAQQABQUAAAAAAAAAAAABAwIABAURBgcSIUETIlFxgf/EABcBAAMBAAAAAAAAAAAAAAAAAAACAwT/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AEB5i5CGQXKNhBGPhHXqziSJ/tdF7zDbC4WLhu0tX1SVAb1uneMaeLOH0Yu7itC2xInNUADoHwPFbgOWmKseIi5rGXUVAdEGRGh9/NZ5FFLjrRt/YW9ysARYsH3DvRVP2UBCEQIgaAFFNkG1/9k=",
    url: "https://cdn.sanity.io/images/j3oofl7g/development/ed6a157978dd3b47dd433fc4e4ceb7972ffcf02c-6192x4128.jpg",
    width: 6192,
  };
  return (
    <div className="mt-44 ">
      <SanityImage src={src} width={500} height={500} sizes="200px" />

      <Image alt="test" src={src.url} width={500} height={500} sizes="200px" />

      <MarUp className="prose  mx-auto debug  " />

      <MarUp className="max-w-2xl mx-auto typo typo-spacings typo-sizes typo-weigths " />
      <MarUp className="max-w-2xl mx-auto bg-black typo-invert  typo-spacings typo-sizes typo-weigths  " />
    </div>
  );
};

export default Style;
