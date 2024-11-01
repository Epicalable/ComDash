# ComDash <img width ="30" height="30" src="https://user-images.githubusercontent.com/69076784/236990283-83859a95-c9fa-4d2a-8729-4afb3900789d.png">

###### An All In One Web based Dashboard For News, Weathers and More...

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Epicalable/ComDash) [![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](https://github.com/Epicalable/ComDash) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Epicalable/ComDash/issues)

**This Program Is CPU-Intensive Please Make Sure That You're Using A Mid To High Range PC.**  
 
<img width="250" src="https://github.com/Epicalable/ComDash/assets/69076784/e61ae01e-2055-45dc-a64a-b4c0098f014b"><img width="250" src="https://github.com/Epicalable/ComDash/assets/69076784/0da0ea8a-4884-4b69-9fd4-1e668bed189b"><img width="250" src="https://github.com/Epicalable/ComDash/assets/69076784/6089c530-e6e3-4883-8eb2-1092de784677">


## Table Of Contents
- [What's New?](#whats-new)
- [Running ComDash On Your Computer](#running-comdash-on-your-local-computer)
- [Introduction to ComDash](#introduction-to-comdash)
- [Running ComDash](#running-comdash)
- [What APIs Should I Subscribe To?](#what-apis-should-i-subscribe-to)
  * [Where Do I Paste The APIs?](#where-do-i-paste-the-apis)
- [Other Functions Available](#other-functions-available)
- [Issues](#issues)
- [License](#license)


## What's New?
Here at Epicalable we are committed in keeping ComDash up-to-date and up-to-speed with the growing tech solutions and algorithms. Hence this new commit includes:

<img width="250" src="https://github.com/user-attachments/assets/6dea592c-11fb-4700-a39d-f5de3de0467d">  

Check Out Our Update Here: https://www.youtube.com/watch?v=tuF0uX9iNqA

```
ComDash Updates In This Commit:-
Update Highlights:-
1. Due to the closure of source.unsplash.com, our team has finally found a way on integrating Unsplash's API. 
   Users would henceforth need to register for an Api key to get images from Unsplash.
2. Country input bar has been removed from the Settings page.
3. News-card has a new look and feel: 
   3a. New drop-down box has been added to select the country and another for News topics.

Code Checks Manifest:-
All Checks Status: ✅
-----------------------------------------
BackEnd Code Integrity Checks: ✅
FrontEnd UI Stability Checks: ✅
UX (User Experience) Checks: ✅
BackEnd Code-FrontEnd UI Integration Checks: ✅
(All evaluations are done by the R&D Department)

Last Updated: 1-November-2024 20:15HRS (Singapore Standard Time)
Publisher: Epicalable
```
Keep up-to-date with what's happening on this repository by clicking the 'Star' and 'Watch' button on the top right corner of this webpage.


## Running ComDash On Your Local Computer
ComDash can be executed as a Web-App by running the html file on a localhost on your computer without hosting it on a web-server online by following these steps:

1. Click on "Start" and go to or search for "Control Panel" and search for "Programs and Features".

2. Open "Programs and Features" and on the left pane click on "Turn Windows Features on or off".

*  Note: You can also search for "Turn Windows Features on or off" on your computer's search-bar for easier access.

3. Scroll down to find "Internet Information Server" and click on the box to enable it to use Localhost functionality on your computer.

4. Place the Comdash folder you've downloaded inside "C:/inetpub/wwwroot" folder located on the C: drive.

5. Now head to your browser and type this in the address bar: "http://127.0.0.1/ComDash/ComDash.html" and the web-application should be up and running properly.

For further reading/referencing: https://gist.github.com/jgravois/5e73b56fa7756fd00b89

## Introducing ComDash
Last year our startup announced Comdash: an all-in-one web-based Dashboard to get essential day-to-day information for users built using Html5 for frontend structure, CSS3 for webpage styling and JavaScript for background infomation retreival processes.  
So what does ComDash do? Well ComDash can retrieve news, weather, tasks and some more cool features coming soon.


## Running ComDash
To run ComDash all you'll need to do is to open the ComDash.html file in your browser.  
Make sure that you are connected to the internet for most of our fuctions to work.  
<img width="100" src="https://github.com/Epicalable/ComDash/assets/69076784/9f0814b1-0703-4dfe-bac1-2b683555e231">  
If you are not connected to the internet you will be shown with this message.  
<img width="100" src="https://github.com/Epicalable/ComDash/assets/69076784/33e0d1fe-3566-4b7e-966f-510631d9656c">  


## What APIs Should I Subscribe To?
Upon opening, by default you can reteive news and weather using pre-existing APIs but if you want it to be personalised then it is best to activate an API. To do that you will need to head to:

1. https://newsapi.org/ : For ComDash To Get Current News Headlines For You And Display In NewsCard.  
    <img width="100" src="https://github.com/Epicalable/ComDash/assets/69076784/b20390a3-5a31-4492-87b7-b0f3e1fbbe36"><img width="100" src="https://github.com/Epicalable/ComDash/assets/69076784/58815274-3355-4dc4-ba62-b6425c953408"><img width="100" src="https://github.com/Epicalable/ComDash/assets/69076784/cb408cb7-a146-4183-8eea-9edbddc593af">

2. https://openweathermap.org/ : For ComDash To Get current Weather information For You And Display In WeatherCard.  
   <img width="100" src="https://github.com/Epicalable/ComDash/assets/69076784/323996c8-f861-41b6-bae6-acaa7640039c"><img width="100" src="https://github.com/Epicalable/ComDash/assets/69076784/4179a4a7-d788-41a7-98fe-228f68709458"><img width="100" src="https://github.com/Epicalable/ComDash/assets/69076784/92b31037-6279-4df3-b5fb-3fbb474b98f8">


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