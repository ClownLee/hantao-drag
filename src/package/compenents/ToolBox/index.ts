import { App } from 'vue'
import ToolBox from '@/package/compenents/ToolBox/src/index'
import { setCompName } from '@/package/utils/index'

ToolBox.name = setCompName('ToolBox')

ToolBox.install = (app: App) => {
  app.component(ToolBox.name, ToolBox)
};

export default ToolBox
