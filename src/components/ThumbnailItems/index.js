import './index.css'

const ThumbnailItems = props => {
  const {thumbnailsDetails, thumbnailClicked} = props
  const {id, thumbnailUrl} = thumbnailsDetails

  const clickThumbnail = () => {
    thumbnailClicked(id)
  }

  return (
    <li className="eachThumbnailItem">
      <button type="button" className="thumbnail-btn" onClick={clickThumbnail}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-images" />
      </button>
    </li>
  )
}

export default ThumbnailItems
