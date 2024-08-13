import { useAutoBindSidebarMenue } from '../hooks'
import { ModuleComponentProps } from '../type'
import { ModuleBConfig } from './config'

export default function Component(props: ModuleComponentProps<ModuleBConfig>) {
  useAutoBindSidebarMenue('moduleB', props.config.sidebar)
  return (
    <div>
      <strong>{props.config.title}</strong>
      <i>Module B</i>
    </div>
  )
}
