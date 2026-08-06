import { supabase } from "./supabase";

export async function listarProdutos(){

  const { data, error } = await supabase
    .from("produtos")
    .select("*");

  console.log("ERRO:", error);
  console.log("DATA:", data);

  return data ?? [];
}