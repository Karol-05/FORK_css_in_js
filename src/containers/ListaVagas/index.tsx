import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { VagasList } from './styles'

const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor back-end',
    localizacao: 'SP',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 8000,
    requisitos: ['Node', 'Express']
  },
  {
    id: 3,
    titulo: 'Fullstack Developer',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'clt',
    salarioMin: 9000,
    salarioMax: 13000,
    requisitos: ['React', 'Node', 'TypeScript']
  },
  {
    id: 4,
    titulo: 'UI Designer',
    localizacao: 'SP',
    nivel: 'junior',
    modalidade: 'freela',
    salarioMin: 2500,
    salarioMax: 4000,
    requisitos: ['Figma', 'UX']
  }
]


const ListaVagas = () => {
  const [filtro, setFiltro] = useState('')

  const vagasFiltradas = vagas.filter((x) =>
    x.titulo.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />

      <VagasList>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </VagasList>
    </div>
  )
}

export default ListaVagas