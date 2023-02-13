import * as s from './home.style';

const HomePage = () => {
  return (
    <s.ContainerPage>
      <s.WomanImage
        src="../../assets/images/happy_woman.png"
        alt="Teste"
      ></s.WomanImage>
      <s.GreenBottomContainer></s.GreenBottomContainer>
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
    </s.ContainerPage>
  );
};

export default HomePage;
