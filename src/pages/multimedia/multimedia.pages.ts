import { Video } from "./video.pages";
import { Audio } from "./audio.pages";
import { Image } from "./image.pages";

export class Multimedia {
	constructor(
		public Video: Video[],
		public Image: Image[],
		public Audio: Audio[],
	){}

getVideo(): Video[]{
	return this.Video;
}

getImage(): Image[]{
	return this.Image;
}


getAudio(): Audio[]{
	return this.Audio;
}

}