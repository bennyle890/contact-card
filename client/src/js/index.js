// Import Modules
import "./form";
import "./submit";

// Import CSS files
import "../css/index.css";

// Import Bootstrap
import { Tooltop, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

// Import fetchCards
import { fetchCards } from './cards';

// Import initDb
import { initdb, getDb, postDb } from './database';

import { clearForm, toggleForm } from "./form";

window.addEventListener('load', function() {
    initdb();
    fetchCards();
    toggleForm();
    clearForm();

    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});
