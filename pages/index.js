import React from 'react'
import Head from 'next/head'
import '../css/styles.css'

const index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Wiser Educação | Login</title>
        <link rel="icon" type="image/png" href="https://wisereducacao.com/images/logo-wiser.png"/>
      </Head>
      <div>
        <main>
          <div className="image-woman">
          </div>
          <div className="login">
            <h2>Olá, seja <br /> bem-vindo!</h2>
            <p className="subtitle">Para acessar a plataforma,<br /> faça seu login.</p>
            <form className="forms" action="">
            <div>
              <label for="nome">E-MAIL</label><br />
              <input type="email" id="email" name="email" placeholder="user.name@mail.com" required/>
            </div>
            <div>
              <label for="nome">SENHA</label><br />
              <input type="password" id="nome" name="password" placeholder="*******" required/>
            </div>
            </form>
            <button className="login-button">
              ENTRAR
            </button>
            <div className="bottom-texts">
            <p className="bottom-text">Esqeceu seu login ou senha?</p>
            <p className="bottom-link">Clique <a href="https://wisereducacao.com" className="link-pass">aqui</a></p>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default index