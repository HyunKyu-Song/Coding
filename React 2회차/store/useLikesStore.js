import create from 'zustand';

export const useLikesStore = create((set)=>({
   likes : 2,
   PlusLikes(){
      set((state)=>({
         likes : state.likes + 2
      }))
   },
   MinusLikes(){
      set((state)=>({
         likes : state.likes - 1
      }))
   }
}))