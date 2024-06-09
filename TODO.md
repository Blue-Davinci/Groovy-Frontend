# Project TODOs

This document outlines the tasks and features that are planned or need to be implemented in the project.

## Scrolling
- My implementation involved saving the scroll position `onDestroy()` and reading it back during `onMount()`
  The issue is, there is a slight animation on the child component before moving back to the parent on navigation.
- A smoother, more in-flow way needs to be used for a more gentle transition.

## CSS
- I am using PICO CSS, which is essentially a lightweight css library with custom CSS
- A refactoring of the CSS should be done.

## Additional Features
- Implement trailers for the movies selected.
- Add personalization in terms of favorites etc
- Implement a user account system... (50%)
- Add thumbnails to the main slider (functionality is there, just have not hooked it up)

## Issues
- There is an issue with the backend not sending emails when operated through a dockerized container.