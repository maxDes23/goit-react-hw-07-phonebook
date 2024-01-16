import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  text-align: center;

  input {
    padding: 8px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
`;

const Filter = ({ value, onChange, contacts }) => {
  const isDuplicateName = contacts.some(
    contact => contact.name.toLowerCase() === value.toLowerCase()
  );

  return (
    <StyledLabel>
      Find contacts by name:
      <input
        type="text"
        placeholder="Search contacts"
        value={value}
        onChange={onChange}
        style={{ borderColor: isDuplicateName ? 'red' : 'initial' }}
      />
      {isDuplicateName && <p>Contact with the same name already exists!</p>}
    </StyledLabel>
  );
};

export default Filter;
