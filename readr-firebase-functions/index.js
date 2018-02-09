const express = require('express');
const functions = require('firebase-functions');

const cors = (allowedOrigins) => (req, res, next) => {
  const origin = req.headers.origin
  if (origin && (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins === '*')) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Headers', 'content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Methods', 'get,post,put')
  }
  next()
}

const app = express();

// Automatically allow cross-origin requests
app.use(cors('*'));

// Add middleware to authenticate requests
// app.use(myMiddleware);

const Widgets = {
  list() {
    return [{
      data: 5
    }]
  }
}

// build multiple CRUD interfaces:
// app.get('/:id', (req, res) => res.send(Widgets.getById(req.params.id)));
// app.post('/', (req, res) => res.send(Widgets.create()));
// app.put('/:id', (req, res) => res.send(Widgets.update(req.params.id, req.body)));
// app.delete('/:id', (req, res) => res.send(Widgets.delete(req.params.id)));
app.get('/', (req, res) => res.send(Widgets.list()));

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);
