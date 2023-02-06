import {createApp, h, provide} from 'vue'
import './style.css'
import App from './App.vue'
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {DefaultApolloClient} from "@vue/apollo-composable";
import router from './router'

const defaultClient = new ApolloClient({
    uri: 'http://localhost:8010/proxy/graphql',
    cache: new InMemoryCache()
})


const app = createApp( {
    setup() {
        provide(DefaultApolloClient, defaultClient)
    },
    render() {
        return h(App)
    }
}).use(router).mount('#app')
