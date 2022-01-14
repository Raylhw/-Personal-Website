export default function (showMsg) {
    return {
        //message的page和limit需要内部自定义
        data() {
            return {
                page: 1,
                limit: 10,
            };
        },
        //在创建阶段注册mainScroll事件
        created() {
            this.$bus.$on("mainScroll", this.handleScroll);
        },
        //在组件销毁时注销mainScroll事件
        destroyed() {
            this.$bus.$off("mainScroll", this.handleScroll);
        },
        //是否还有更多数据需要加载
        computed: {
            hasMore() {
                return this.data.rows.length < this.data.total;
            },
        },
        methods: {
            //加载更多数据
            async fetchMore() {
                // 判断是否已经没有更多数据
                if (!this.hasMore) {
                    return;
                }
                this.isLoading = true;
                this.page++;
                const resp = await this.fetchData();
                this.data.total = resp.total;
                this.data.rows = this.data.rows.concat(resp.rows);
                this.isLoading = false;
            },
            //处理提交事件
            async handleSubmit(formData, callback) {
                const resp = await this.postData(formData);
                this.data.rows.unshift(resp);
                this.data.total++;
                callback(showMsg);
            },
            //处理滚动事件--什么时候需要加载更多
            handleScroll(dom) {
                if (this.isLoading || !dom) {
                    return;
                }
                const range = 50; //设定一个范围
                const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
                if (dec <= range) {
                    this.fetchMore();
                }
            },
        }
    }
}