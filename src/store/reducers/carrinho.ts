import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  qtd: number
}

const initialState: CarrinhoState = {
  itens: [],
  qtd: 0
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    itens: 0
  },
  reducers: {
    incrementar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload
      if(state.itens)
    }
  }
})


function favoritar(produto: Produto) {
  if (favoritos.find((p) => p.id === produto.id)) {
    const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
    setFavoritos(favoritosSemProduto)
  } else {
    setFavoritos([...favoritos, produto])
  }
}

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
