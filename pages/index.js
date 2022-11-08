import config from '../config.json'
import styled from 'styled-components'
import { cssreset } from '../components/CSSRESET'
import Menu from '../components/Menu'
import { StyledTimeline } from '../components/Timeline'
import { StyledFavorites } from '../components/Favoritos'

function HomePage() {
  const StyleHomePage = {
    //backgroundColor: 'red'
  }
  return (
    <>
      <cssreset />
      <div style={StyleHomePage}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
        <Favoritos favoritos={config.favoritos} />
      </div>
    </>
  )
}

export default HomePage

const StyledHeader = styled.div`
  .imgUser {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user_info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }

  .banner {
    width: 100%;
    height: 45vh;
    object-fit: cover;
  }
`
function Header() {
  return (
    <StyledHeader>
      <img
        className="banner"
        src={`https://images.unsplash.com/photo-${config.banner}`}
      />
      <section className="user_info">
        <img
          className="imgUser"
          src={`https://github.com/${config.github}.png`}
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline(propriedades) {
  // console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists)
  // Statement
  // Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map(playlistName => {
        const videos = propriedades.playlists[playlistName]
        console.log(playlistName)
        console.log(videos)
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map(video => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}

function Favoritos(props) {
  const listFavoritos = Object.keys(props.favoritos)

  return (
    <StyledFavorites>
      {listFavoritos.map(listFavoritos => {
        const canais = props.favoritos[listFavoritos]
        console.log(canais)
        return (
          <section>
            <h2>{listFavoritos}</h2>
            <div>
              {canais.map(canais => {
                return (
                  <a href={canais.urlUser}>
                    <img src={canais.imgUser} />
                    <span>{canais.nameUser}</span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledFavorites>
  )
}
