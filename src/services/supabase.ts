import { createClient } from "@supabase/supabase-js";


// ======================================
// CONFIGURAÇÃO SUPABASE
// ======================================


const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL;


const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY;



// ======================================
// VALIDAÇÃO
// ======================================


if (!supabaseUrl || !supabaseAnonKey) {

  throw new Error(
    "Variáveis do Supabase não encontradas. Verifique o arquivo .env"
  );

}



// ======================================
// CLIENTE SUPABASE
// ======================================


export const supabase =
  createClient(
    supabaseUrl,
    supabaseAnonKey
  );