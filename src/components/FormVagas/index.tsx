import { FormEvent, useState } from 'react'
import * as S from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <S.Form onSubmit={aoEnviarForm}>
      <S.Campo
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Pesquisar vagas"
      />

      <S.BtnPesquisar type="submit">Pesquisar</S.BtnPesquisar>
    </S.Form>
  )
}

export default FormVagas
