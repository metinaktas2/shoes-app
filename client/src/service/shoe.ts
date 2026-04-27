import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {type MessageResponse, type Shoe, type ShoeValues } from "../types";
import api from "./api";
import { toast } from "react-toastify";


const shoeService={
    getAll:()=>api.get<Shoe[]>("/shoes"),
    getOne:(id:string)=>api.get<Shoe>(`/shoes/${id}`),
    create:(data:ShoeValues)=>api.post<Shoe>("/shoes",data),
    update:(id:string,data:ShoeValues)=>api.put<Shoe>(`/shoes/${id}`,data),
    delete:(id:string)=>api.delete<MessageResponse>(`/shoes/${id}`)
}

export const useShoes=()=>
  useQuery({
    queryKey:["shoes"],
    queryFn:()=>shoeService.getAll(),
    select:(res)=>res.data
})

export const useShoe=(id:string|undefined)=>
  useQuery({
    queryKey:["shoe",id],
    queryFn:()=>shoeService.getOne(id!),
    select:(res)=>res.data,
    enabled:!!id
  })

  export const useDeleteShoe=()=>{
   const queryClient= useQueryClient()
   return useMutation({
    mutationFn:(id:string)=>shoeService.delete(id),
    onSuccess:()=>{
      toast.success("Ürün başarıyla silindi");
      //shoes sorgusunu yeniden çalıştır
      queryClient.invalidateQueries({queryKey:["shoes"]})},
   
    onError:()=>toast.error("Ürün silinirken bir sorun oluştu")
  })}

  export const useCreateShoe=()=>{
  const queryClient = useQueryClient()


  return useMutation({
    mutationFn:(data:ShoeValues)=>shoeService.create(data),
    onSuccess:()=>{
      toast.success("Ürün başarıyla oluşturuldu")
      queryClient.invalidateQueries({queryKey:["shoes"]})
    },
    onError:()=>toast.error("Ürün oluşturulurken bir sorun oluştu")
  })
  }

  export const useUpdateShoe=()=>{
  const queryClient = useQueryClient()


  return useMutation({
    mutationFn:({id,data}:{id:string,data:ShoeValues})=>shoeService.update(id,data),
    onSuccess:()=>{
      toast.success("Ürün başarıyla güncellendi")
      queryClient.invalidateQueries({queryKey:["shoes"]})
    },
    onError:()=>toast.error("Ürün güncellenirken bir sorun oluştu")
  })
  }