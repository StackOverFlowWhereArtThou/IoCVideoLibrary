# IoC Video Library
Inversion of Control Library example: a simple service for accessing videos from a video repository that uses dependency injections to decouple the video service from its dependencies

**Advantages of DI construction:**
1. Decoupleing of Code from specific modules
    - Applying SOLID design principles, particularly DSP, requires programming to an interface as opposed to an implementation of code
    - Creates flexibility to modify our dependencies without updating our entire service module
2. Testablility
    - Removes the need to mock-up / stub dependencies in testing 

## Key Features
- Video Controller Can add view all video in our codebase
- Full test coverage of code

## Future features to add
1. Combatibility with other data structures such as functions