
import { App } from 'vue'
import ToolBox from '@/package/compenents/ToolBox'


const components = [
  ToolBox,
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
