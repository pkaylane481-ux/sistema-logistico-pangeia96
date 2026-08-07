alter table public.devolucoes_logistica
  add column if not exists codigo_rastreio text,
  add column if not exists data_informada_entrega date;

comment on column public.devolucoes_logistica.data_informada_entrega is
  'Data em que o rastreio informou a entrega do pacote não recebido pelo cliente.';
