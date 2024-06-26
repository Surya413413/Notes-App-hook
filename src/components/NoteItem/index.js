import {ListContainer} from './styledComponents'

const NoteItem = props => {
  const {list} = props
  const {currentTitle, currentText} = list
  return (
    <ListContainer>
      <h1>{currentTitle}</h1>
      <p>{currentText}</p>
    </ListContainer>
  )
}
export default NoteItem
