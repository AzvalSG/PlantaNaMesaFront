import Produto from "./Produto"


interface Categoria {
  id: number
  nome: string
  descricao: string
  produto?: Produto | null
}

export default Categoria