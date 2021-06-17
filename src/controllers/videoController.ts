import {IVideoRepo} from '../repos/videoRepo'

export class VideoController {
    private videoRepo: IVideoRepo

    constructor(videoRepo: IVideoRepo){
        this.videoRepo = videoRepo;
    }

    async handleGetVideos(req, res): Promise<void>{
        const videos = await this.videoRepo.findVideos();
        return res.status(200).json({videos})
    }
}