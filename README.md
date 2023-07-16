# ComDash <img width ="30" height="30" src="https://user-images.githubusercontent.com/69076784/236990283-83859a95-c9fa-4d2a-8729-4afb3900789d.png">

###### An All In One Web based Dashboard For News, Weathers and More...

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Epicalable/ComDash) [![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](https://github.com/Epicalable/ComDash) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Epicalable/ComDash/issues)

 **This Program Is CPU-Intensive Please Make Sure That You're Using A Mid To High Range PC.**  
 
<img width="250" src="https://github.com/Epicalable/ComDash/assets/69076784/e61ae01e-2055-45dc-a64a-b4c0098f014b"> <img width="250" src="https://github.com/Epicalable/ComDash/assets/69076784/0da0ea8a-4884-4b69-9fd4-1e668bed189b"> <img width="250" src="https://github.com/Epicalable/ComDash/assets/69076784/8428a947-ed1d-4aff-9910-7929fc4ca041">


## Table Of Contents
- [What's New?](#whats-new)
- [Introduction to ComDash](#introduction-to-comdash)
- [Running ComDash](#running-comdash)
- [What APIs Should I Subscribe To?](#what-apis-should-i-subscribe-to)
  * [Where Do I Paste The APIs?](#where-do-i-paste-the-apis)
- [Other Functions Available](#other-functions-available)
- [Issues](#issues)
- [License](#license)


## What's New?
Here at Epicalable we are committed in keeping ComDash up-to-date and up-to-speed with the growing tech solutions and algorithms. Hence this new commit includes:
```
ComDash Updates In This Commit:-
Update Highlights:-
1. New Taskbar!!!
   1a. New Refurbished Taskbar Icons.
   1b. Access the Settings page to easily edit API Keys and your 
       locations for ComDash to retrieve necessary data.
   1c. New About-us button to link our GitHub profile.
2. Added Buttons in settings to better help first users.
3. New Buttons in links-card to Reddit and Instagram.
4. Some backend code improvements. 
5. Revamped Readme images.

Note to stakeholders:
We are currently taking a brake from almost doing commits daily 
but do not worry as we have decided to add a whole set of 
new features first and then push out the commit for you to test them out.
Also now we will be able to take our time and develop other Epicalable projects

Code Checks Manifest:-
All Checks Status: ✅
-----------------------------------------
BackEnd Code Integrity Checks: ✅
FrontEnd UI Stability Checks: ✅
UX (User Experience) Checks: ✅
BackEnd Code-FrontEnd UI Integration Checks: ✅
(All evaluations are done by the R&D Department)

Last Updated: 16-July-2023 15:35HRS (Singapore Standard Time)
Publisher: Epicalable
```
Keep up-to-date with what's happening on this repository by clicking the 'Star' and 'Watch' button on the top right corner of this webpage.


## Introducing ComDash
Last year our startup announced Comdash: an all-in-one web-based Dashboard to get essential day-to-day information for users built using Html5 for frontend structure, CSS3 for webpage styling and JavaScript for background infomation retreival processes.  
So what does ComDash do? Well ComDash can retrieve news, weather, tasks and some more cool features coming soon.

ComDash is currently still under development so stay tuned to latest updates and 'star' and 'watch' this repository. 


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

3. https://unsplash.com/developers : For ComDash to get background wallpaper on different cities based on which city's weather users want to fetch. (Users do not need to subscribe to this as there is no api key and it's already bundeled into the code for you.)

   #### Where Do I Paste The APIs?
   <img width="100" src="https://github.com/Epicalable/ComDash/assets/69076784/293cbb2e-96f9-4dc7-97c1-8d02be0d1256">

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

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/Epicalable/)
[![ForTheBadge built-by-developers](http://ForTheBadge.com/images/badges/built-by-developers.svg)](https://github.com/MahaMohan/)

[![ForTheBadge uses-git](http://ForTheBadge.com/images/badges/uses-git.svg)](https://GitHub.com/) 
[![ForTheBadge makes-people-smile](http://ForTheBadge.com/images/badges/makes-people-smile.svg)](https://github.com/Epicalable/)

ComDash Copyright (C) Epicalable 2023  
All Rights Reserved