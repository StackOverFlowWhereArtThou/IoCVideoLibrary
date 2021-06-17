import {IVideoRepo} from '../repos/videoRepo'

export class MockVideoRepo implements IVideoRepo {
    private videos: Video[] = []

    constructor(){}

    async findVideos(): Promise<Video[]>{
        return this.videos
    }
}