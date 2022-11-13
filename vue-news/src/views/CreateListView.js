import ListView from "@/views/ListView";
import bus from "@/utils/bus";

/**
 * 로직 재사용을 위한 하이 오더 컴포넌트 (HOC, Higher Order Component)
 * @param name
 * @returns {{created(): void, name, render(*): *}|VNode}
 */
export default function createListView(name) {
    return {
        name,

        created() {
            bus.$emit('start:spinner');

            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    console.log('fetched');
                    bus.$emit('end:spinner');
                })
                .catch();
        },

        render(createElement) {
            return createElement(ListView);
        }
    }
}