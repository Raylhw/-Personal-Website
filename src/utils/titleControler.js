let routerName = '',
    siteName = '';

function titleRule() {
    if (!routerName && !siteName) {
        document.title = 'loading...';
    }
    else if (routerName && !siteName) {
        document.title = routerName;
    }
    else if (!routerName && siteName) {
        document.title = siteName;
    }
    else {
        document.title = `${routerName}-${siteName}`;
    }
}
titleRule();

export default {
    // 路由名
    setRouterTitle(titleName) {
        routerName = titleName;
        titleRule();
    },
    // 网站名
    setSiteTitle(titleName) {
        siteName = titleName;
        titleRule();
    }
}