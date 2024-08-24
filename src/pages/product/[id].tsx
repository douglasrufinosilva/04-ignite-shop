import { useRouter } from 'next/router'

export default function Products() {

  const { query } = useRouter()

  return (
    <div>
      Produtos - id da query de consulta {JSON.stringify(query)}
    </div>
  )
}