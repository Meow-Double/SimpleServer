const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');
const db = require('./db.json');

const server = jsonServer.create();
const router = jsonServer.router(db, { foreginSuffix: 'id' });
const middlewares = jsonServer.defaults();

server.use(express.json());
server.use(cors());

server.use(
  jsonServer.rewriter({
    '/registartion': '/users',
  }),
);

server.post('/registration', function (req, res, next) {
  req.body.id = Math.random();
  res.cookie('doggee-auth', '123456', {
    httpOnly: true,
    sameSite: 'strict',
  });
  next();
});

server.post('/auth', function (req, res) {
  const { body } = req;

  const user = db.users.find(
    (user) => user.password === body.password && user.usrename === body.usrename,
  );

  if (!user) {
    res.status(404);
    res.send({ success: false, data: { message: 'user is not exist' } });
    return;
  }

  res.cookie('doggee-auth', '123456', {
    httpOnly: true,
    sameSite: 'strict',
  });
  res.send({ success: true, data: user });
});

server.use(middlewares);
server.use(router);

const port = 3001;

server.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
