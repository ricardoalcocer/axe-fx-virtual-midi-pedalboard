<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  


  <h3 align="center">AxeFx Virutal MIDI Pedalboard</h3>

  <p align="center">
    This repo contains the code for the AxeFx Virutal MIDI Pedalboard
    <br />
    ·
    <a href="https://github.com/ricardoalcocer/axe-fx-virtual-midi-pedalboard/issues">Report Bug</a>
    ·
    <a href="https://github.com/ricardoalcocer/axe-fx-virtual-midi-pedalboard/issues">Request Feature</a>
  </p>

  <div align="center">
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS">
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express JS">
</div>

</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://igenapps.com)

I own an AxeFx Ultra, which I only use in my home studio.  This means two things:

1. I don't have a need for a pedalboard, as I don't use it for live playing
2. I have to spin the wheel every time I want to change a patch, which is really annoying when they are spaced appart

This project implements a simple browser-based interface, which allows you to add your favorite presets in user-defned categories.

Using MIDI, clicking each button will trigger the proper MIDI message and change the preset on your device.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With


* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Some important notes: 

1. This version only works on Mac
1. There is absolutely no error checking or visual feedback in case something is not right
1. It is assumed that your AxeFx is connected to your computer via MIDI 

For the moment, this version is kinda sorta hacky.  You need to install the `Node JS` and launch the server locally.


### Installation

1. Download and install [Node](https://nodejs.org/en/).

1. If you don't have `git` installed on your computer, or if you have no idea of what `git` is, you can go ahead and download the binary file from [https://github.com/ricardoalcocer/axe-fx-virtual-midi-pedalboard/archive/refs/heads/master.zip](https://github.com/ricardoalcocer/axe-fx-virtual-midi-pedalboard/archive/refs/heads/master.zip)
1. Make sure you decompress the Zip file into a folder

1. If you do have `git`, go ahead and Clone the repo
   ```sh
   git clone git@github.com:ricardoalcocer/axe-fx-virtual-midi-pedalboard.git
   ```
1. From your `terminal`, change to downloaded folder
   ```sh
   cd <your-downloaded-file-path>
   ```
1. Launch the server
   ```sh
   node server.js
   ```
1. At this point your termial should read
```
Server is listening on http://localhost:8080
```
1. Open up your browser and navigate to http://localhost:8080

<p align="right">(<a href="#top">back to top</a>)</p>

### Roadmap

1. Deprecate `DHSendMIDI` in favor of `https://github.com/dinchak/node-easymidi`
    - this will eliminate the project's only dependency
    - will make it run faster as it doesn't have to spawn a process for each patch change
2. Build the app as an Electron application
    - This will make it a self-contained application, eliminating the need for
        - manually installing Node
        - manually launching the server

### Contributing

Feel free to send me a [Pull Request](https://github.com/ricardoalcocer/axe-fx-virtual-midi-pedalboard/pulls)

### License

[MIT License](http://alco.mit-license.org)

<!-- CONTACT -->
## Contacts

Ricardo (Alco) Alcocer - [@ricardoalcocer](https://twitter.com/ricardoalcocer) - alco@ricardoalcocer.com

Project Link: [https://github.com/ricardoalcocer/axe-fx-virtual-midi-pedalboard](https://github.com/ricardoalcocer/axe-fx-virtual-midi-pedalboard)

<p align="right">(<a href="#top">back to top</a>)</p>


[product-screenshot]: https://drops.ricardoalcocer.com/drops/axe-fx-virutal-midi-pedalboard-screenshot-jeijM65Ytg.png

