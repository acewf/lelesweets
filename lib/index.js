"use strict";

// import { renderToStaticMarkup } from 'react-dom/server';
// import express from 'express';
var express = require('express'); // import express from 'express';
// import { HTML } from './html';


var app = express();
var port = process.env.VIRTUAL_PORT || 3000;
/*
const headerElements = ()=>{
  return (
    <meta charset="utf-8"/>
  )
}

const htmlWrapper = ()=>{
  return (
    <HTML
      headerElements={headerElements()}
      appBodyString={"<div>LeleSweets</div>"}
    />
  )
}
*/

app.get('/', function (req, res) {
  //ReactDOMServer.renderToString(element)
  //ReactDOMServer.renderToStaticMarkup(element)  
  // const html = renderToStaticMarkup();
  var html = '<div>ASD</div>';
  res.status(200).send("<!DOCTYPE html>".concat(html));
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});