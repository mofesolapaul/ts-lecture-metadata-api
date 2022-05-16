import VideoInterface, { VideoQuality } from "./Interfaces/VideoInterface";
import oneOf from "./Validator/OneOf";

class Video implements VideoInterface {
  public title: string;
  public size: number;
  public quality: VideoQuality;

  @oneOf(['mp4', 'mov'])
  public extension: string;

  constructor(data: VideoInterface) {
    this.title = data.title;
    this.extension = data.extension;
    this.size = data.size;
    this.quality = data.quality;
  }
}

export default Video;
