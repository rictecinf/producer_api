import { Controller } from '@/presentation/protocols/Controller'
import { Request, Response } from '@/presentation/protocols/http'

export class SaveFileController implements Controller {
  // constructor () {}
  async handler (req: Request): Promise<Response> {
    return { body: 'Hello World', statusCode: 200 }
  }
}
