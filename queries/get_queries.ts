import { TypedSupabaseClient } from '@/utils/types';

export function getFarmer(client: TypedSupabaseClient, farmerId: string) {
  return client
    .from('farmers')
    .select(`*`)
    .eq('user_id', farmerId)
    .throwOnError()
    .single()
}

export function getFarmerCooperative(client: TypedSupabaseClient, cooperativeId: string) {
  return client
    .from('farmers')
    .select(`*`)
    .eq('cooperative_id', cooperativeId)
    .throwOnError()
    .single()
}

export function getNames(client: TypedSupabaseClient, table: string, id: string) {
  return client
    .from(table)
    .select("*")
    .eq("user_id", id)
    .throwOnError()
    .single()
}

export function getCooperative(client: TypedSupabaseClient, cooperativeId: string) {
  return client
    .from('cooperatives')
    .select("*")
    .eq('user_id',cooperativeId)
    .throwOnError()
    .single()
}

export function getAllCooperatives(client: TypedSupabaseClient) {
  return client
    .from("cooperatives")
    .select("*")
    .throwOnError()
}

export function getAllFarmers(client: TypedSupabaseClient) {
  return client
    .from("farmers")
    .select("*")
    .throwOnError()
}


export function getMessages(client: TypedSupabaseClient, user_id: string) {
  return client
    .from("message_recipients")
    .select("*")
    .eq("to", user_id)
    .throwOnError()
}

export function getMessageContent(client: TypedSupabaseClient, message_id: string) {
  return client
    .from("messages")
    .select("*")
    .eq("message_id", message_id)
    .throwOnError()
}

export function getProducts(client: TypedSupabaseClient, cooperative_id: string) {
  return client
    .from("products")
    .select("*")
    .eq("cooperative_id", cooperative_id)
    .throwOnError()
}

export function getBlogs(client: TypedSupabaseClient, cooperative_id: string) { 
  return client
    .from("blogs")
    .select("*")
    .eq("cooperative_id", cooperative_id)
    .throwOnError()
}
