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
  name: 'dragItemBox',
  props,
  setup(props, { slots }) {
    return () => (<Div class='w-30 h-30 bg-red-300'>
      工具箱
      <div>
        {slots.default()}
      </div>
    </Div>)
  }
});