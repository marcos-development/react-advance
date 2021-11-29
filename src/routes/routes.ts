import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    children?: Route[]
}

// const LazyPage1 = lazy( () => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1') );
// const LazyPage2 = lazy( () => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2') );
// const LazyPage3 = lazy( () => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3') );

export const routes: Route[] = [
    {
        path: '/lazylayout',
        Component: lazy( () => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout') ),
        name: 'LazyLayout'
    },
    {
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy Loading'
    }
]