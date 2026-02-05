import { useState } from 'react';
import Tag from './Tag';

type Props = {
  title: string,
  content: string,
  initialTags?: string[],
  onTagAdded: Function,
  onTagRemoved: Function,
}

const Post = ({  initialTags = [], ...props }: Props) => {
  const [tags, setTags] = useState(initialTags);
  const [newTag, setNewTag] = useState('');

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      const updatedTags = [...tags, newTag.trim()];
      setTags(updatedTags);
      props.onTagAdded(newTag)
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
     props.onTagRemoved(tagToRemove);
  };

  return (
    <div className="post">
      <h2>{ props.title}</h2>
      <p>{ props.content}</p>

      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag" style={{ position: 'relative', display: 'inline-block', marginRight: '8px' }}>
            <button
              onClick={() => removeTag(tag)}
              style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
              }}
            >
              ×
            </button>
            <Tag text={tag} />
          </span>
        ))}
      </div>

      <div className="add-tag">
        <input
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="Add tag..."
        />
        <button onClick={addTag}>Add</button>
      </div>
    </div>
  );
};

export default Post;