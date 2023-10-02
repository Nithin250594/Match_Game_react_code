import './index.css'

const TabsList = props => {
  const {tabDetails, clickOnFruit, tabCategory} = props
  const {tabId, displayText} = tabDetails

  const clickFruits = () => {
    clickOnFruit(tabId)
  }

  const tab = tabCategory === tabId

  const selectedTab = tab ? 'tab-selected' : ''

  return (
    <li key={tabId}>
      <button
        type="button"
        className={`category-btn ${selectedTab}`}
        onClick={clickFruits}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabsList
