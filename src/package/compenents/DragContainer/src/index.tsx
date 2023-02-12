import { defineComponent } from 'vue'
import styled from 'vue3-styled-components'

const props = {
  indx: {
    type: String,
    default: ''
  }
}

const Div = styled.div``

export default defineComponent({
  name: 'CustomDropdown',
  props,
  setup(props, { slots }) {
    const dragend = (e: any) => {
      console.log('被：end', e)
      const { dataset } = e.target;
      if(dataset && dataset.copy === 'true' ) {
        console.log('拖拽到容器')
      } else {
        console.log('容器内排序')
      }
    }

    const dragLeave = (e: any) => {
      console.log('目：leave', e)
    }

    return () => (
      <Div>
        <div
        className='bg-red-500 bg-opacity-25 w-24 h-24 cursor-move'
        draggable='true'
        data-copy='true'
        onDragend={(e) => dragend(e)}>
          哈哈哈
        </div>

        <div
        className='w-full h-xs border-1 border-gray-500/20 border-dashed'
        onDragleave={(e) => dragLeave(e)}>

        </div>
      </Div>
    )
  }
})

