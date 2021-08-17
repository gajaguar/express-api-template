import appFactory from '~/app'
import { application } from '~/config'

const app = appFactory()

app.listen(application.port, () => {
  console.log(
    `server started at http://${application.host}:${application.port}`
  )
})
