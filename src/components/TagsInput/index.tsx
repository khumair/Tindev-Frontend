import React, { useState } from 'react'

const TagsInput = () => {
  const [tags, setTags] = useState<any[]>([])
  const addTags = (e: any) => {
    if (e.target.value !== '') {
      setTags([...tags, e.target.value])
      e.target.value = ''
    }
    console.log(e)
    console.log(tags)
  }
  const removeTags = (indexToRemove: number) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)])
  }
  return (
    <>
      <div className="tags-input">
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onKeyUp={e => (e.key === 'Enter' ? addTags(e) : null)}
          placeholder="Press enter to add tags"
        />
      </div>
    </>
  )
}
export default TagsInput
