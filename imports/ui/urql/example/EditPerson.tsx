import React from 'react';
import { useMutation } from 'urql';

export const EditPerson = () => {
  const [result, editPerson] = useMutation(`
    mutation ($input: EditPersonInput!) {
        editPerson(input: $input) {
            result {
                id
                email
                name
            }
        }
    }
  `)

  return (
    <button onClick={() => {
      editPerson({
        input: {
          id: '2',
          name: 'Radek'
        }
      })
    }
    }>
      Edit person
    </button>
  )
}