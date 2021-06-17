class VideoRepository{
    constructor(){
        // object to hold all videos
        // Normally would want this function to call to a DB, but have not included that in the scope of this demo
        this.videoRepo = {};
    }

    // returns all videos in the repo
    findAll(){
        return this.videoRepo
    }

    // adds a video to the repo
    addVideo(video){
        this.videoRepo[video.videoID] = video
    }
}

export default VideoRepository