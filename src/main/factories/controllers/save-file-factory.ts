import { SaveFileController } from '../../../presentation/controllers/save-file-controller'
import { Controller } from '../../../presentation/protocols/Controller'

export const makeSaveFileController = (): Controller => {
  return new SaveFileController() //
}
