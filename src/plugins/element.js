import ElementPlus from 'element-plus'
import '../element-variables.scss'
import 'element-plus/packages/theme-chalk/src/index.scss'
import locale from 'element-plus/lib/locale/lang/zh-cn'

export default (app) => {
  app.use(ElementPlus, { locale })
}
