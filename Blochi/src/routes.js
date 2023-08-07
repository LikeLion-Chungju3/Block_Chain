import main from './components/main/main.vue';
import gamePage from './components/main/gamePage';
import point from './components/main/Point.vue';

export default [
    { path: '/', component: main},
    { path: '/game', component: gamePage },
    { path: '/point', component: point }
]