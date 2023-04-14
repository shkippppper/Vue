import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Generator from '../views/Generator.vue'
import TermsOfUse from '../views/TermsOfUse.vue'
import TrueRandom from '../views/TrueRandom.vue'


export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/random-team-generator',
        name: 'generator',
        component: Generator
    },
    {
        path: '/terms-of-use',
        name: 'terms',
        component: TermsOfUse
    },
    {
        path: '/true-random',
        name: 'trueRandom',
        component: TrueRandom
    }
]