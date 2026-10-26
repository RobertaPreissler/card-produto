

import { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 24px;
  margin: 40px auto;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
`;

const NomeProduto = styled.h2`
  color: #20202c;
  font-size: 24px;
  margin-bottom: 12px;
`;

const PrecoProduto = styled.p`
  color: #198754;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Botao = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ $adicionado }) =>
    $adicionado ? '#198754' : '#6c757d'};
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

function CardProduto({ nome, preco, adicionado }) {
  return (
    <Card>
      <NomeProduto>{nome}</NomeProduto>

      <PrecoProduto>
        {preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </PrecoProduto>

      <Botao $adicionado={adicionado}>
        {adicionado
          ? 'Adicionado ao carrinho'
          : 'Adicionar ao carrinho'}
      </Botao>
    </Card>
  );
}

function App() {
  const [adicionado] = useState(false);

  return (
    <CardProduto
      nome="Fone Bluetooth"
      preco={199.90}
      adicionado={adicionado}
    />
  );
}

export default App;
