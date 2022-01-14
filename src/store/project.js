import { getProjects } from '@/api/project';
import { server_URL } from '@/urlConfig';

export default {
    namespaced: true,
    state: {
        loading: false,
        data: []
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchProject(ctx) {
            if (ctx.state.data.length) {
                return;
            }
            ctx.commit("setLoading", true);
            const resp = await getProjects();
            for (const item of resp) {
                item.thumb = server_URL + item.thumb;
            }
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
        }
    }

}