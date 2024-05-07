export default function HeaderCardPremio() {
  return <div className="grid grid-cols-4 sm:grid-cols-5 bg-indigo-400 font-semibold uppercase text-center justify-between items-center py-2 px-2 border rounded-md">
    <div>Id</div>
    <div>Prêmios</div>
    <div className="sm:fixed hidden">Descrição</div>
    <div>Pontos</div>
    <div>Ações</div>
  </div>
}