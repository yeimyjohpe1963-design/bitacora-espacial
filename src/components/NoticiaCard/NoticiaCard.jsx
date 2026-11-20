import './NoticiaCard.css'

function NoticiaCard({ titulo, resumen, imagen, fuente, fecha, enlace }) {
  const formateador = new Intl.DateTimeFormat("es-CO", { dateStyle: "medium" })
  const fechaFormateada = formateador.format(new Date(fecha))

  return (
    <article className="noticia-card">
      <img
        className="noticia-card__imagen"
        src={imagen}
        alt=""
        loading="lazy"
      />
      <h3 className="noticia-card__titulo">{titulo}</h3>
      <p className="noticia-card__resumen">{resumen}</p>
      <p className="noticia-card__meta">
        {fuente} · <time dateTime={fecha}>{fechaFormateada}</time>
      </p>
      <a
        className="noticia-card__enlace"
        href={enlace}
        target="_blank"
        rel="noopener noreferrer"
      >
        Leer noticia
      </a>
    </article>
  )
}

export default NoticiaCard