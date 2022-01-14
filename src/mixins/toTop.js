/**
 * ToTop组件的混入
 * @param {String} refName 
 * @returns 
 */
export default function (refName) {
    return {
        methods: {
            handleSetMainScroll(scrollTop) {
                this.$refs[refName].scrollTop = scrollTop;
                location.hash = ""; 
            },
            handleMainScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refName]);
            },
        },
        mounted() {
            //监听ToTop组件抛出的滚动到顶部事件
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
            this.$refs[refName].addEventListener("scroll", this.handleMainScroll);
        },
        beforeDestroy() {
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
            this.$bus.$emit("mainScroll");
            this.$refs[refName].removeEventListener("scroll", this.handleMainScroll);
        },
    }
}