import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import TabMenu from 'primevue/tabmenu'
import Dropdown from 'primevue/dropdown'
import ProgressSpinner from 'primevue/progressspinner';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import   'primevue/resources/themes/saga-blue/theme.css'     
import  'primevue/resources/primevue.min.css '               
import router from './router/router'
import store from './store/store';
const app = createApp(App)


app.use(PrimeVue);
app.component('Card', Card)
app.component('Button', Button);
app.component('TabMenu', TabMenu)
app.component('Dropdown', Dropdown)
app.component('ProgressSpinner',ProgressSpinner)
app.component('InputText',InputText)
app.component('Message',Message)
app.use(router)
app.use(store)
app.mount('#app')

