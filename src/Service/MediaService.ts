import Image from "../Model/Image";
import ImageInterface from "../Model/Interfaces/ImageInterface";
import VideoInterface from "../Model/Interfaces/VideoInterface";
import Video from "../Model/Video";

const MediaService = {
  validate(metadata: ImageInterface | VideoInterface): any {
    if ("aspectRatio" in metadata) {
      return new Image(metadata);
    } else if ("quality" in metadata) {
      return new Video(metadata);
    }

    throw new Error("Unrecognized metadata provided");
  },
};

export default MediaService;
