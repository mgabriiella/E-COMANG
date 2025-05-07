-- Inserção em ENDEREÇO
INSERT INTO ENDEREÇO (Bairro, Cidade, Estado, CEP, Número) 
VALUES 
    ('Boa Vista', 'Recife', 'PE', '50070-010', '48'),
    ('Centro', 'São Paulo', 'SP', '01000-000', '100'),
    ('Centro', 'Recife', 'PE', '50030-220', '77');

-- Inserção em TIPO_RESÍDUO
INSERT INTO TIPO_RESÍDUO (Nome_Resíduo, Potencial_Reciclagem, Pontos_por_Kg) 
VALUES 
    ('Plástico', 85.5, 10.0),
    ('Vidro', 70.0, 8.0),
    ('Alumínio', 90.0, 7.0),
    ('Eletrônico', 60.0, 12.0);

-- Inserção em MORADOR
INSERT INTO MORADOR (Nome, CPF, Tipo_Residência, Status_Conta, Endereço_ID) 
VALUES 
    ('João Silva', '12345678901', 'Casa', 'Ativo', 1),
    ('Maria Souza', '98765432109', 'Apartamento', 'Ativo', 2),
    ('Ricardo Teixeira', '19473364582', 'Apartamento', 'Ativo', 2);

-- Inserção em ESTAÇÃO
INSERT INTO ESTAÇÃO (Status, Capacidade_Atual, Capacidade_Máxima, Endereço_ID)
VALUES 
    ('Operante', 0, 1000, 1),
    ('Operante', 0, 1000, 2),
    ('Operante', 0, 1000, 3);

-- Inserção em BENEFÍCIO
INSERT INTO BENEFÍCIO (Tipo_Desconto, Valor, Pontos_Necessários, Status_Benefício)
VALUES 
    ('Desconto IPTU', 100.00, 500.00, 'Disponível'),
    ('Cashback Supermercado', 50.00, 250.00, 'Disponível'),
    ('Vale-Cultura', 80.00, 400.00, 'Esgotado'),
    ('Desconto Farmácia', 30.00, 150.00, 'Disponível'),
    ('Crédito em Conta de Luz', 70.00, 350.00, 'Disponível');

-- Inserção em RESÍDUO
INSERT INTO RESÍDUO (Data_Descarte, Peso, Pontos_Acumulados, Usuário_ID, Estação_ID, Tipo_Resíduo_ID)
VALUES 
    ('2023-10-25', 10.5, 105.0, 1, 1, 1),
    ('2025-04-20', 5.0, 50.0, 1, 1, 1),
    ('2025-04-21', 3.0, 24.0, 2, 2, 2),
    ('2025-04-22', 11.0, 38.0, 1, 1, 1),
    ('2025-04-23', 13.0, 44.0, 2, 2, 2);