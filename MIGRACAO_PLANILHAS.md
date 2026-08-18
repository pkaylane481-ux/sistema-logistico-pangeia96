# Sistema → Google Planilhas → Dashboards

Esta versão substitui a camada Supabase por um backend do Google Apps Script.

## Segurança

- Publique o Web App como **Executar como: você**.
- Permita acesso somente ao domínio `pangeia96.com.br`.
- Não publique com acesso anônimo.
- Mantenha a versão Supabase ativa até terminar todos os testes.

## Implantação

1. Copie os arquivos da pasta `apps-script` para o projeto Apps Script vinculado à planilha.
2. Compile o frontend e hospede os arquivos JS/CSS estáticos.
3. Cadastre `FRONTEND_JS_URL` e `FRONTEND_CSS_URL` nas propriedades do script.
4. Implante como Web App corporativo.

## Teste antes da troca

- listar as 16 abas;
- cadastrar, editar e excluir um registro de teste;
- validar histórico e produtividade;
- validar rastreio, frete e estorno;
- confirmar dashboards e backup;
- testar uma conta corporativa e uma conta externa.
