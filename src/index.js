
import { MainComponent } from './component/main.component';

(function load() {

    document.addEventListener('DOMContentLoaded', function() {
        let a = new MainComponent(document.getElementById('container'));
    }, false);

})();


window.onunload = function() {
    console.log('unload');
};
