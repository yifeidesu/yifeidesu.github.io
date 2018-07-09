const projects = [];

/************
 * PROJECTS *
 ************/
class Project {

    constructor(name, desc, imageSrc, pageLink, keywords, site, github) {
        this.name = name;
        this.desc = desc;
        this.imageSrc = imageSrc;
        this.pageLink = pageLink;
        this.keywords = keywords;
        this.site = site;
        this.github = github;

        projects.push(this);
    }
}

const favoplacesDesc =
    '-	Features of searching for and commenting on places.</br>' +
    '-	Build server-side with Node.js, Express, RESTful, MongoDB, and Heroku.</br>' +
    '-	Implement map search by integrating with Google Map API.</br>' +
    '-	Implement user authentication and authorization with Passport.js.</br>' +
    '-	Implement responsive front-end with Bootstrap, Pug template and CSS.';
const favoPlaces = new Project(
    'FavoPlaces: Full-Stack Application',
    favoplacesDesc,
    './src/assets/favos.jpg',
    'https://github.com/yifeidesu/favoplaces',
    ['JavaScript', 'jQuery', 'Bootstrap', 'Node.js', 'Express', 'Passport.js', 'MongoDB', 'Heroku', 'Pug', 'Map API'],
    'https://favoplaces.herokuapp.com/',
    'https://github.com/yifeidesu/favoplaces'
);

const coinAppDesc =
    '-	Display real-time BTC price and historical price fluctuation in charts.</br>' +
    '-	Built with React in JavaScript. Page navigation with React Route.</br>' +
    '-	Interact with BTC price API. Make HTTP requests with Axios.</br>' +
    '-	Display historical BTC price fluctuation in line graphs with Chart.js.</br>' +
    '-	Implement responsive design with Bootstrap, HTML and CSS.';
const coinApp = new Project(
    'CoinApp: Single-Page Application',
    coinAppDesc,
    './src/assets/coinapp.png',
    'https://yifeidesu.github.io/coinapp/',
    ['JavaScript', 'Node.js', 'Bootstrap', 'React', 'React Router', 'Axios', 'Chart.js'],
    'https://yifeidesu.github.io/coinapp/',
    'https://github.com/yifeidesu/coinapp');

const myWeatherDesc =
    '-	Forecast web application. Display current and forecast weather.</br>' +
    '-	Built with Angular framework in TypeScript.</br>' +
    '-	Consume weather API with RxJS Observable.</br>' +
    '-	Display hourly fluctuation in line graphs with Chart.js.</br>' +
    '-	Implement responsive design with Bootstrap, HTML template and CSS.';
const myWeahter = new Project(
    'MyWeather: Single-Page Application',
    myWeatherDesc,
    './src/assets/myweather.png',
    'https://github.com/yifeidesu/myweather',
    ['Angular', 'RxJS', 'TypeScript', 'HTML', 'CSS', 'Chart.js'],
    'https://yifeidesu.github.io/myweather/',
    'https://github.com/yifeidesu/myweather');

const twitterClientDesc =
    '-	Twitter client app in Java, architecture in MVVM with data binding</br>' +
    '-	Integrate with Twitter SDK to perform user authentication</br>' +
    '-  Fetch timeline data, perform post/reply/search actions</br>' +
    '-	Implement HTTP requests with RxJava, Retrofit and OkHttp.</br>' +
    '-	Load picture and video with Glide';
const twitterClient = new Project(
    'BitForTwitter, Native Android App',
    twitterClientDesc,
    './src/assets/twitterbit.jpg',
    'https://github.com/yifeidesu/TwitterClientApp',
    ['RxJava', 'Retrofit', 'Twitter SDK', 'MVVM', 'Data binding', 'Java', 'Kotlin'],
    'https://play.google.com/store/apps/details?id=com.robyn.bitty',
    'https://github.com/yifeidesu/TwitterClientApp');

const dayPlusDesc = 
'-	Lifestyle application to help users track their notable events.</br>' +
'-  Users can add, edit and delete events.</br>' +
'-  Users can navigate among index, edit and display screens.</br>' +
'-	Custom background picture by choosing from camera or gallery.</br>' +
'-	Asynchronously query local MySQL database with Kotlin Coroutine.</br>' +
'-	Build in Java and Kotlin with MVP architecture.';
const dayPlus = new Project(
    'DayPlus, Native Android App',
    dayPlusDesc,
    './src/assets/pj_dayplus.jpg',
    'https://github.com/yifeidesu/DayPlus-Countdown',
    ['MVP', 'MySQL', 'Java', 'Kotlin'],
    'https://play.google.com/store/apps/details?id=com.robyn.dayplus2',
    'https://github.com/yifeidesu/DayPlus-Countdown');

const imgurAppDesc = 
'-  An Imgur client app integrated with Imgur API. </br>' +
'-  User can view viral or most recent image list without login.</br>' +
'-  Click item to view image in whole screen.';
const imgurApp = new Project(
    'MyImgur, Native Android App',
    imgurAppDesc,
    './src/assets/pj_im.jpg',
    'https://github.com/yifeidesu/MyImgurApp',
    ['RxJava', 'Retrofit', 'Gson', 'MVVM', 'Java', 'Kotlin'],
    '',
    'https://github.com/yifeidesu/MyImgurApp');


let cellsHtml = '';
projects.forEach((project) => {
    const cell = getCellHtml(project);
    cellsHtml += cell;
});
cellsHtml += andMoreHtml();


document.getElementById("cells").innerHTML = cellsHtml;

function getCellHtml(project) {
    const badgesHtml = getBadgesHtml(project);
    const sitesHtml = getSitesHtml(project);

    const cellHtml =
        '<div class="cell row">' +
        '<div class="col-lg-7">' +
        '<p class="pj-name">' + project.name + '</p>' +
        '<p class="desc">' + project.desc + '</p>' +
        '<p>' + badgesHtml + '</p>' +
        '<p>' + sitesHtml + '</p>' +
        '</div>' +
        '<div class="col-lg-5 col-img">' +
        '<img src="' + project.imageSrc + '" class="cell-img img-responsive margin" onclick="window.location.href=\'' + project.pageLink + '\'" style="width:100%" alt="Image">' +
        '</div></div>';
    return cellHtml;
}

function getBadgesHtml(project) {
    let badges = '';

    project.keywords.forEach(el => {
        badges += '<span class=" badge pj-badge">' + el + '</span>';
    });

    return badges;
}

function getSitesHtml(project) {
    let sitesHtml = '';

    if (project.site) {
        sitesHtml +=
            '<a class=" badge pj-site" href="' + project.site + '">Site</a>';
    }

    if (project.github) {
        sitesHtml +=
            '<a class=" badge pj-site" href="' + project.github + '">GitHub</a>';
    }

    return sitesHtml;
}

function andMoreHtml() {
    const more =
        '<div id="last-cell" class="col-lg-12 text-center"' +
        'onclick="window.location.href=\'https://github.com/yifeidesu\'">' +
        '<h3>And more...</h3></div>';

    return more;
}


/******************
 * SELF INTRODUCE *
 ******************/
const selfIntro =
    'I’m a Web Developer based in Toronto. <br/>' +
    'My goal is to build elegant and accessible web applications and help users\' life.' +
    '<br/>I love coding and enjoy getting and applying new skills.' +
    '<br/>My skillset includes JavaScript, HTML, CSS, React, Angular, TypeScript, Bootstrap, jQuery, Node.js, Express, MongoDB, MySQL, Java, Kotlin <a href="#skillset-div">and more</a>. ' +
    '<br/>Scroll down to see my projects! &#10024;'

document.getElementById('intro').innerHTML = selfIntro;

/************
 * SKILLSET *
 ************/
const skillset =
    "&#9889; Languages & Software: JavaScript, HTML, CSS, JSON, MySQL, MongoDB, Java, Kotlin<br />" +
    "&#9889; Library & Framework: Angular, React, Bootstrap, jQuery, Node.js, Express, Axios<br />" +
    "&#9889; IDE & Tool: Visual Studio Code, Android Studio, Git"

document.getElementById('skillset').innerHTML = skillset;