import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritaState = {
  itens: Produto[]
}

const initialState: FavoritaState = {
  itens: []
}

const favoritaSlice = createSlice({
  name: 'favoritando',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorita = action.payload
      if (state.itens.find((p) => p.id === favorita.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== favorita.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(favorita)
      }
    }
  }
})

export const { favoritar } = favoritaSlice.actions
export default favoritaSlice.reducer
