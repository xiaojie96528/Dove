import { PropType } from 'vue'

export interface BasicProps {
  width: string
  height: string
}

export const basicProps = {
  width: {
    type: String as PropType<string>,
    default: '100%',
  },
  height: {
    type: String as PropType<string>,
    default: '280px',
  },
}
export const fullProps = {
  width: {
    type: String as PropType<string>,
    default: '55%',
  },
  height: {
    type: String as PropType<string>,
    default: '500px',
  },
}
