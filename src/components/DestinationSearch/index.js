import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList

  return (
    <div className="destination">
      <li className="destinationList-container">
        <img src={imgUrl} className="destination-img" alt={name} />
        <p className="destination-name">{name}</p>
      </li>
    </div>
  )
}
export default DestinationSearch
