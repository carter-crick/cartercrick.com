This is my new portfolio site. For this site, I'm doing what every large tech company has done...

Learned from TikTok!

-----

I wanted to show previews of my work that are scrollable and allowed for sharing, but I also wanted them to be able to dive deeper into individual works if they are interested.

-----

Most of this site works by using Event handlers and strategic viewport scrolling

----

I have a link in the overview section that links to my technologies.

----

The main page allows the user to click or tap the "See my work button" which scrolls down to the second anchor.

I have fixed position controls and project categories that are unhidden when the user scrolls down to the second anchor.
For videos, these include, Share (which copies a link to the video they are on), and Watch (which directs the user to a new page that has an embedded YouTube video). 
I also have a development button directs to my calculator project. When I have more than one development projects, I plan to add a scrolling feature using iFrames that functions similar to the videos.

If a user wants to scroll back to the top, they just have to click my profile image, which goes to the first anchor.

I used hammer.js to listen for scrolling up and down gestures which are called "pandown" and "panup" respectively.
I have invisible div sections that have a class of section, I use these as anchors to scroll to.
When pandown or panup is caught by the event listener, I use a javascript function to scroll to the previous or next section and change the title to the video it is on (I'm using an array of video titles for this).

The Hammer.js functions didn't work well for destop, so I added arrow buttons that appear on desktop that do the same thing as panup and pandown on mobile

--

I also deployed a function that checks the position in order to play, pause, unmute, and mute based on if the video is in view

--