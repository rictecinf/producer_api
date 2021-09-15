import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-route-adapter'
import { makeSaveFileController } from '../../factories/controllers/save-file-factory'

export default (router: Router): void => {
  router.get('/save-file', adaptRoute(makeSaveFileController()))
}
