import { App } from 'vue'
// 导入组件，组件必须声明 name
import MicoButton from './src/index.vue'

// 定义 install 方法， App 作为参数
// 为组件提供 install 安装方法，供按需引入
MicoButton.install = (app: App): void => {
    app.component(MicoButton.name, MicoButton)
}
// 导出组件
export default MicoButton
