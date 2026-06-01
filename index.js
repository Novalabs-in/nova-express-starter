const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()
app.use(helmet())
app.use(morgan('combined'))
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() })
})

if (require.main === module) {
  app.listen(3000, () => console.log('Express API started on port 3000'))
}
