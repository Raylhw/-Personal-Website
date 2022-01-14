// 路由匹配规则
// import Home from '@/views/Home'
// import About from '@/views/About'
// import Blog from '@/views/Blog'
// import Project from '@/views/Project'
// import Message from '@/views/Message'
// import DetailBlog from '@/views/Blog/Detail'

import "nprogress/nprogress.css";
import NotFound from '@/views/NotFound'
import { start, done, configure } from 'nprogress'

configure({
    trickleSpeed: 20,
    showSpinner: false
})

function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

function getPageComp(pageCompResolver) {
    return async () => {
        start();//模拟进度条开始
        if (process.env.NODE_ENV === "development") {
            await delay(500);
        }
        const comp = await pageCompResolver();
        done();//模拟进度条结束
        return comp;
    }
}

export default [
    {
        name: "Home",
        path: "/",
        // component: Home,
        component: getPageComp(() => import('@/views/Home')),//路由懒加载
        meta: {
            title: "首页"
        }
    },
    {
        name: "About",
        path: "/about",
        // component: About,
        component: getPageComp(() => import('@/views/About')),//路由懒加载
        meta: {
            title: "关于我"
        }
    },
    {
        name: "Blog",
        path: "/blog",
        // component: Blog,
        component: getPageComp(() => import('@/views/Blog')),//路由懒加载
        meta: {
            title: "博客"
        }
    },
    {
        name: "CategoryBlog",
        path: "/blog/cate/:categoryId",
        // component: Blog,
        component: getPageComp(() => import('@/views/Blog')),//路由懒加载
        meta: {
            title: "博客"
        }
    },
    {
        name: "DetailBlog",
        path: "/blog/:id",
        // component: DetailBlog,
        component: getPageComp(() => import('@/views/Blog/Detail')),//路由懒加载
        meta: {
            title: "博客详情页"
        }
    },
    {
        name: "Project",
        path: "/project",
        // component: Project,
        component: getPageComp(() => import('@/views/Project')),//路由懒加载
        meta: {
            title: "项目&效果"
        }
    },
    {
        name: "Message",
        path: "/message",
        // component: Message,
        component: getPageComp(() => import('@/views/Message')),//路由懒加载
        meta: {
            title: "留言板"
        }
    },
    {
        name: "NotFound",
        path: "*",
        component: NotFound
    }
]