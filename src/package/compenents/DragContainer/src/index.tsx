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
        e.dataTransfer.setData("Text", e.target.id);
      } else {
        console.log('容器内排序')
      }
    }

    const drop = (e: any) =>{
      console.log('目标元素上松开鼠标', e)
      var data = e.dataTransfer.getData("Text");
      e.target.appendChild(document.getElementById(data));
      console.log('哈哈哈')
    }

    return () => (
      <Div>
        <div
        className='bg-red-500 bg-opacity-25 w-24 h-24 cursor-move'
        draggable='true'
        data-copy='true'
        id='hahaha'
        onDragend={(e) => dragend(e)}>
          哈哈哈
        </div>

        <div
        className='w-full h-xs border-1 border-gray-500/20 border-dashed'
        onDragover={e => e.preventDefault()}
        onDrop={(e) => drop(e)}>

        </div>
      </Div>
    )
  }
})

