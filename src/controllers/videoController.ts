import {IVideoRepo} from '../components/videoRepo'

export class VideoController {
    private videoRepo: IVideoRepo

    constructor(videoRepo: IVideoRepo){
        this.videoRepo = videoRepo;
    }

    // handles retrieval of videos from the video Repo interface
    async handleGetVideos(req, res): Promise<void>{
        const videos = await this.videoRepo.findVideos();
        return res.status(200).json({videos})
    }
}