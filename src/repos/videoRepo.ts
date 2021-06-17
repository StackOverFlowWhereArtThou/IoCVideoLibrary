// class responsible for pulling videos from a database

import Video from '../Video'

export interface IVideoRepo {
    findVideos(): Promise<Video[]>
}

class VideoRepo{
    constructor(){}
    findVideos(): Promise<Video[]> {
        // this should house code to pull videos from a DB, but that is outside scope
    }
}