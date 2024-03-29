import clsx from "clsx";
import { PortableTextComponent } from "@portabletext/react";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { videoPlugResult } from "../video.query";
import { useVideoContext, VideoContextWrap } from "./VideoContext";
import Typo from "@components/Typography/Typography";

const VideoPlug: PortableTextComponent<videoPlugResult> = (props) => {
  const { url, urls } = props.value;

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  if (!hasWindow) return null;
  const hasMultiple = urls && urls.length > 1;

  if (url) {
    return (
      <div className={clsx(" mx-auto  mb-6 md:mb-12 w-full sm:w-2/3")}>
        <div className=" aspect-w-16  aspect-h-9 ">
          <ReactPlayer width="100%" height="100%" url={url} light={true} />
        </div>
      </div>
    );
  }

  return (
    <VideoContextWrap>
      <div
        className={clsx(" mx-auto  mb-6 md:mb-12 w-full gap-8", {
          "grid md:grid-cols-2": hasMultiple,
          "sm:w-2/3": !hasMultiple,
        })}
      >
        {urls &&
          urls.map((i) => {
            if (!i.url) return null;
            return (
              <Video
                key={i._key}
                url={i.url}
                id={i._key}
                imageUrl={i.image?.url}
                title={i.title}
              />
            );
          })}
      </div>
    </VideoContextWrap>
  );
};

export default VideoPlug;

const Video: React.FC<{
  url: string;
  id: string;
  imageUrl?: string | null;
  title?: string | null;
}> = (props) => {
  const { url, id, imageUrl, title } = props;

  const { playingVideo, setPlayingVideo } = useVideoContext();

  const _imageUrl = imageUrl ? imageUrl + "?w=1200" : true;

  return (
    <div>
      <div className=" aspect-w-16  aspect-h-9 ">
        <ReactPlayer
          onPlay={() => {
            setPlayingVideo(id);
          }}
          playing={playingVideo === id}
          width="100%"
          height="100%"
          url={url}
          light={_imageUrl}
          pip={true}
        />
      </div>
      {title && (
        <Typo space={false} className={"pt-3"}>
          {title}
        </Typo>
      )}
    </div>
  );
};
