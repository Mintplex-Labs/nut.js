import { ImageWriter, ImageWriterParameters } from "@mintplex-labs/nut-js-provider-interfaces";
import { imageToJimp } from "@mintplex-labs/nut-js-shared";

export default class implements ImageWriter {
  store(parameters: ImageWriterParameters): Promise<void> {
    return new Promise((resolve, reject) => {
      const jimpImage = imageToJimp(parameters.image);
      jimpImage
        .writeAsync(parameters.path)
        .then((_) => resolve())
        .catch((err) => reject(err));
    });
  }
}
