// This is the main service module

const Video = require('./Video');
const VideoRepository = require('./VideoRepository')

async function getVideos(){
    return await VideoRepository.findAll();
}

async function addVideo(videoData){
    const video = new Video(videoData)

    return VideoRepository.addVideo(video)
} 


module.exports = {
    getVideos,
    addVideo
}