import HistoryList from './components/HistoryList.vue'
import History from './components/pages/History.vue'
import Main from './components/pages/Main.vue'

export default [
  {
    path: '/',
    name: 'main',
    component: Main,
  },

  {
    path: '/history',
    component: History,
    children: [
      {
        path: '',
        name: 'history_all',
        component: HistoryList,
      },
      {
        path: 'add',
        name: 'history_add',
        component: HistoryList,
      },
      {
        path: 'delete',
        name: 'history_delete',
        component: HistoryList,
      },
    ],
  },
]
