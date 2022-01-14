export default function (defaultData = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultData //存放获取的数据
            }
        },
        async created() {
            //获取数据
            this.data = await this.fetchData();
            this.isLoading = false;
        },
    }
}