import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'
import {
  CustomHomeContainer,
  HeadingNotes,
  InputFormContainer,
  Input,
  InputTextera,
  Button,
  CustomUnOrderContainer,
} from './styledComponents'

const Notes = () => {
  const [currentTitle, setTitle] = useState('')
  const [currentText, setText] = useState('')
  const [currentList, setList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeText = event => {
    setText(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const newTitleAndText = {
      id: uuidv4(),
      currentTitle,
      currentText,
    }
    setList(prevList => [...prevList, newTitleAndText])
    setTitle('')
    setText('')
  }

  return (
    <CustomHomeContainer>
      <HeadingNotes>Notes</HeadingNotes>
      <InputFormContainer onSubmit={onSubmitForm}>
        <Input
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
          value={currentTitle}
        />
        <InputTextera
          type="text"
          placeholder="Take a Note..."
          onChange={onChangeText}
          value={currentText}
        />
        <Button type="submit">Add</Button>
      </InputFormContainer>
      {currentList.length !== 0 ?(
        <CustomUnOrderContainer>
        {currentList.map(each => (
          <NoteItem list={each} key={each.id} />
        ))}
      </CustomUnOrderContainer>
      ):(
        <div>
        <img src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png" alt="notes empty"/>
        <h1>No Notes Yet</h1>
        <p>Notes you add will appear here</p>
        </div>
      )}
      
    </CustomHomeContainer>
  )
}
export default Notes
