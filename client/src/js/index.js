// Import Modules
import "./form";
import "./submit";
// import "./database";

// Import CSS files
import "../css/index.css";

// Import Bootstrap
import { Tooltop, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

// Import initDb
import { initdb, getDb, postDb } from './database';

window.addEventListener('load', function() {
    initdb()

    // We are temporarily placing getDb() and postDb() function calls here for testing. We will move it to another event listener later.
    getDb();
    postDb("Lernantino", "learnantino@test.com", 8186601234, "Bear");
    getDb();
    
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});
