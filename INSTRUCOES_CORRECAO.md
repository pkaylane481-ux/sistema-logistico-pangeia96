# Correção dos campos financeiros e de rastreio

## 1. Atualizar o Supabase

1. Acesse o projeto no Supabase.
2. Abra **SQL Editor**.
3. Abra o arquivo `supabase/20260814_campos_financeiros_rastreio.sql` deste pacote.
4. Copie todo o conteúdo, cole no SQL Editor e clique em **Run**.

O comando pode ser executado com segurança mesmo que alguma coluna já exista.

## 2. Publicar o sistema

Substitua os arquivos do projeto pelos arquivos desta pasta e realize a publicação normalmente.

## 3. Conferir

Abra um registro finalizado e teste separadamente:

- código de rastreio;
- valor do frete;
- valor do estorno.

Selecione o operador responsável pela etapa e clique em **Salvar alterações**. Feche e abra novamente o registro para confirmar os valores.
