import Film from './Film'

const FilmBox = ({ films }) => {

    const filmList = films.map(film => {

        return (
            <Film name={film.name} key={film.id}>{film.url}</Film>
        )

    })

    return (
        <>
            <ul>
                {filmList}
            </ul>
        </>
    )

}

export default FilmBox;