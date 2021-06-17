import { MockVideoRepo } from '../src/mocks/mock_videoRepo';
import {VideoController} from '../src/controllers/videoController'

let videoController: VideoController;

describe('VideoController Tests', () => {
    const mockResponse = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res
    };

    beforeEach(() => {
        videoController = new VideoController(
            new MockVideoRepo()
        )
    })

    test('Should return 200 status code with an array of empty videos', async () => {
        let res = mockResponse();
        await videoController.handleGetVideos(null, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({videos: []})
    })
})

