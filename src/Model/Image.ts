import AspectRatio from "./Enums/AspectRatio";
import ImageInterface from "./Interfaces/ImageInterface";
import oneOf from "./Validator/OneOf";

class Image implements ImageInterface {
  public apectRatio: AspectRatio;
  public title: string;
  public size: number;

  @oneOf(['jpg', 'jpeg', 'png'])
  public extension: string;

  constructor(data: ImageInterface) {
    this.apectRatio = data.apectRatio;
    this.title = data.title;
    this.extension = data.extension;
    this.size = data.size;
  }
}

export default Image;
