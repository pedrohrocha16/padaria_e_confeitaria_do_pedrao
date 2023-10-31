import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <title>Padaria e Confeitaria do Pedrão</title>
      <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
      {/* Bootstrap */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin='anonymous'></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossOrigin='anonymous'></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin='anonymous'></script>
      <script>var Alert = ReactBootstrap.Alert;</script>
      {/* Fim Bootrstrap */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
