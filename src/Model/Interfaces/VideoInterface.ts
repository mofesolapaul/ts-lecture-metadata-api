import Media from "./Media";

export type VideoQuality = "720p" | "1080p";

interface VideoInterface extends Media {
  quality: VideoQuality;
}

export default VideoInterface;
