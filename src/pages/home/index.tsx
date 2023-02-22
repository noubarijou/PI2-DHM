import * as s from './home.style';
import Header from '../../components/Header';
import Footer from '../../components/footer';

const HomePage = () => {
  return (
    <s.ContainerPage>
      <Header />
      <s.WomanImage
        src="../../assets/images/happy_woman.png"
        alt="Teste"
      ></s.WomanImage>
      <s.GreenBottomContainer></s.GreenBottomContainer>
      <s.SmallTextSession>
        <s.SmallTextContainer>
          <h1 className="small-text">
            De agora em diante, faça mais com seu dinheiro{' '}
            <span>
              Sua nova <strong>carteira virtual</strong>
            </span>
          </h1>
        </s.SmallTextContainer>
      </s.SmallTextSession>
      <div className="infos-container">
        <s.InfosLeft>
          <h2>Transferência</h2>
          <s.DividerLine />
          <h3>
            Com a Digital Money House você pode transferir dinheiro para outras
            contas, bem como receber transferências e centralizar seus
            investimentos na nossa carteira virtual.
          </h3>
        </s.InfosLeft>
        <s.InfosRight>
          <h2>Pagamento de serviços</h2>
          <s.DividerLine />
          <h3>
            Pague mensalmente por serviços com apenas 3 clicks. Fácil, rápido e
            conveniente. Esqueça os boletos em papel.
          </h3>
        </s.InfosRight>
      </div>

      {/* <s.ContainerLogin onSubmit={onSubmitForm}>
        <s.Title>
          {!logged ? 'Olá Digite seu e-mail' : 'Digite sua senha'}
        </s.Title>
        {!logged ? (
          <InputText
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email"
            variant={'outOfFocus'}
            name="email"
          />
        ) : (
          <InputText
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="senha"
            variant={'outOfFocus'}
            name="password"
          />
        )}
        <Button variant="primary">Confirmar</Button>
        {!logged && <Button variant="tertiary">Criar conta</Button>}
        {messageError && <s.MessageError>{messageError}</s.MessageError>}
      </s.ContainerLogin> */}
      <Footer />
    </s.ContainerPage>
  );
};

export default HomePage;
