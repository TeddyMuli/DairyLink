import { TypedSupabaseClient } from '@/utils/types';

export function getFarmer(client: TypedSupabaseClient, farmerId: string) {
  return client
    .from('farmers')
    .select(`*`)
    .eq('user_id', farmerId)
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

export function getMessages(client: TypedSupabaseClient, user_id: string) {
  return client
    .from("message_recipients")
    .select("*")
    .eq("to", user_id)
    .throwOnError()
}
