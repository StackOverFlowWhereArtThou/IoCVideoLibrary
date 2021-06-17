import {IVideoRepo} from '../components/videoRepo'

// created a mock of the video repo that will not require a connection to a DB
export class MockVideoRepo implements IVideoRepo {
    private videos: Video[] = []

    constructor(){}

    async findVideos(): Promise<Video[]>{
        return this.videos
    }
}