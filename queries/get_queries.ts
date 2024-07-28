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
