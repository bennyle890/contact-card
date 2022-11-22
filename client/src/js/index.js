// Import Modules
import "./form";
import "./submit";
// import "./database";

// Import CSS files
import "../css/index.css";

// Import Bootstrap
import { Tooltop, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import initDb
import { initdb } from './database';

// Import Images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

window.addEventListener('load', function() {
    initdb();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});
