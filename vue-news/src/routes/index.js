
import Vue from "vue";
import VueRouter from "vue-router";
import ItemView from "@/views/ItemView";
import UserView from "@/views/UserView";
import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";
import bus from "@/utils/bus";
import { store } from "@/store";


Vue.use(VueRouter);

const fetchListForBeforeEnter = (pageName, next) => {
    bus.$emit('start:spinner');

    store.dispatch('FETCH_LIST', pageName)
        .then(() => next())
        .catch();
}

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
            beforeEnter: (to, from, next) => {
                fetchListForBeforeEnter(to.name, next);
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            beforeEnter: (to, from, next) => {
                fetchListForBeforeEnter(to.name, next);
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            beforeEnter: (to, from, next) => {
                fetchListForBeforeEnter(to.name, next);
            }
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
    ]
});