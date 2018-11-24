import express from 'express';
import { renderToStaticMarkup } from 'react-dom/server';
import { htmlWrapper } from './serverApp';


export let startSSR = ()=>null;
export const app = express()
const port = process.env.VIRTUAL_PORT || 3000;
let logServer = ()=>null


app.get('/', (req, res) => {
  const html = renderToStaticMarkup(htmlWrapper());
  res.status(200).send(`<!DOCTYPE html>${html}`)
})


if(process.env.ENV==='dev'){
  const url = `http://localhost:${port}`
  logServer = ()=>console.log(`Server running on ${url}!`)
}

if(process.env.ENV==='prod'){
  console.log('Production Running');
}

app.listen(port, logServer)

