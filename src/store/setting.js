import { getSetting } from "@/api/setting";
import { titleControler } from '@/utils'
import { server_URL } from "@/urlConfig.js";

export default {
    namespaced: true,
    state: {
        loading: false,
        data: {}
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        },
    },
    actions: {
        async fetchSetting(ctx) {
            //避免再次请求
            if (ctx.state.data.length) {
                return;
            }
            ctx.commit("setLoading", true);
            const resp = await getSetting();
            resp.avatar = server_URL + resp.avatar;
            resp.favicon = server_URL + resp.favicon;
            resp.qqQrCode = server_URL + resp.qqQrCode;
            resp.weixinQrCode = server_URL + resp.weixinQrCode;
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);

            //网站图标
            if (resp.favicon) {
                let link = document.querySelector("link[ref='shortcut icon]");
                if (link) {
                    return;
                }
                link = document.createElement("link");
                link.rel = 'shortcut icon';
                link.type = 'image/x-icon';
                link.href = resp.favicon;
                document.querySelector('head').appendChild(link);
            }

            //网站名--siteTitle
            if (resp.siteTitle) {
                titleControler.setSiteTitle(resp.siteTitle);
            }
        }
    }
}