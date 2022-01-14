import Mock from "mockjs";

Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://img2.baidu.com/it/u=395719964,2145680590&fm=26&fmt=auto",
        siteTitle: "Ray_的个人空间",
        github: "https://github.com/Raylhw",
        qq: "1249730812",
        weixin: "jason1249730812",
        mail: "1249730812@qq.com",
        icp: "粤ICP备17000456号",
        githubName: "Raylhw",
        favicon: "https://img0.baidu.com/it/u=4007346975,2098596329&fm=26&fmt=auto"
    }
})