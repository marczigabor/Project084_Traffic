
import { MainComponent } from './component/main.component';

(function load() {

    let main = null;

    let load = () => {
        main = new MainComponent(document.getElementById('container'));
    };

    document.addEventListener('DOMContentLoaded', load);

    window.onunload = function() {
        document.removeEventListener('DOMContentLoaded', load);
        main.destroy();
        main = null;
    };

})();


