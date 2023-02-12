
import { App } from 'vue'
import DragContainer from '@/package/compenents/DragContainer/src/index'
import { setCompName } from '@/package/utils/index'

DragContainer.name = setCompName('drag-container')

DragContainer.install = (app: App) => {
  app.component(DragContainer.name, DragContainer)
};

export default DragContainer