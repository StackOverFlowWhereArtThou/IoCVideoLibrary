# IoC Video Library
Inversion of Control Library example: a simple video controller for accessing videos from a video repository in a Node.js environment. Rather than directly calling the video repository, the videoController calls an interface that can call upon the video repository.

**Advantages of Dependency Injection:**
1. Decoupleing of Code from specific modules
    - Applying SOLID design principles, particularly DSP, requires programming to an interface as opposed to an implementation of code
    - Creates flexibility to modify our dependencies without updating our entire service module
2. Testablility
    - Removes the need to mock-up / stub dependencies in testing 

## Key Features
- Can add view all video in our codebase
- Full unit test coverage of code for the video controller

## Future features to add
1. Expand CRUD functionality of the video controller
    - Add videos to the video repository
    - Update videos in the video repository
    - Delete videos from the video repository
2. Implement an IoC Container
    - Use a container such as InversifyJS to manage dependencies in a more scalable manner