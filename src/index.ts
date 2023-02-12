
import { App } from 'vue'
import DragContainer from '@/package/compenents/DragContainer'


const components = [
  DragContainer,
]

const install = (app: App) => {
  components.map(item => {
    app.component(item.name, item)
  })
}

export default {
  install,
  ... components
}
