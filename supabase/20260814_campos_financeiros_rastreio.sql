alter table public.devolucoes_logistica
  add column if not exists codigo_rastreio text,
  add column if not exists data_informada_entrega date,
  add column if not exists valor_frete numeric(12, 2) default 0,
  add column if not exists valor_estorno numeric(12, 2) default 0;

comment on column public.devolucoes_logistica.codigo_rastreio is
  'Código de rastreio do pacote ou do reenvio.';

comment on column public.devolucoes_logistica.valor_frete is
  'Valor do frete do reenvio.';

comment on column public.devolucoes_logistica.valor_estorno is
  'Valor estornado para a cliente.';
