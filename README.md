# ComDash <img width ="30" height="30" src="https://user-images.githubusercontent.com/69076784/236990283-83859a95-c9fa-4d2a-8729-4afb3900789d.png"> + <img width ="30" height="30" src="./src/pages/assets/react.svg">

###### An All In One Web based Dashboard For News, Weathers and More...

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Epicalable/ComDash) [![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](https://github.com/Epicalable/ComDash) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Epicalable/ComDash/issues)

**This Program Is CPU-Intensive Please Make Sure That You're Using A Mid To High Range PC.**

ATTENTION : This codebase has been updated in-line with Project-WrapSpeed (Upgrading of Infrasturcture and Services) for users wishing to go back to the Vanilla Js version head to: [Commit 0b9d90](https://github.com/Epicalable/ComDash/tree/0b9d90cb93b83920100099202fe27f8b99fd7efa)
 
<img width="250" src="https://github.com/user-attachments/assets/eff94a5b-bdc2-4137-835d-3d8b91e85aaf"> <img width="250" src="https://github.com/user-attachments/assets/34af6844-9e7a-4c4d-b1ec-46ad201e10ab">


## Table Of Contents
- [What's New?](#whats-new)
- [Running ComDash On Your Computer](#running-comdash-on-your-local-computer)
- [Introduction to ComDash](#introducing-comdash)
- [Running ComDash](#running-comdash-on-your-local-computer)
- [What APIs Should I Subscribe To?](#what-apis-should-i-subscribe-to)
  * [Where Do I Paste The APIs?](#where-do-i-paste-the-apis)
- [Other Functions Available](#other-functions-available)
- [Issues](#issues)
- [License](#license)


## What's New?
Here at Epicalable we are committed in keeping ComDash up-to-date and up-to-speed with the growing tech solutions and algorithms. Hence this new commit includes:


Check Out Our Update Here: https://www.youtube.com/watch?v=tuF0uX9iNqA

```
ComDash Updates In This Commit:-
Update Highlights:-
1. HUGE UPDATE: Our entire codebase has been re-written with React Js
   in-line with Project-WrapSpeed.
    1a. More features and React native features will soon be added.
2. React Js will be supported till the forseeable future.
3. Users who prefer the Vanilla Js version can head to commit 0b9d90

Code Checks Manifest:-
All Checks Status: ✅
-----------------------------------------
BackEnd Code Integrity Checks: ✅
FrontEnd UI Stability Checks: ✅
UX (User Experience) Checks: ✅
BackEnd Code-FrontEnd UI Integration Checks: ✅
(All evaluations are done by the R&D Department)

Last Updated: 30-March-2025 18:10 HRS (Singapore Standard Time)
Publisher: Epicalable
```
Keep up-to-date with what's happening on this repository by clicking the 'Star' and 'Watch' button on the top right corner of this webpage.


## Running ComDash On Your Local Computer
ComDash can be exectued on you local host by installing node.js and after initializing npm,
Head to pages sub-folder 
```
>>> cd ComDash
>>> cd src
>>> cd pages
```
Then run the following commands in you command line to start your localhost.
```
>>> npm run dev
```

## Introducing ComDash
Last year our startup announced Comdash: an all-in-one web-based Dashboard to get essential day-to-day information for users built using React JS.  
ComDash can retrieve news, weather, tasks and some more cool features coming soon.


## What APIs Should I Subscribe To?
Upon opening, by default you can reteive news and weather using pre-existing APIs but if you want it to be personalised then it is best to activate an API. To do that you will need to head to:

1. https://gnews.io/ : For ComDash To Get Current News Headlines For You And Display In NewsCard.  

2. https://openweathermap.org/ : For ComDash To Get current Weather information For You And Display In WeatherCard.


   #### Where Do I Paste The APIs?
   <img width="100" src="https://github.com/Epicalable/ComDash/assets/69076784/a7414655-2c4d-4436-9652-8c659ecb967f">

   For the first 2 websites (NewsAPI and OpenWeatherAPI) once registered you will be provided with an API key, Users should then copy the API key and paste it in the respective input-bars present in the settings page (accessible through the taskbar on the left side).


## Other Functions Available
Apart from APIs to retreive information ComDash also comes with some more functionalities for users to use:-
1. Tasks-Tracker:  
Comdash allows you to track tasks which will be stored on your browser's local storage (Introduced in commit e42da78 ) to prevent erasing the tasks if you exit or reloaad the page.  
   <img width="100" alt="tasks" src="https://github.com/Epicalable/ComDash/assets/69076784/0b99e77f-5ca5-474b-aea2-d594fb5a0282">  
   
2. Calender:  
Comdash has an in-built calander which allows you see what date it is.  
   <img width="100" alt="calender" src="https://github.com/Epicalable/ComDash/assets/69076784/e7dc2077-9a49-436d-9727-a7ae543ef9bc">


## Issues
As this project is still in constant development, if you run into any issues while operating or have any suggestions or features, please feel free to drop by our [issues](https://github.com/Epicalable/ComDash/issues) section and open a issue and we'll respond within 2-4 working days, Thank you for your understanding.


## License
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/Epicalable/)  

IMPORTANT NOTE: Any User who are willing to Share or Re-Distribute ComDash are kindly advised to:

1. A reference to us by keeping a "(C) Epicalable" text in the 'Modified program'.

2. A link to this repository from the user's 'Modified program' README file. 

This will be helpful for us as users will know it's original source and about our startup.
Please also refer to LICENSE file for clarifications.  
Thank you for your kind co-operation :-)

ComDash Copyright (C) Epicalable 2024  
All Rights Reserved

Version 3.0.0